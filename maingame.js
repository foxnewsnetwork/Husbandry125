/******************************
* The Final Line Between Worlds *
*******************************/
// This is the final thing to be called and merely starts the game

function GameLoop(){
	// Step 1: Mass confluence
	for( soul in theUniverse ) {
		Confluence( theUniverse[soul][physical], theUniverse[soul][sprite] );
	}
	
	// Step 2: Handle input
	
	
	// Step 3: Step... into the future
	thePhysicalWorld.world.Step(1 / 60, 10, 10);
	thePhysicalWorld.world.ClearForces();
} 

Game.on();
Game.hook(GameLoop);

