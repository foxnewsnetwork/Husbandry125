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
var AngryWorld = function( level ){ 
	this.world = new Box2D.Dynamics.b2World( 
		Box2D.Common.Math.b2Vec2(0,10), // gravity vector
		true // objects fall asleep
	 );
	 
	// Call this function first to initialize everything 
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
		this.world.CreateBody(bodyDef).CreateFixture(fixDef);
	 }
	 
	 this.addplayer = function( player ) { 
	 	// TODO: write me!
	 }
};

// Class AngryTower
var AngryTower = function(bodyDef, world) {
	this.bodies = [];
	this.fixtures = [];
	this.hp;
	this.image;
	this.draw = function( ) { 
		// TODO: implement me!
	}
};

var AngryCannon = function( ) {

};

var AngryBullet = function( ){

};

// Class AngryPlayer
var AngryPlayer = function( ) { 
	
};
