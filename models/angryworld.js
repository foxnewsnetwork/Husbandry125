// Class AngryWorld
// TODO: replace the magical numbers with meaningful constant names
var AngryWorld = function( ){ 
	this.world = new b2World( 
		new b2Vec2(0,GRAVITY), // gravity vector
		true // objects fall asleep
	 );
	 this.bodyDef = new b2BodyDef;
	 this.bodyDef.type = b2Body.b2_staticBody;
	 this.bodyDef.position.Set(30, 13.5);
	 
	 this.fixDef = new b2FixtureDef;
	 this.fixDef.density = 1.0;
	 this.fixDef.friction = 0.75;
	 this.fixDef.restitution = 0.2;
	 this.fixDef.shape = new b2PolygonShape;
	 this.fixDef.shape.SetAsBox(40,1);
	 
	 this.ground = this.world.CreateBody(this.bodyDef);
	 this.ground.CreateFixture(this.fixDef);
};


