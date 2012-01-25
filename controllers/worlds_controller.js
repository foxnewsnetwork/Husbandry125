/*****************************
* The world controller initializes *
* physical objects and ties them *
* to the game                                   *
******************************/

// Day 01: Letting there be light
var theUniverse = [];

// Day 02: Creating the earth
var thePhysicalWorld = new AngryWorld();

// Day 03: Creating the heavens
var theSprWorld = new Game.bg( 'views/bg.png', 4, "S", {x:0,y:0} );
//background.position(0,0,Z_BACKGROUND);
mibbuSetSpritePosition( theSprWorld, 0, 0, Z_BACKGROUND );

// Day 04: Creating the land
var thePhysicalLand = thePhysicalWorld.ground;
var theSprLand = new Game.spr('views/land.png', LAND_WIDTH, LAND_HEIGHT, 0, 0);
mibbuSetSpritePosition( theSprLand, 0, 550, Z_BACKGROUND);
theUniverse.push( new CompleteBeing(thePhysicalLand, theSprLand) );
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
var thePhysicalCannon = new AngryCannon( thePhysicalWorld, thePhysicalPlayer, new CannonDef( ) );

var theSprBarn = new Game.spr('views/pigbig.png', BARN_WIDTH, BARN_HEIGHT, 3, 0);
var theSprCannon = new Game.spr('views/cannon.png', CANNON_WIDTH, CANNON_HEIGHT, 0, 0);
mibbuSetSpritePosition( theSprBarn, 300, 510, Z_CHARACTERS);
mibbuSetSpritePosition( theSprCannon, 310, 480, Z_CHARACTERS);
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
