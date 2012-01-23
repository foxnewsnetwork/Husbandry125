// Class BarnDef
var BarnDef = function( ){

}

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

function BarnFactory( 
