// class AngryCamera 
var AngryCamera = function(){
	this.deltaX = 0;
	this.deltaY = 0;
	this.originX = 0;
	this.originY = 0;
	this.originX2 = 0;
	this.originY2 = 0;
	this.boxHalfWidth = 50;
	this.boxHalfHeight = 50;
	this.speed;
	this.dx;
	this.follow = function(angrymodel){
		this.originX2 = this.originX + 0;
		this.originY2 = this.originY + 0;
		
		// We ought to only update this when we're outside the box
		while(this.originX + this.boxHalfWidth <= angrymodel.absX - GAME_WIDTH / 2){
				this.originX += MOVE_SPEED;
				this.originY = angrymodel.absY - GAME_HEIGHT / 2 - this.boxHalfHeight;
		}
		while(this.originX - this.boxHalfWidth >= angrymodel.absX - GAME_WIDTH / 2){
				this.originX -= MOVE_SPEED;
				this.originY = angrymodel.absY - GAME_HEIGHT / 2 - this.boxHalfHeight;
		}
		
		this.deltaX = this.originX2 - this.originX;
		this.deltaY = this.originY2 - this.originY;
	}
	this.setOrigin = function(x,y){
		this.originX = x;
		this.originY = y;
	}
	this.show = function(sprite){
		
	}
	
}