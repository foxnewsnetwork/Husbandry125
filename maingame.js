/******************************
* The Final Line Between Worlds *
*******************************/
// This is the final thing to be called and merely starts the game

$(document).ready(function(){
	InitializeGameMode();
});

function gameLoop(){	
	LoopGameMode();
} 

Game.on();
Game.hook(gameLoop);

