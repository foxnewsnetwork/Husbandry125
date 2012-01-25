/*****************************
* The world controller initializes *
* physical objects and ties them *
* to the game                                   *
******************************/

// Day 01: Letting there be light
var theUniverse = [];
var completeBeing;

// Day 02: Creating the world
var thePhysicalWorld = new AngryWorld();

// Day 03: Creating the oceans
var background = new Game.bg( 'views/bg.png', 4, "S", {x:0,y:0} );
background.position(0,0,Z_BACKGROUND);

// Day 04: Creating the land
var thePhysicalLand = AngryWorld.ground;
var theSprLand = new Game.spr('views/land.png', LAND_WIDTH, LAND_HEIGHT, 0, 0);
theSprLand.position(0, 550, Z_BACKGROUND);
theSprLand.x = 0;
theSprLand.y = 550;
/*
completeBeing = new CompleteBeing;
completeBeing.physical = thePhysicalLand;
completeBeing.sprite = theSprLand;
theUniverse.push( completeBeing );
*/
// Day 05: Creating the animals
// I don't even know what's suppose to go here

// Day 06: Creating the people

var thePhysicalPlayer = new AngryPlayer( new PlayerDef() );

// Day 07: God rests and reads documentation

// Day 08: Creating barns

var thePhysicalBarn = new AngryBarn( thePhysicalWorld, thePhysicalPlayer, new BarnDef( ) );

var theSprBarn = new Game.spr('views/pigbig.png', BARN_WIDTH, BARN_HEIGHT, 3, 0);
var theSprCannon = new Game.spr('views/cannon.png', CANNON_WIDTH, CANNON_HEIGHT, 0, 0);
theSprBarn.position(30, 510, Z_CHARACTERS);
theSprCannon.position(40, 480, Z_CHARACTERS);
/*
completeBeing = new CompletelyBeing;
completeBeing.physical = thePhysicalBarn;
theSprBarn.x = 30;
theSprBarn.y = 510;
completeBeing.sprite = theSprBarn;
// Day N: We put stuff into physical and spiritual arrays

var thePhysicalCannon = new AngryCannon( thePhysicalWorld, thePhysicalPlayer, new CannonDef( ) );
theUniverse.push( { physical: thePhysicalCannon, sprite: theSprCannon } );

theUniverse.push(completeBeing);
*/
