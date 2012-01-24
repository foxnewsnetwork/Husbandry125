/*****************************
* The world controller initializes *
* physical objects and ties them *
* to the game                                   *
******************************/

// Day 01: Letting there be light

// Day 02: Creating the world
var thePhysicalWorld = new AngryWorld;

// Day 03: Creating the oceans
var background = new Game.bg( 'views/bg.png', 4, "S", {x:0,y:0} );

// Day 04: Creating the land
var thePhysicalLand = AngryWorld.ground;
var theSprLand = new Game.spr('views/land.png', 200, 200, 7, 0);
/*
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
var thePhysicalBarn = new AngryBarn(theWorld, thePlayer, new BarnDef() );
var theSprBarn = maingain.spr( );
*/
// Day N: We put stuff into physical and spiritual arrays
var thePhysical = [thePhysicalLand];
var theSpiritual = [theSprLand];
