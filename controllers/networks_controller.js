

function loadAddGameFunction() {
 AddGameFunction( "player join", function(data){
                         var barnDef = new BarnDef();
                        numOfPlayers = data["playerCount"];
                        playerCount = numOfPlayers - 1;
                        alert(playerCount);
                        for(var i = 0; i < numOfPlayers; i++)
                            {
                          thePlayer = new AngryPlayer(i,new PlayerDef() );
	                      theBarn = new AngryBarn( theWorld, thePlayer, barnDef );
	                        theBarn.initialize(300 * i, 300);
                        actors[2*i] = theBarn;
                        actors[2*i+1] = theBarn.ammo;

                            }

                                playerBarn = actors[2*playerCount];
                        theCamera.follow( playerBarn.ammo );

	                        bgcontrol = new BackgroundController();
	                    bgcontrol.camera = theCamera;
                        playerCount++;

    });
   AddGameFunction( "other player join", function(data){
                         var barnDef = new BarnDef();
                        numOfPlayers = data["playerCount"];
                        playerCount = numOfPlayers - 1;
                        alert(playerCount);
                          thePlayer = new AngryPlayer(playerCount,new PlayerDef() );
	                      theBarn = new AngryBarn( theWorld, thePlayer, barnDef );
	                        theBarn.initialize(300 * playerCount, 300);
                        actors[2*playerCount] = theBarn;
                        actors[2*playerCount+1] = theBarn.ammo;

                        playerCount++;

    });
}
