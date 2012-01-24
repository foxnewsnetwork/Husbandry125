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

