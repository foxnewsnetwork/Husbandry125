// The physics controller controlls physical objects
var Physics = function(){
	this.World = new AngryWorld();
	this.Player = new AngryPlayer( new PlayerDef() );
	this.Land = this.World.ground;
	this.Barn = new AngryBarn( this.World, this.Player, new BarnDef( ) );
	this.Cannon = new AngryCannon( this.World, this.Player, new CannonDef( ) );
	this.Flag = false;
	this.update = function(){ 
		this.World.update();
	}
	this.testfun = function(){
		return 1;
	}
}
