/******************************
* The Final Line Between Worlds *
*******************************/
// This is the final thing to be called and merely starts the game
var mousecontrol, bgcontrol;
var theWorld, thePlayer, theLand, theBarn, theCamera;

$(document).ready(function(){
	theCamera = new AngryCamera(); 
	theWorld = new AngryWorld();
	thePlayer = new AngryPlayer( new PlayerDef() );
	theLand = theWorld.ground;
	var barnDef = new BarnDef();
	theBarn = new AngryBarn( theWorld, thePlayer, barnDef );
	theBarn.initialize(400, 300);
    theBarn2 = new AngryBarn( theWorld,thePlayer,barnDef);
    theBarn2.initialize(100,1);
	//theCamera.follow( theBarn.ammo );
	bgcontrol = new BackgroundController();
	bgcontrol.camera = theCamera;
	InitializeMouseController();

     theBarn.ammo.sprite.hit(theBarn2.sprite, function() {
       alert("HIT");
    });
});

function gameLoop(){	
	// Step 0: Initialize physics as necessary

	// Step 1: Mass confluence

	theBarn.show(theCamera);
	theBarn2.show(theCamera);

	theCamera.follow( theBarn.ammo );
	bgcontrol.show(theCamera);
	
	var ammoFireFlag = false;
	// Step 2: Handle input
	if( CheckWithinBounds( leftButton, mouseX, mouseY ) ){
		leftButton.frame(1);
		theBarn.move(-1);
	}
	else if( CheckWithinBounds( rightButton, mouseX, mouseY ) ){
		rightButton.frame(1);
		theBarn.move(1);
	}
    else if (CheckWithinBounds(theBarn.sprite,mouseX,mouseY) && mouseDown)
    {
        //Firstly just realign the mouse. Even if the mouse isn't moved,
        //Ammo should be pinned to mouse.
        // theBarn.mouseSet();
		
        //open up listeners
       //document.addEventListener("mousemove", handleAmmoMove, true);
        document.addEventListener("mouseup", handleAmmoRelease, true);
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

