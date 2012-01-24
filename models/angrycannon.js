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

