// Class BarnDef
var BarnDef = function( ){
	// physics
	this.bodyDef = new b2BodyDef;
	this.fixDef = new b2FixtureDef;

	this.fixDef.density = 0.1;
	this.fixDef.friction = 0.10;
	this.fixDef.restitution = .4;
	this.bodyDef.type = b2Body.b2_dynamicBody;
	this.fixDef.shape = new b2PolygonShape;

	this.fixDef.shape.SetAsBox( (0.5 * BARN_WIDTH )  * METER_PER_PIXEL, (0.5 * BARN_HEIGHT) * METER_PER_PIXEL  );

	// game
	this.maxspeed = 0.25;
	this.maxhp = 100;
	this.ammoDef = new AmmoDef();
};

// Class AngryBarn
var AngryBarn = function(world, player, barnDef) {
	// Initializing physics
     barnDef.bodyDef.userData = player.id * 2;

	this.body = world.world.CreateBody( barnDef.bodyDef );
	this.body.CreateFixture( barnDef.fixDef );
	
	// Initializing game properties
	this.maxhp = barnDef.maxhp;
	this.currenthp = barnDef.maxhp;
//	this.image = barnDef.image;
	this.player = player;
    this.sessionId = player.sessionId;
	this.ammo = new AngryAmmo( world, player, barnDef.ammoDef );
	this.maxspeed = barnDef.maxspeed;
	this.mode = BARN_MODE_MOVE;
	
	// Introducing the concept of absolute pixel coordinates
	this.absX;
	this.absY;
	this.absZ;
	this.direction;
	
	// animation
	this.sprite2 = new Game.spr('views/RPigs.png', BARN_WIDTH, BARN_HEIGHT, 24, 0);
	this.sprite = new Game.spr('views/LPigs.png', BARN_WIDTH, BARN_HEIGHT, 24, 0);
	this.sprite.width = BARN_WIDTH;
	this.sprite.height = BARN_HEIGHT;
	this.sprite2.width = BARN_WIDTH;
	this.sprite2.height = BARN_HEIGHT;
	this.cannonSprite2 = new Game.spr('views/RCannons.png', CANNON_WIDTH, CANNON_HEIGHT, 24, 0);
	this.cannonSprite = new Game.spr('views/LCannons.png', CANNON_WIDTH, CANNON_HEIGHT, 24, 0);
	this.cannonSprite.width = CANNON_WIDTH;
	this.cannonSprite.height = CANNON_HEIGHT;
	this.cannonSprite2.width = CANNON_WIDTH;
	this.cannonSprite2.height = CANNON_HEIGHT;
	// Game world connection functions
	this.initialize = function(x,y) {
		this.absX = x;
		this.absY = y;
		this.cannonSprite.absX = x;
		this.cannonSprite.absY = y - CANNON_HEIGHT;
		this.direction = -1;
		
		mibbuSetSpritePosition( this.sprite, x, y, Z_CHARACTERS);
		mibbuSetSpritePosition( this.cannonSprite, x, y-CANNON_HEIGHT, Z_CHARACTERS);
		mibbuSetSpritePosition( this.sprite2, x, y, Z_CHARACTERS);
		mibbuSetSpritePosition( this.cannonSprite2, x, y-CANNON_HEIGHT, Z_CHARACTERS);
		
		this.cannonSprite2.frame(25);
		this.sprite2.frame(25);
		this.cannonSprite.speed(0);
		this.sprite.speed(0);
		this.cannonSprite2.speed(0);
		this.sprite2.speed(0);
		this.conflux();
		this.ammo.initialize(x+5, y - BARN_HEIGHT);
	}
	
	// Game mechanics macros 
	// Sets the physical body location  
	// Call this function to set positions (be sure to use pixels)
	this.rotateCannon = function(angle){ 
		mibbuRotateSprite( this.cannonSprite, angle * (-this.direction) );
	}
	this.SetPosition = function(x,y){
		this.absX = x;
		this.absY = y;
		mibbuSetSpritePosition( this.sprite, x, y, this.sprite.z );
		mibbuSetSpritePosition( this.cannonSprite, x, y-CANNON_HEIGHT, this.sprite.z );
		this.conflux();
	}
	this.MovePosition = function(x,y){ 
		this.absX += x;
		this.absY += y;
		mibbuMoveSpritePosition( this.sprite, x, y, 0 );
		mibbuMoveSpritePosition( this.cannonSprite, x, y, 0 );
		this.conflux();
	}
	this.move = function( direction ){
//		mibbuMoveSpritePosition( this.sprite, direction * MOVE_SPEED, 0, 0);
//		mibbuMoveSpritePosition( this.cannonSprite, direction * MOVE_SPEED, 0, 0);
//		this.absX += direction * MOVE_SPEED;

		// We manage the issue with the pigs facing direction here
		this.switchDirection( this.direction != direction );
		this.direction = direction;
        $("#debug").html("vec x: " + this.body.GetLinearVelocity().x + "veloc y: " + this.body.GetLinearVelocity().y);

        if(this.body.GetLinearVelocity().y == 0)
        {
            this.body.ApplyForce(new b2Vec2(0,0),this.body.GetWorldCenter());
           // this.ammo.body.ApplyForce(new b2Vec2(0,.01),this.ammo.body.GetWorldCenter());

        }
        var speed = new b2Vec2(direction * MOVE_SPEED,0);
		//this.completeConflux();
		this.ammo.body.SetLinearVelocity(speed);
        this.body.SetLinearVelocity(speed);

        this.conflux();
        this.ammo.conflux();
	}
    this.switchDirection = function( flag ){ 
		if(flag) {
			var temp = this.sprite;
			this.sprite = this.sprite2;
			this.sprite2 = temp;
			
			this.sprite.frame(0);
			this.sprite2.frame(25);
			
			temp = this.cannonSprite;
			this.cannonSprite = this.cannonSprite2;
			this.cannonSprite2 = temp;
			
			this.cannonSprite.frame(0);
			this.cannonSprite2.frame(25);
		}
	}
	this.confluence = function(){
		Confluence( this.body, this.sprite );
		Confluence( this.body, this.cannonSprite );
		Confluence( this.body, this.sprite2 );
		Confluence( this.body, this.cannonSprite2 );
		mibbuMoveSpritePosition( this.cannonSprite,0,-CANNON_HEIGHT,0);
		mibbuMoveSpritePosition( this.cannonSprite2,0,-CANNON_HEIGHT,0);
		mibbuRotateSprite(this.sprite, this.body.GetAngle() * 180 / Math.PI );
	}
	this.conflux = function(){
		Conflux( this.body, this.sprite );
	}
	this.show = function( camera ){
		this.confluence();
		camera.show(this.sprite);
		camera.show(this.cannonSprite);
		this.ammo.show(camera);
	}
	this.fire = function( velocity ){
		this.ammo.fire( velocity );
	}
    this.wasHit = function(){

    }
	/****************************************
	*****************************************
	** Unused or not implemented functions **
	*****************************************
	*****************************************/
	this.destroy = function( ){
        mibbuSetSpritePosition( this.sprite, -300 , 0 -20, 0);
        mibbuSetSpritePosition( this.cannonSprite, -300 , 0 -20, 0);

		this.conflux();
	}
	this.serialize = function( ){
		// TODO: implement me! (I need to serialize the properties in this function and save to db)
	}
	this.load = function(world, player){
		// TODO: implement me! ( I need to load from the db the player's vehicle )
	}
	this.deltaconfluence = function(){
		DeltaConfluence( this.body, this.sprite );
		DeltaConfluence( this.body, this.cannonSprite );
		//mibbuMoveSpritePosition( this.cannonSprite,10,-CANNON_HEIGHT,0);
	}
	this.completeConfluence = function() { 
		CompleteConfluence( this );
	}
	this.completeConflux = function() { 
		CompleteConflux( this ); 	
	}
	// In all honesty, I feel the models shouldn't have to worry about the mouse
	this.mouseSet = function(){
		mibbuSetSpritePosition(this.ammo.sprite,mouseX,mouseY,0);


    }
};


