/******************************
* The Final Line Between Worlds *
*******************************/
// This is the final thing to be called and merely starts the game
var mousecontrol, bgcontrol;
var theWorld, thePlayer, theLand, theBarn, theCamera;
var actors, playerBarn;
$(document).ready(function(){
	actors = {};

    theCamera = new AngryCamera();
	theWorld = new AngryWorld();
	theLand = theWorld.ground;

    var barnDef = new BarnDef();

    //initialze actors and store them in an array for easy access.
    //As ammo is kind of its own entity, reserve space next to the barns.
    for(var i = 0; i < 2; i++)
    {
        //Player create here. Once we change the player definition process
        //this will have to be changed probably.
        thePlayer = new AngryPlayer( i,new PlayerDef() );

	    theBarn = new AngryBarn( theWorld, thePlayer, barnDef );
	    theBarn.initialize(150 * i, 300);
        actors[2*i] = theBarn;
        actors[2*i+1] = theBarn.ammo;
    }

     //right now define the first barn to be the one we focus on.
     playerBarn = actors[0];
     
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

	playerBarn.show(theCamera);
    actors[2].show(theCamera);
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

    else if (CheckWithinBounds(playerBarn.sprite,mouseX,mouseY) && mouseDown)
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

     if (playerBarn.ammo.flying )
     {
         var vec = new b2Vec2(0,0);
         //$("#debug").html( "velocity y : " + playerBarn.ammo.body.GetLinearVelocity().y );

         if(playerBarn.ammo.body.GetLinearVelocity().x == 0 )
         {

             playerBarn.ammo.reset(playerBarn.sprite.x,playerBarn.sprite.y);
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
              if(idB % 2 == 0 ){
                  entityA.notHit = false;

              entityB.wasHit();
              }
          }
          else if(entityB.notHit)
          {
              if(idA % 2 == 0 ){
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

