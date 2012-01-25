// The physics controller controlls physical objects
function InitializePhysics(){
	var thePhysicalWorld = new AngryWorld();
	var thePhysicalPlayer = new AngryPlayer( new PlayerDef() );
	var thePhysicalLand = thePhysicalWorld.ground;
	var thePhysicalBarn = new AngryBarn( thePhysicalWorld, thePhysicalPlayer, new BarnDef( ) );
	var thePhysicalCannon = new AngryCannon( thePhysicalWorld, thePhysicalPlayer, new CannonDef( ) );
}