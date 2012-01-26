// The game object
var Game = new mibbu(GAME_WIDTH, GAME_HEIGHT);
Game.fps();
//Game.canvasOff();
Game.init();

// Function joins together the physical stream with the spiritual (sprite) stream
// The physical world takes predominance over the spiritual one
// Remember, there is a 1:30 ratio between the physical model and the spiritual one

function Confluence( physical, sprite ){ 
	mibbuSetSpritePosition( 
		sprite, 
		physical.body.GetPosition().x * PIXEL_PER_METER, 
		physical.body.GetPosition().y * PIXEL_PER_METER,
		sprite.z
	);
}

// Same as the above, but this time, the spiritual one takes dominance
function Conflux( physical, sprite ){ 
	physical.body.SetPosition( 
		new b2Vec2( 
			sprite.x * METER_PER_PIXEL,
			sprite.y * METER_PER_PIXEL
		) 
	);
}
