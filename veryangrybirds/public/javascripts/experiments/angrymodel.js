// The model file
// there is a 30 pixel to 1 m ratio in this game 
// Convenience shortcuts
 var   b2Vec2 = Box2D.Common.Math.b2Vec2
    ,  b2AABB = Box2D.Collision.b2AABB
 	,	b2BodyDef = Box2D.Dynamics.b2BodyDef
 	,	b2Body = Box2D.Dynamics.b2Body
 	,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
 	,	b2Fixture = Box2D.Dynamics.b2Fixture
 	,	b2World = Box2D.Dynamics.b2World
 	,	b2MassData = Box2D.Collision.Shapes.b2MassData
 	,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
 	,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
 	,	b2DebugDraw = Box2D.Dynamics.b2DebugDraw
    ,  b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
    ;

// Class AngryWorld
var AngryWorld = function( worldDef ){ 
	this.world = new Box2D.Dynamics.b2World( 
		Box2D.Common.Math.b2Vec2(0,10), // gravity vector
		true // objects fall asleep
	 );
	 
	 this.ground;
	// Call this function first to initialize the world 
	 this.initialize = function( ) {
	 	var fixDef = new b2FixtureDef;
	 	var bodyDef = new b2BodyDef;
	 	// Create the ground
	 	bodyDef = b2Body.b2_staticBody; // ground does not move
	 	fixDef.density = 1.0; 
	 	fixDef.friction = 0.5;
	 	fixDef.restitution = 0.2;
	 	
	 	fixDef.shape = new b2PolygonShape;
		fixDef.shape.SetAsBox(40, 1);
		bodyDef.position.Set(20, 13.5);
		this.ground = this.world.CreateBody(bodyDef);
		this.ground.CreateFixture(fixDef);
	 }
};

// Class AngryBarn
var AngryBarn = function(world, player, barnDef) {
	// Initializing physics
	this.body = world.CreateBody( barnDef.bodyDef );
	this.body.CreateFixture( barnDef.fixDef );
	
	// Initializing game properties
	this.maxhp = barnDef.maxhp;
	this.currenthp = barnDef.maxhp;
	this.image = barnDef.image;
	this.player = player;
	this.cannon = AngryCannon( world, player, barnDef.cannonDef );
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

var AngryCannon = function( world, player, cannonDef ) {
	// Creating physics components
	this.body = world.CreateBody( cannonDef.bodyDef );
	this.body.CreateFixture( cannonDef.fixDef );
	
	// Game stats
	this.image = cannonDef.image;
	this.ammo = AngryAmmo( world, player, cannonDef );
	this.player = player;
	
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
	
	// game mechanics macros
	this.move = function( direction ){
		// TODO: implement me! (be sure to make sure I move at the same speed as my barn)
	}
	this.fire = function( velocity ){
		// TODO: implement me! (velocity is a b2Vec) Be sure to initialize an ammo in here
	}
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

// Class AngryPlayer
var AngryPlayer = function( playerDef ) { 
	// ID parameters
	this.username = playerDef.username;
	this.email = playerDef.email;
	this.payment_method = playerDef.payment_method;
	this.payment_info = playerDef.payment_info;
	this.password = playerDef.password;

	// Game related parameters
	this.active_barn = BarnFactory( "default" );
	this.barns = [this.active_barn];
	this.cannons = [CannonFactory('default')];
	
	
	// setup functions
	this.load( playerDef ){
		// TODO: load player from database
	}
	this.serialize( ){
		// TODO: save player to db
	}
};
