var CannonDef = function( ){
	// Physics
	this.bodyDef = new b2BodyDef;
	this.fixDef = new b2FixtureDef;
	this.fixDef.density = 4.0;
	this.fixDef.friction = 1.0;
	this.fixDef.restitution = 0.25;
	this.bodyDef.type = b2Body.b2_dynamicBody;
	this.fixDef.shape = new b2PolygonShape;
	this.fixDef.shape.SetAsBox( CANNON_WIDTH * METER_PER_PIXEL, CANNON_HEIGHT * METER_PER_PIXEL );
	// Game
	this.maxspeed = 0.25;
	this.maxhp = 100;
	this.ammoDef;
};

var AngryCannon = function( world, player, cannonDef ) {
	
	// Creating physics components
	this.body = world.world.CreateBody( cannonDef.bodyDef );
	this.body.CreateFixture( cannonDef.fixDef );
	
	// Game stats
	this.player = player;
	
	
};

