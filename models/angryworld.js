// Class AngryWorld
// TODO: replace the magical numbers with meaningful constant names
var AngryWorld = function( ){ 
	this.world = new b2World( 
		new b2Vec2(0,GRAVITY), // gravity vector
		true // objects fall asleep
	 );
	 this.bodyDef = new b2BodyDef;
	 this.bodyDef.type = b2Body.b2_staticBody;
	 this.bodyDef.position.Set(30,20);
	 
	 this.fixDef = new b2FixtureDef;
	 this.fixDef.density = 1.0;
	 this.fixDef.friction = 0.75;
	 this.fixDef.restitution = 0.25;
	 this.fixDef.shape = new b2PolygonShape;
	 this.fixDef.shape.SetAsBox(40,1);
	 
	 this.ground = this.world.CreateBody(this.bodyDef);
	 this.ground.CreateFixture(this.fixDef);
	 
	 this.update = function(){
		this.world.Step(1 / 60, 10, 10);
		this.world.ClearForces();
	 }
	 
	 // animation methods
	 this.sprite = new Game.bg( 'views/bg.png', 0, "E", {x:0,y:0} );
	 //this.sprite2 = new Game.bg('views/bg02.png', 2, "E", {x:600,y:123});
	 //mibbuSetSpritePosition( this.sprite2, 0, 400, Z_BACKGROUND + 1 );
	// this.sprite2.speed(3);
	 //this.sprite2.on();
	 this.draw = function(){
		mibbuSetSpritePosition( this.sprite, 0, 0, Z_BACKGROUND );
	 }
	 this.confluence = function(){
		// Not needed
	 }
	 this.conflux = function(){
		// Not needed
	 }
};


