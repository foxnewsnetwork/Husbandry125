// The game object
var Game = new mibbu(600, 600);
Game.fps();
Game.canvasOff();
Game.init();

// Function joins together the physical stream with the spiritual (sprite) stream
// The physical world takes predominance over the spiritual one
// Remember, there is a 1:30 ratio between the physical model and the spiritual one

function Confluence( physical, sprite ){ 
	sprite.position( 
		30*(physical.body.position.x),
		30*(physical.body.position.y),
		1
	);
}

// Same as the above, but this time, the spiritual one takes dominance
function Conflux( physical, sprite ){ 
	physical.body.position.x = (sprite.position()['x'])/30.0;
	physical.body.position.y = (sprite.position()['y'])/30.0;
}

