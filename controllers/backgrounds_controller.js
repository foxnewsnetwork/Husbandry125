// Controller to handle parallax and stuff
var BackgroundController = function(){
	this.doodads = [];
	this.flag = false;
	this.push = function(d){ this.doodads.push(d); this.flag = true; }
	this.camera;
	this.sprite = new Game.bg( 'views/backgroundfull.png', 0, "E", {x:0,y:0} );
	this.sprite.speed(0);
	mibbuSetSpritePosition( this.sprite, 0,0,1);
	this.show = function(camera){
		mibbuMoveSpritePosition( 
			this.sprite, 
			-camera.deltaX * Z_BACKGROUND / PARALLAX_CONSTANT,
			0,
			0
		);
		this.sprite.on();
		if(this.flag){
			for( j in this.doodads ){
				this.doodads[j].show(camera); 
			}
		}
	}
}

var BackgroundDoodads = function(sprite, x, y, z){
	// higher values of z produces faster move speed (within reason) 
	this.absX = x;
	this.absY = y;
	this.absZ = z;
	this.sprite = sprite;
	mibbuSetSpritePosition( this.sprite, this.absX, this.absY, this.absZ )
	this.show = function(camera){
		mibbuMoveSpritePosition( 
			this.sprite, 
			-this.camera.deltaX * this.absZ / PARALLAX_CONSTANT,
			-this.camera.deltaY * this.absZ / PARALLAX_CONSTANT,
			0
		);		
	}
}