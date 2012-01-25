// Combination of the physical and the spiritual. 
// Calling confluence merges the spirit into the physical body
// Calling conflux merges the physical body into the spirit
// Class: CompleteBeing
var CompleteBeing = function() { 
	this.physical;
	this.sprite;
	this.vector;
	
	this.confluence = function(){ 
		this.vector = this.physical.body.GetPosition();
		this.sprite.x = this.vector.x;
		this.sprite.y = this.vector.y;
	}
	this.conflux = function(){ 
		this.physical.body.SetPosition( new b2Vec2(this.sprite.x, this.sprite.y ) ); 
	}
}
