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
	// 24 tiles cover all 360 degrees of rotation
	// Here is a quick table of shit I want
	// 352.5 to 7.5 => frame 0
	// 7.5 to 15 => frame 1
	// 15 to 22.5 => frame 2
	// 22.5 to 30 => frame 3
	// 30 to 37.5 => frame 4
	// 37.5 to 45 => frame 6
	// etc.
	var quantumDegree = 15;
	var actualAngle = angle % 360;
	if( actualAngle < 0 ) { actualAngle = 360 + actualAngle; }
	var frameNumber = Math.floor( actualAngle / 360 * 24) ;
	sprite.angle = actualAngle;
	sprite.frame(24 - frameNumber);
}

function box2dMoveObject( body, dx, dy ){
	
}
