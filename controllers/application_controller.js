// The game object
var Game = new mibbu(GAME_WIDTH, GAME_HEIGHT);
Game.fps();
Game.canvasOff();
Game.init();

// Function joins together the physical stream with the spiritual (sprite) stream
// The physical world takes predominance over the spiritual one
// Remember, there is a 1:30 ratio between the physical model and the spiritual one

function Confluence( physical, sprite ){ 
	sprite.position.x = PIXEL_PER_METER*(physical.body.position.x);
	sprite.position.y =PIXEL_PER_METER*(physical.body.position.y);
}

// Same as the above, but this time, the spiritual one takes dominance
function Conflux( physical, sprite ){ 
	physical.body.position.x = (sprite.position()['x']) * METER_PER_PIXEL;
	physical.body.position.y = (sprite.position()['y']) * METER_PER_PIXEL;
}

