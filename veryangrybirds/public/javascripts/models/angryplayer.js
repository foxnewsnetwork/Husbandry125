// Class AngryPlayer
var AngryPlayer = function( playerDef ) { 
	// ID parameters
	this.username = playerDef.username;
	this.email = playerDef.email;
	this.payment_method = playerDef.payment_method;
	this.payment_info = playerDef.payment_info;
	this.password = playerDef.password;

	// Game related parameters
	this.active_barn = BarnFactory( "default" );
	this.barns = [this.active_barn];
	this.cannons = [CannonFactory('default')];
	
	
	// setup functions
	this.load( playerDef ){
		// TODO: load player from database
	}
	this.serialize( ){
		// TODO: save player to db
	}
};
