// Class AngryPlayer
var AngryPlayer = function(id,sessionId ,playerDef ) {
	// ID parameters
    this.id = id;
    this.sessionId = sessionId;
	this.username = playerDef.username;
	this.email = playerDef.email;
	this.payment_method = playerDef.payment_method;
	this.payment_info = playerDef.payment_info;
	this.password = playerDef.password;

	// Game related parameters
/*
	this.active_barn = BarnFactory( "default" );
	this.barns = [this.active_barn];
	this.cannons = [CannonFactory('default')];
	*/
	
	// setup functions
	this.load = function( playerDef ){
		// TODO: load player from database
	}
	this.serialize = function( ){
		// TODO: save player to db
	}
};

var PlayerDef = function( ) {
	this.username = "username";
	this.email = "email@email.email";
	this.payment_method = "visa";
	this.payment_info = "1234 5648 9713 1258 258 31687 4";
	this.password = "nigger";
};

