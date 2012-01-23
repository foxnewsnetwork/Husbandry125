// Ads the (physical) world object and the shit that are in it
var theWorld;
function addWorld( ){
	gbox.addObject({
		id: "world_id",
		group: "world",
		tileset: "world_tiles",
		initialize: function( ){ 
			theWorld = new AngryWorld( );
		},
		first: function( ){ 
		
		},
		blit: function( ){ 
		
		}
	});
}

function addPlayer(angryWorld){
	gbox.addObject({
		id: "player_id",
		group: "player",
		tileset: "player_tiles",
		initialize: function( ) {
			thePlayer = PlayerFactory("default");
		},
		first: function( ) {
		
		},
		blit: function(){ 
		
		}
	});
}

function addBarn(angryWorld, angryPlayer){
	gbox.addObject({
		id: "barn_id",
		group: "barn",
		tileset: "barn_tiles"
		initialize: function( ) {
			theBarn = new AngryBarn( angryWorld.world, angryPlayer );
		},
		first: function( ) {
		
		},
		blit: function(){ 
		
		}
	});
}

function addCannon(angryBarn){
	gbox.addObject({
		id:
		group:
		tileset:
		initialize: function( ) {
		
		},
		first: function( ) {
		
		},
		blit: function(){ 
		
		}
	});
}

function addAmmo(angryAmmo){
	gbox.addObject({
		id:
		group:
		tileset:
		initialize: function( ) {
		
		},
		first: function( ) {
		
		},
		blit: function(){ 
		
		}
	});
}
