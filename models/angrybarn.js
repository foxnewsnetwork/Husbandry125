// Class BarnDef
var BarnDef = function( ){
	// physics
	this.bodyDef = new b2BodyDef;
	this.fixDef = new b2FixtureDef;
	this.fixDef.density = 4.0;
	this.fixDef.friction = 1.0;
	this.fixDef.restitution = 0.2;
	this.bodyDef.type = b2Body.b2_dynamicBody;
	this.fixDef.shape = new b2PolygonShape;
	this.fixDef.shape.SetAsBox( BARN_WIDTH * METER_PER_PIXEL, BARN_HEIGHT*METER_PER_PIXEL );
	
	// game
	this.maxspeed = 0.25;
	this.maxhp = 100;
	this.cannonDef;
};

// Class AngryBarn
var AngryBarn = function(world, player, barnDef) {
	// Initializing physics
	this.body = world.world.CreateBody( barnDef.bodyDef );
	this.body.CreateFixture( barnDef.fixDef );
	
	// Initializing game properties
	this.maxhp = barnDef.maxhp;
	this.currenthp = barnDef.maxhp;
//	this.image = barnDef.image;
	this.player = player;
	//this.cannon = AngryCannon( world, player, barnDef.cannonDef );
	this.maxspeed = barnDef.maxspeed;
	
	// Game world connection functions
	this.draw = function( ) { 
		// TODO: implement me!
	}
	this.destroy = function( ){
		// TODO: implement me! (all I need to do is remove this object from the game)
	}
	this.serialize = function( ){
		// TODO: implement me! (I need to serialize the properties in this function and save to db)
	}
	this.load = function(world, player){
		// TODO: implement me! ( I need to load from the db the player's vehicle )
	}
	
	// Game mechanics macros 
	this.move = function( direction ){
		// TODO: apply the correct force to move in the given direction (either left or right) 
	}
};


