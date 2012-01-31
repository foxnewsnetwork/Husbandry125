// Controller to handle parallax and stuff
var BackgroundControls = function(){
	this.doodads = [];
	this.push = function(d){ this.doodads.push(d); }
	this.camera;
	this.sprite = new Game.bg( 'views/backgroundfull.png', 0, "E", {x:0,y:0} );
	this.sprite.on();
	this.show = function(){
		if( this.camera.speed <= 0.01 ) {
			this.sprite.speed(0);
		}
		else{
			this.sprite.speed( this.camera.speed / PARALLAX_CONSTANT );
		}
		
	}
}

var BackgroundDoodads = function(){
	// higher values of z produces faster move speed (within reason) 
	this.x;
	this.y;
	this.z;
	this.sprite;
	this.show = function(camera){
		// TODO: implement
	}
}