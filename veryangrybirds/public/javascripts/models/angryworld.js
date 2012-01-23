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

