// Our wrapper function for adding a player object -- this keeps our main game code nice and clean
function addPlayer() {
	// gbox.addObject creates a new object in your game, with variables and functions. In this case we're creating the player.
	gbox.addObject({

		// id refers to the specific object, group is the group it's in for rendering purposes, tileset is where the graphics come from
		id: 'player_id',
		group: 'player',
		tileset: 'player_tiles',

		// the initialize function contains code that is run when the object is first created. In the case of the player object this only happens once, at the beginning of the game, or possibly after a player dies and respawns.
		initialize: function() {
		  player = PlayerFactory( "default" );
		},

		// the first function is like a step function. it runs every frame and does calculations. it's called first because it happens before the rendering, so we calculate new positions and actions and THEN render the object
		first: function() {
		  // ...
		},

		// the blit function is what happens during the game's draw cycle. everything related to rendering and drawing goes here
		blit: function() {
		  	// ...
		},
	}); // end gbox.addObject for player
} // end addPlayer()

function addBarn( player ){ 

}

function addCannon( barn ){

}
