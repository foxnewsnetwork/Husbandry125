// class AngryCamera 
var AngryCamera = function(){
	this.bg1;
	//this.bg2;
	//this.bg3; 
	this.following;
	this.originX = 0;
	this.originY = 0;
	this.speed;
	this.dx;
	this.follow = function(angrymodel){
		this.following = angrymodel;
		this.speed = angrymodel.speed;
		this.originX = angrymodel.sprite.x;
	}
	this.setOrigin = function(x,y){
		this.originX = x;
		this.originY = y;
	}
	this.show = function(sprite){
		// The idea is that, whatever is being followed, takes a constant 
		this.originX = this.following.sprite.x;
	}
	
}