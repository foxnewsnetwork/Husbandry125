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
	this.body = world.CreateBody( ammoDef.bodyDef );
	this.body.CreateFixture( ammoDef.fixDef );
	
	// Game stats
	this.image = ammoDef.image;
	this.player = player;
	
	// Game world connection functions
	this.draw = function( ) { 
		// TODO: implement me!
	}
	this.destroy = function( ){
		// TODO: implement me! (all I need to do is remove this object from the game)
	}
	
	// Game mechanics macros
	this.fire = function( velocity ){
		// TODO: should be called by the cannon functions
	}
};

