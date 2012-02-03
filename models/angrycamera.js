// class AngryCamera 
var AngryCamera = function(){
	this.deltaX = 0;
	this.deltaY = 0;
	this.originX = 0;
	this.originY = 0;
	this.originX2 = 0;
	this.originY2 = 0;
	this.speed;
	this.dx;
	this.follow = function(angrymodel){
		this.originX2 = this.originX + 0;
		this.originY2 = this.originY + 0;
		this.originX = angrymodel.absX - GAME_WIDTH / 2;
		this.originY = angrymodel.absY - GAME_HEIGHT / 2;
		this.deltaX = this.originX2 - this.originX;
		this.deltaY = this.originY2 - this.originY;
	}
	this.setOrigin = function(x,y){
		this.originX = x;
		this.originY = y;
	}
	this.show = function(sprite, absX, absY, absZ){
		mibbuSetSpritePosition(
			sprite,
			absX - this.originX,
			absY,
			sprite.z
		);
		// The idea is that, whatever is being followed, takes a constant 
		$("#debug").html("cameraX: " + this.deltaX + "cameraY: " + this.deltaY);
	}
	
}