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
var array = mibbuConvertString2Frame("daddy bad");
    //var array = mibbuConvertInt2Frame(12345);
    alert(array[5]);
} 

Game.on();
Game.hook(gameLoop);

