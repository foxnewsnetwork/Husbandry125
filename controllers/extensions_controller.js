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
// 
function mibbuRotateSprite( sprite, angle ){
	// Everything starts out at the 180 degree mark in terms of png views
	// But angles are measured from the 0 degree 
	// from 0->180 degrees covers 13 tiles
	var quantumDegree = 13.8462;
	var frameNumber = floor( angle / quantumDegree );
	
	sprite.frame(frameNumber);
}

function box2dMoveObject( body, dx, dy ){
	
}
