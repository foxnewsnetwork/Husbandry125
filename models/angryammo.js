// Class AmmoDef
var AmmoDef = function( ){
	// physics
	this.bodyDef = new b2BodyDef;
	this.fixDef = new b2FixtureDef;
	this.fixDef.density = 2.0;
	this.fixDef.friction = 1.0;
	this.fixDef.restitution = 0.2;
	this.bodyDef.type = b2Body.b2_dynamicBody;
	this.fixDef.shape = new b2CircleShape( AMMO_WIDTH / 2 * METER_PER_PIXEL );
	//this.fixDef.shape.SetAsBox( AMMO_WIDTH * METER_PER_PIXEL, AMMO_HEIGHT * METER_PER_PIXEL );
	
	// game
};

var AngryAmmo = function( world, player, ammoDef ){
	// Creating physics components
	this.body = world.world.CreateBody( ammoDef.bodyDef );
	this.body.CreateFixture( ammoDef.fixDef );
	
	// Game stats
	this.player = player;
	this.speed = 0;
	this.sprite = new Game.spr('views/pig.png', AMMO_WIDTH, AMMO_HEIGHT, 1, 0);
	
	this.initialize = function(x,y) {
		mibbuSetSpritePosition( this.sprite, x, y, Z_CHARACTERS-1);
		this.conflux();
		this.sprite.speed(6);
	}
	this.move = function( direction ){
		this.speed = direction * MOVE_SPEED;
		mibbuMoveSpritePosition( this.sprite, direction * MOVE_SPEED, 0, 0);  
		this.conflux();
	}
	this.confluence = function(){
		Confluence( this.body, this.sprite );
	}
	this.deltaconfluence = function(){
		DeltaConfluence( this.body, this.sprite );
	}
	this.conflux = function(){
		Conflux( this.body, this.sprite );
	}
	this.show = function(camera){
		if( this.speed < 1 ){
			this.body.SetAngularVelocity(0);
		}
		this.deltaconfluence();
		camera.show(this.sprite);
		this.speed = this.body.GetLinearVelocity().x * PIXEL_PER_METER;
	}
	// Game world connection functions
	this.draw = function( ) { 
		// TODO: implement me!
	}
	this.destroy = function( ){
		// TODO: implement me! (all I need to do is remove this object from the game)
	}
	
	// Game mechanics macros
	this.fire = function( velocity ){
		this.speed = velocity.x * PIXEL_PER_METER;
		this.body.SetLinearVelocity( velocity )
	}
};

