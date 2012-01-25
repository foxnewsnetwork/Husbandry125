// Combination of the physical and the spiritual. 
// Calling confluence merges the spirit into the physical body
// Calling conflux merges the physical body into the spirit
// Class: CompleteBeing
var CompleteBeing = function(physical, sprite) { 
	this.physical = physical;
	this.sprite = sprite;
	
	this.confluence = function(){ 
		this.sprite.x = this.physical.body.position.x * PIXEL_PER_METER;
		this.sprite.y = this.physical.body.position.y * PIXEL_PER_METER;
		this.sprite.position(x,y,this.sprite.z);
	}
	this.conflux = function(){ 
		this.physical.body.position.x = this.sprite.x * METER_PER_PIXEL;
		this.physical.body.position.y = this.sprite.y * METER_PER_PIXEL; 
	}
}
