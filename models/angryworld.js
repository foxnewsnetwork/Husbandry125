// Class AngryWorld
// TODO: replace the magical numbers with meaningful constant names
var AngryWorld = function( ){ 
	this.world = new b2World( 
		new b2Vec2(0,GRAVITY), // gravity vector
		true // objects fall asleep
	 );
	 this.bodyDef = new b2BodyDef;
	 this.bodyDef.type = b2Body.b2_staticBody;
	 this.bodyDef.position.Set(GAME_WIDTH / 2 * METER_PER_PIXEL, (GAME_HEIGHT - LAND_HEIGHT / 2) * METER_PER_PIXEL);
	 
	 this.fixDef = new b2FixtureDef;
	 this.fixDef.density = 1.0;
	 this.fixDef.friction = 0.75;
	 this.fixDef.restitution = 0.25;
	 this.fixDef.shape = new b2PolygonShape;
	 this.fixDef.shape.SetAsBox(LAND_WIDTH / 2 * METER_PER_PIXEL, LAND_HEIGHT / 2 * METER_PER_PIXEL);
	 
	 this.ground = this.world.CreateBody(this.bodyDef);
	 this.ground.CreateFixture(this.fixDef);
	 this.groundSprite = new Game.spr('views/ground.png', LAND_WIDTH, LAND_HEIGHT, 1, 0);

	 this.groundSprite.width = LAND_WIDTH;
	 this.groundSprite.height = LAND_HEIGHT;
	 
	 this.bodyDef.position.Set(0, ( WALL_HEIGHT / 2  - LAND_HEIGHT )* METER_PER_PIXEL );
	 this.fixDef.friction = 0;
	 // RESTITUTION TURNED UP FOR THE LULZ, TURN IT DOWN IN ACTUAL GAME
	 this.fixDef.restitution = 1;
	 this.fixDef.shape.SetAsBox( WALL_WIDTH / 2 * METER_PER_PIXEL, WALL_HEIGHT / 2 * METER_PER_PIXEL );
	 this.leftWall = this.world.CreateBody(this.bodyDef);
	 this.leftWall.CreateFixture(this.fixDef);
	 this.leftWallSprite = new Game.spr('views/wall.png', WALL_WIDTH, WALL_HEIGHT, 1, 0);
	 this.leftWallSprite.width = WALL_WIDTH;
	 this.leftWallSprite.height = WALL_HEIGHT;
	 
	 this.bodyDef.position.Set(GAME_WIDTH * METER_PER_PIXEL, ( WALL_HEIGHT / 2  - LAND_HEIGHT )* METER_PER_PIXEL );
	 this.rightWall = this.world.CreateBody(this.bodyDef);
	 this.rightWall.CreateFixture(this.fixDef);
	 this.rightWallSprite = new Game.spr('views/Rwall.png', WALL_WIDTH, WALL_HEIGHT, 1, 0);
	 this.rightWallSprite.width = WALL_WIDTH;
	 this.rightWallSprite.height = WALL_HEIGHT;
	 
	 this.bodyDef.position.Set( GAME_WIDTH / 2 * METER_PER_PIXEL, 0 );
	 this.fixDef.friction = 1.0;
	 this.fixDef.restitution = 0.1;
	 this.fixDef.shape.SetAsBox( SKY_WIDTH / 2 * METER_PER_PIXEL, SKY_HEIGHT / 2 * METER_PER_PIXEL );
	 this.sky = this.world.CreateBody(this.bodyDef);
	 this.sky.CreateFixture(this.fixDef);
	 this.skySprite = new Game.spr('views/ceiling.png', SKY_WIDTH, SKY_HEIGHT, 1, 0);
	 this.skySprite.width = SKY_WIDTH;
	 this.skySprite.height = SKY_HEIGHT;
	 
	 this.initialize = function(){ 
		mibbuSetSpritePosition( this.groundSprite, 0, 0, Z_CHARACTERS - 1 );
		this.groundSprite.speed(0);
		mibbuSetSpritePosition( this.leftWallSprite, 0, 0, Z_CHARACTERS - 2 );
		this.leftWallSprite.speed(0);
		mibbuSetSpritePosition( this.rightWallSprite, 0, 0, Z_CHARACTERS - 2 );
		this.rightWallSprite.speed(0);
		mibbuSetSpritePosition( this.skySprite, 0, 0, Z_CHARACTERS - 1 );
		this.skySprite.speed(0);
	 }
	 
	 this.update = function(){
		this.confluence();
		this.world.Step(1 / 60, 10, 10);
		this.world.ClearForces();
	 }
	 
	 // animation methods
	 //this.sprite = new Game.bg( 'views/backgroundfull.png', 0, "E", {x:0,y:0} );
	 //this.sprite.position( 500, 0 ,1 );
	 //this.sprite2 = new Game.bg('views/bg02.png', 2, "E", {x:600,y:123});
	 //mibbuSetSpritePosition( this.sprite2, 0, 400, Z_BACKGROUND + 1 );
	//this.sprite.speed(0);
	 //this.sprite.on();
	 this.draw = function(){
		//mibbuSetSpritePosition( this.sprite, 0, 0, Z_BACKGROUND );
	 }
	 this.confluence = function(){
		Confluence( this.ground, this.groundSprite );
		Confluence( this.leftWall, this.leftWallSprite );
		Confluence( this.rightWall, this.rightWallSprite );
		Confluence( this.sky, this.skySprite );
	 }
	 this.conflux = function(){
		// Not needed
	 }
    this.addContactListener = function(callbacks) {
        var listener = new Box2D.Dynamics.b2ContactListener;
        if (callbacks.BeginContact) listener.BeginContact = function(contact) {
            callbacks.BeginContact(contact.GetFixtureA().GetBody().GetUserData(),
                                   contact.GetFixtureB().GetBody().GetUserData());
        }
        if (callbacks.EndContact) listener.EndContact = function(contact) {
            callbacks.EndContact(contact.GetFixtureA().GetBody().GetUserData(),
                                 contact.GetFixtureB().GetBody().GetUserData());
        }
        if (callbacks.PostSolve) listener.PostSolve = function(contact, impulse) {
            callbacks.PostSolve(contact.GetFixtureA().GetBody().GetUserData(),
                                 contact.GetFixtureB().GetBody().GetUserData(),
                                 impulse.normalImpulses[0]);
        }
        this.world.SetContactListener(listener);
    }

};



