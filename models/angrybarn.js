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
	this.cannonDef = new CannonDef();
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
	this.cannon = new AngryCannon( world, player, barnDef.cannonDef );
	this.maxspeed = barnDef.maxspeed;
	
	// animation
	this.sprite = new Game.spr('views/pigbig.png', BARN_WIDTH, BARN_HEIGHT, 3, 0);
	// Game world connection functions
	this.initialize = function(x,y) { 
		mibbuSetSpritePosition( this.sprite, x, y, Z_CHARACTERS);
		this.sprite.speed(7);
		this.conflux();
		this.cannon.initialize(x+10, y-CANNON_HEIGHT);
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
		mibbuMoveSpritePosition( this.sprite, direction * MOVE_SPEED, 0, 0);  
		this.conflux();
		this.cannon.move(direction);
	}
	this.confluence = function(){
		Confluence( this.body, this.sprite );
	}
	this.conflux = function(){
		Conflux( this.body, this.sprite );
	}
	this.show = function( camera ){
		this.confluence();
		camera.show(this.sprite);
		this.cannon.show(camera);
	}
	this.fire = function( velocity ){
		this.cannon.fire( velocity );
	}
};


