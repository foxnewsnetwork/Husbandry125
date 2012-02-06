// Class AmmoDef
var AmmoDef = function( ){
	// physics
	this.bodyDef = new b2BodyDef;
	this.fixDef = new b2FixtureDef;
	this.fixDef.density = 1.0;
	this.fixDef.friction = 1.2;
	this.fixDef.restitution = 0.2;
	this.bodyDef.type = b2Body.b2_dynamicBody;

	this.fixDef.shape = new b2PolygonShape;
	this.fixDef.shape.SetAsBox( 0.5 * AMMO_WIDTH * METER_PER_PIXEL, 0.5 * AMMO_HEIGHT * METER_PER_PIXEL );

	// game
};

var AngryAmmo = function( world, player, ammoDef ){
	// Creating physics components
    ammoDef.bodyDef.userData = 2 * player.id + 1;
	this.body = world.world.CreateBody( ammoDef.bodyDef );
	this.body.CreateFixture( ammoDef.fixDef );
	
	// Game stats
	this.player = player;
	this.speed = 0;
	this.sprite = new Game.spr('views/pig.png', AMMO_WIDTH, AMMO_HEIGHT, 1, 0);
	this.absX;
	this.absY;
	this.absZ;
	
	this.sprite.width = AMMO_WIDTH;
	this.sprite.height = AMMO_HEIGHT;

	this.flying = false;
	this.initialize = function(x,y) {
		mibbuSetSpritePosition( this.sprite, x, y, Z_CHARACTERS-1);
		this.absX = x;
		this.absY = y;
		this.absZ = Z_CHARACTERS-1;
		this.conflux();
		this.sprite.speed(0);
	}
	this.SetPosition = function(x,y){
		this.absX = x;
		this.absY = y;
		mibbuSetSpritePosition( this.sprite, x, y, this.sprite.z );
		this.conflux();
	}
	this.MovePosition = function(x,y){ 
		this.absX += x;
		this.absY += y;
		mibbuMoveSpritePosition( this.sprite, x, y, 0 );
		this.conflux();

	}
    this.reset = function(x,y) {
      mibbuSetSpritePosition( this.sprite, x + 10 , y -20, 0);
        this.body.ApplyForce(new b2Vec2(0,.5),this.body.GetWorldCenter());
		this.conflux();
        this.flying = false;

    }
	this.move = function( direction ){
		this.speed = direction * MOVE_SPEED;
		mibbuMoveSpritePosition( this.sprite, direction * MOVE_SPEED, 0, 0);
		this.absX += direction * MOVE_SPEED;
		this.conflux();
	}
	this.confluence = function(){
		Confluence( this.body, this.sprite );
	}
	
	this.conflux = function(){
		Conflux( this.body, this.sprite );
	}

	this.show = function(camera){
		this.confluence();
		if( this.speed < 1 ){
			this.body.SetAngularVelocity(0);
		}
		//this.deltaconfluence();
		camera.show(this.sprite);
		this.speed = this.body.GetLinearVelocity().x * PIXEL_PER_METER;
	}
	this.SetVelocity = function(Vx,Vy){
		this.speed = Vx;
		this.body.ApplyImpulse(new b2Vec2(Vx, Vy), this.body.GetWorldCenter());
		this.flying = true;
		this.sprite.speed(6);
		this.conflux;
	}

	
	// Game mechanics macros
//	this.fire = function( velocity ){
//		this.speed = velocity.x * PIXEL_PER_METER;
//		this.body.SetLinearVelocity( velocity )
//	}

    //Function the handles the firing of the ammo
    
	/****************************************
	*****************************************
	** Unused or not implemented functions **
	*****************************************
	*****************************************/
		// Game world connection functions
		this.fire = function(barnX,barnY) {
        //Can use to check if fired. Maybe useful for camera actions

        this.flying = true;
		this.sprite.speed(6);
        //Calculate angle and distance from origin. To be used when
        //calculating firing velocity.
        var distanceX = this.sprite.x-barnX;
		var distanceY = this.sprite.y-barnY;
     	var distance = Math.sqrt(distanceX*distanceX+distanceY*distanceY);
        var birdAngle = Math.atan2(distanceY,distanceX);

        //Horizontal force
        var horizontalForce = distance*Math.cos(birdAngle)/10;

        //Verticle force
        var verticalForce = distance*Math.sin(birdAngle)/10;
        //Create the force.
        var vec = new b2Vec2(horizontalForce,verticalForce);

        //Apply an impulse to the ammo.
        this.body.ApplyImpulse(vec, this.body.GetWorldCenter());

        //Handle conflux of ammo.
        this.conflux();
        this.flying = true;
        this.notHit = true;

    }
	this.draw = function( ) { 
		// TODO: implement me!
	}
	this.destroy = function( ){
		// TODO: implement me! (all I need to do is remove this object from the game)
	}
	this.completeConfluence = function() { 
		CompleteConfluence( this );
	}
	this.completeConflux = function() { 
		CompleteConflux( this ); 	
	}
    //Calculate mouse movement
    this.mouseMove = function(barnX, barnY) {
        //Have the actual ammo move with the mouse.
//        this.sprite.x = mouseX - AMMO_WIDTH/2 ;
//        this.sprite.y = mouseY - AMMO_HEIGHT/2 ;
        //mibbuSetSpritePosition( this.sprite,mouseX,mouseY, 0);
        $("#debug").html( "mousex: " + mouseX );

        //Calculate distance of sprite from starting point.
        var distanceX = this.sprite.x-barnX;
		var distanceY = this.sprite.y-barnY;
        this.conflux();

        //Check to see if ammo is dragged too far.
		if (distanceX*distanceX+distanceY*distanceY>SHOT_RADIUS) {
			//Calculate angle of fire.
            alert("HI");
            var shotAngle=Math.atan2(distanceY,distanceX);
            //Keep sprite from moving farther than designated radius.
            xcord=barnX+Math.sqrt(SHOT_RADIUS)*Math.cos(shotAngle);
			ycord=barnY+Math.sqrt(SHOT_RADIUS)*Math.sin(shotAngle);
            //mibbutSetSpritePosition(this.sprite,xcord,ycord,0);
		}

    }
	this.deltaconfluence = function(){
		DeltaConfluence( this.body, this.sprite );
	}
};

