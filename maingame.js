/******************************
* The Final Line Between Worlds *
*******************************/
// This is the final thing to be called and merely starts the game
var mousecontrol;
var theWorld, thePlayer, theLand, theBarn, theCamera;

$(document).ready(function(){
	theWorld = new AngryWorld();
	thePlayer = new AngryPlayer( new PlayerDef() );
	theLand = theWorld.ground;
	var barnDef = new BarnDef();
	barnDef.cannonDef = new CannonDef();
	barnDef.cannonDef.ammoDef = new AmmoDef();
	theBarn = new AngryBarn( theWorld, thePlayer, barnDef );
	theBarn.initialize(250, 250);
	theCamera = new AngryCamera(); 
	InitializeMouseController();
});


function gameLoop(){	
	// Step 0: Initialize physics as necessary

	// Step 1: Mass confluence
	theBarn.show(theCamera);
	
	// Step 2: Handle input
	if( CheckWithinBounds( leftButton, mouseX, mouseY ) ){
		leftButton.frame(1);
		theBarn.move(-1);
	}
	else if( CheckWithinBounds( rightButton, mouseX, mouseY ) ){
		rightButton.frame(1);
		theBarn.move(1);
	}
	else {
		leftButton.frame(0);
		rightButton.frame(0);
	}
	
	// Step 3: Step... into the future
	theWorld.update();
} 

Game.on();
Game.hook(gameLoop);

