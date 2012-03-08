

function loadAddGameFunction() {

    //If you are the player thats joining we'll do this
    AddGameFunction( "player join", function(data){

        //set basic stuff for creating you on screen
        var barnDef = new BarnDef();
        numOfPlayers = data["playerCount"];
        sessionId = data["sessionId"]
        playerCount = numOfPlayers - 1;
        //If there are other people, create them as well.
        //Create as many people as need be and set them at 300 pixel intervals

        openSpot = data["playerSpot"];
        for(var i = 0; i < numOfPlayers; i++){

            thePlayer = new AngryPlayer(i,sessionId,new PlayerDef() );
	        theBarn = new AngryBarn( theWorld, thePlayer, barnDef );
	        theBarn.initialize(300 * i, 300);
            actors[2*i] = theBarn;
            actors[2*i+1] = theBarn.ammo;

        }
        //Set the latest player as YOU
        playerBarn = actors[2*openSpot];
        theCamera.follow( playerBarn.ammo );

        //Dunno what this even does
	    bgcontrol = new BackgroundController();
	    bgcontrol.camera = theCamera;
        //increment total num of players
        playerCount++;
    });

    //Someone else joined so we'll hear about it i guess.
   AddGameFunction( "other player join", function(data){
    //create basic stuff for other player
    var barnDef = new BarnDef();
    numOfPlayers = data["playerCount"];
    sessionId = data["sessionId"];
    playerCount = numOfPlayers - 1;
    openSpot = data['playerSpot'];

    //make other player appear and in the game world.
    thePlayer = new AngryPlayer(openSpot,sessionId,new PlayerDef() );
	theBarn = new AngryBarn( theWorld, thePlayer, barnDef );
	theBarn.initialize(300 * openSpot, 300);
    actors[2*openSpot] = theBarn;
    actors[2*openSpot+1] = theBarn.ammo;

    //another player added
    playerCount++;
    });

    //A player is shooting!
    AddGameFunction("pig shoot",function(data){
      //Get info needed for shooting
      id = data['shotData']['id'];
      hForce = data['shotData']['hForce'];
      vForce = data['shotData']['vForce'];
       var shotBarn;
        var vec = new b2Vec2(hForce,vForce);
        //Find the pig thats shooting a pig
        shotBarn = actors[2*id];

        //make the pig shoot
        shotBarn.ammoJointDestroy();
        shotBarn.ammo.body.ApplyImpulse(vec, shotBarn.ammo.body.GetWorldCenter());
        //handle all the other crap.
        shotBarn.ammo.conflux();
        shotBarn.ammo.flying = true;
        shotBarn.ammo.notHit = true;
    }) ;
    AddGameFunction("move pig",function(data){
      //Get info needed for shooting
      sessionId = data['sessionId'];
      direction = data['moveData'];
      pigId = data['pigData'];
       var shotBarn;

        //Find the pig thats shooting a pig
        if(direction != 0){
        actors[2*pigId].direction = direction;
        actors[2*pigId].walking = true;
        }
        else
        {
         actors[2*pigId].direction = direction;
        actors[2*pigId].walking = false;
        }
    }) ;
}

function removePig(pigId)
{
     removedPig = actors[2*(pigId)];
    removedPig.destroy();
    removePigAmmo = actors[(2*(pigId))+1];
    removePigAmmo.destroy();
    actors[2*(pigId)] = null
    actors[(2*(pigId))+1] = null;
}

function resetShotPig(data){
    var pigId = data['playerSlot']
    resetPig = actors[2*pigId];
    resetPig.ammo.reset(resetPig.cannonSprite.x,resetPig.cannonSprite.y);
    resetPig.resetJoint();

}
