/*****************************
* The world controller initializes *
* physical objects and ties them *
* to the game                                   *
******************************/

// Day 01: Letting there be light
var theUniverse = [];

// Day 02: Creating the world
var thePhysicalWorld = new AngryWorld;

// Day 03: Creating the oceans
var background = new Game.bg( 'views/bg.png', 4, "S", {x:0,y:0} );

// Day 04: Creating the land
var thePhysicalLand = AngryWorld.ground;
var theSprLand = new Game.spr('views/land.png', LAND_WIDTH, LAND_HEIGHT, 0, 0);
theSprLand.position(0, 550, 2);
theUniverse.push( { physical: thePhysicalLand, sprite:theSprLand } );

// Day 05: Creating the animals
// I don't even know what's suppose to go here

// Day 06: Creating the people
var thePhysicalPlayer = new AngryPlayer(
	new PlayerDef(
		"username",
		"email@email.email", 
		"payment_method",
		"playment_info",
		"password"
	)
);

// Day 07: God rests and reads documentation

// Day 08: Creating barns

var thePhysicalBarn = new AngryBarn( thePhysicalWorld, thePhysicalPlayer, new BarnDef( ) );
var theSprBarn = new Game.spr('views/pigbig.png', BARN_WIDTH, BARN_HEIGHT, 3, 0);
theUniverse.push( { physical: thePhysicalBarn, sprite: theSprBarn } );

var thePhysicalCannon = new AngryCannon( thePhysicalWorld, thePhysicalPlayer, new CannonDef() );
var theSprCannon = new Game.spr('views/cannon.png', CANNON_WIDTH, CANNON_HEIGHT, 0, 0);
theUniverse.push( { physical: thePhysicalCannon, sprite: theSprCannon } );

// Day N: We put stuff into physical and spiritual arrays

