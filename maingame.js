/******************************
* The Final Line Between Worlds *
*******************************/
// This is the final thing to be called and merely starts the game
var physics;
$(document).ready(function(){
	 physics = new Physics;
});


function gameLoop(){	
	// Step 0: Initialize physics as necessary

	// Step 1: Mass confluence
	Confluence( physics.Barn, theSprBarn );
	Confluence( physics.Barn, theSprCannon );
	
	// Step 2: Handle input
	
	// Step 3: Step... into the future
	physics.update();
} 

Game.on();
Game.hook(gameLoop);

