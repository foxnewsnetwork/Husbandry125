/******************************
* The Final Line Between Worlds *
*******************************/
// This is the final thing to be called and merely starts the game


$(document).ready(function(){
	// InitializeGameMode();
	InitializeMouseController();
	InitializeMenuMode();
});

function gameLoop(){	
	// LoopGameMode();
	if( gameMode == MODE_MENU ){
		LoopMenuMode();
	}
	else if( gameMode == MODE_GAME ){
		LoopGameMode();
	}

} 

Game.on();
Game.hook(gameLoop);

