// Extensions to the mibbu framework
function mibbuSetSpritePosition( sprite, x, y, z ){
	sprite.x = x;
	sprite.y = y;
	sprite.z = z;
	sprite.position(x,y,z);
}

function mibbuMoveSpritePosition( sprite, dx, dy, dz){
	mibbuSetSpritePosition(
		sprite,
		sprite.x + dx,
		sprite.y + dy,
		sprite.z + dz
	);
}

// This function rotates the entire canvas, so unless you really need to call it, don't use it
function mibbuRotateSprite( sprite, angle ){
	sprite.angle = angle;
	sprite.rotate(angle);
}

function box2dMoveObject( body, dx, dy ){
	
}
