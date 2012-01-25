/******************************
* The Final Line Between Worlds *
*******************************/
// This is the final thing to be called and merely starts the game
var tempBeing;
function gameLoop(){		
	// Step 1: Mass confluence
	/*
	for( soul in theUniverse ){
		tempBeing = theUniverse[soul];
		tempBeing.confluence();
	}
	*/
	// Step 2: Handle input
	
	// Step 3: Step... into the future
	thePhysicalWorld.world.Step(1 / 60, 10, 10);
//    world.DrawDebugData();
    thePhysicalWorld.world.ClearForces();
} 

Game.on();
//Game.hook(gameLoop);

