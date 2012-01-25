/******************************
* The Final Line Between Worlds *
*******************************/
// This is the final thing to be called and merely starts the game
var physicsFlag = false;
function gameLoop(){	
	// Step 0: Initialize physics as necessary
	if( physicsFlag == false ){
		InitializePhysics();
		physicsFlag == true;
	}
	// Step 1: Mass confluence
	//mibbuSetSpritePosition(theUniverse[0].sprite, 0, 125, Z_BACKGROUND);
	
	// Step 2: Handle input
	
	// Step 3: Step... into the future
	//thePhysicalWorld.world.Step(1 / 60, 10, 10);
//    world.DrawDebugData();
    //thePhysicalWorld.world.ClearForces();
} 

Game.on();
Game.hook(gameLoop);

