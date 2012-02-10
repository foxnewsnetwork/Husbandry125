/******************************
* The Final Line Between Worlds *
*******************************/
// This is the final thing to be called and merely starts the game
var mousecontrol, bgcontrol;
var theWorld, thePlayer, theLand, theBarn, theCamera;
var actors, playerBarn;
var crosshair;
$(document).ready(function(){
	actors = {};

    theCamera = new AngryCamera();
	theWorld = new AngryWorld();
	theWorld.initialize();
	theLand = theWorld.ground;
    crosshair = new Game.spr('views/crosshair.png', CROSSHAIR_WIDTH, CROSSHAIR_HEIGHT, 1, 0);
    crosshair.speed(0);
    mibbuSetSpritePosition(crosshair,-CROSSHAIR_WIDTH,-CROSSHAIR_HEIGHT,Z_CHARACTERS+1);
    var barnDef = new BarnDef();

    //initialze actors and store them in an array for easy access.
    //As ammo is kind of its own entity, reserve space next to the barns.
    for(var i = 0; i < PLAYER_COUNT; i++)
    {
        //Player create here. Once we change the player definition process
        //this will have to be changed probably.
        thePlayer = new AngryPlayer( i,new PlayerDef() );

	    theBarn = new AngryBarn( theWorld, thePlayer, barnDef );
	    theBarn.initialize(300 * i, 500);
        actors[2*i] = theBarn;
        actors[2*i+1] = theBarn.ammo;
    }

     //right now define the first barn to be the one we focus on.

     playerBarn = actors[2];
     
     // Testing rotation of a barn
     // Uncommented the following line to contract cancer
     // mibbuRotateSprite(theBarn.sprite, 0.15);
     
     
	theCamera.follow( playerBarn.ammo );

	bgcontrol = new BackgroundController();
	bgcontrol.camera = theCamera;
	InitializeMouseController();



});

function gameLoop(){	
	// Step 0: Initialize physics as necessary

	// Step 1: Mass confluence
    for(var i = 0; i < PLAYER_COUNT; i++)
    {
        actors[i*2].show(theCamera)
    }
    $("#debug").html("y velocity: " + playerBarn.body.GetLinearVelocity().y);

	theCamera.follow( playerBarn.ammo );
	bgcontrol.show(theCamera);
	
	var ammoFireFlag = false;
	// Step 2: Handle input
	if( CheckWithinBounds( leftButton, mouseX, mouseY ) ){
		leftButton.frame(1);
		playerBarn.move(-1);
	}
	else if( CheckWithinBounds( rightButton, mouseX, mouseY ) ){
		rightButton.frame(1);
		playerBarn.move(1);
	}

    else if (CheckWithinBounds(playerBarn.cannonSprite,mouseX,mouseY) && mouseDown && !playerBarn.ammo.flying)
    {
        //Firstly just realign the mouse. Even if the mouse isn't moved,
        //Ammo should be pinned to mouse.
//         playerBarn.mouseSet();
        //open up listeners

       document.addEventListener("mousemove", handleAmmoMove, true);
        document.addEventListener("mouseup", handleAmmoRelease, true);

    }
    else if (CheckWithinBounds(playerBarn.sprite,mouseX,mouseY) && mouseDown && !playerBarn.ammo.flying)
    {
        //Firstly just realign the mouse. Even if the mouse isn't moved,
        //Ammo should be pinned to mouse.
//         playerBarn.mouseSet();
        //open up listeners

       document.addEventListener("mousemove", handleAmmoMove, true);
        document.addEventListener("mouseup", handleAmmoRelease, true);

    }
	else {
		leftButton.frame(0);
		rightButton.frame(0);

	}

     if (playerBarn.ammo.flying )
     {
         mibbuSetSpritePosition(crosshair,-CROSSHAIR_WIDTH,-CROSSHAIR_HEIGHT,0);
         var vec = new b2Vec2(0,0);
         $("#debug").html( "velocity y : " + playerBarn.ammo.body.GetLinearVelocity().y );

         if(playerBarn.ammo.body.GetLinearVelocity().x == 0 )
         {
             playerBarn.ammo.reset(playerBarn.cannonSprite.x,playerBarn.cannonSprite.y);
         }

     }

    theWorld.addContactListener({
        //Once a contact happens. This actually occurs more then we'd think
        //so leaving this blank till theres an actual use.
        BeginContact: function(idA, idB) {
        },

        //After collision concludes.
        PostSolve: function(idA, idB, impulse) {

        //if impulse meets the threshold and the two collision objects
        // have an id, do stuff.
        if (impulse < .1 || idA == null || idB == null) return;
        //Get the entities from the actors array
          var entityA = actors[idA];
          var entityB = actors[idB];
          //Find which entity is a projectile (the one that is looking to hit something)
          //Change that entity to being hit, and perform some function on the was hit entity.
          if(entityA.notHit )
          {
              if(idB % 2 == 0 && (idA - 1) != idB){
                  entityA.notHit = false;

              entityB.wasHit();
              }
          }
          else if(entityB.notHit)
          {
              if(idA % 2 == 0  && (idB - 1) != idA){
                  entityB.notHit = false;
                entityA.wasHit();
              }
          }

        }
      });
	// Step 3: Step... into the future
	theWorld.update();
} 

Game.on();
Game.hook(gameLoop);

