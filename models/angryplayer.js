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

var PlayerDef = function(username, email, payment_method, payment_info, password) {
	this.username = username;
	this.email = email;
	this.payment_method = payment_method;
	this.payment_info = payment_info;
	this.password = password;
};

function PlayerFactory( order ){
	if(order == "default"){
		return new AngryPlayer( 
			new PlayerDef( 
				"",
				"",
				"",
				"",
				""
			)
		 );
	}
}
