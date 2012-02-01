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
	this.ammoDef = new AmmoDef();
};

var AngryCannon = function( world, player, cannonDef ) {
	
	// Creating physics components
	this.body = world.world.CreateBody( cannonDef.bodyDef );
	this.body.CreateFixture( cannonDef.fixDef );
	
	// Game stats
	this.player = player;
	//this.ammo = new AngryAmmo( cannonDef.ammoDef );
	
	// animation use
	this.sprite = new Game.spr('views/cannon.png', CANNON_WIDTH, CANNON_HEIGHT, 1, 0);
	this.initialize = function(x,y){
		mibbuSetSpritePosition( this.sprite, x, y, Z_CHARACTERS-1);
		this.conflux();
		this.sprite.speed(0);
		//this.ammo.initialize(x, y + AMMO_HEIGHT);
	}
	this.move = function( direction ){
		mibbuMoveSpritePosition( this.sprite, direction * MOVE_SPEED, 0, 0);  
		this.conflux();
		//this.ammo.move(direction);
	}
	this.confluence = function(){
		Confluence( this.body, this.sprite );
	}
	this.conflux = function(){
		Conflux( this.body, this.sprite );
	}
	this.show = function(camera){
		this.confluence();
		camera.show(this.sprite);
		//this.ammo.show(camera);
	}
	this.fire = function( velocity ){
		this.ammo.fire( velocity );
	}
};

