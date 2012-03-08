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

function mibbuConvertInt2Frame( number ) {
	// numbers live in views/numbers.png
	// so given any integer number, return an array its digits.
	// For example given the number 15452
	// This function should return [1, 5, 4, 5, 2]

   // this.number = new Game.spr('views/numbers.png', NUMBER_WIDTH, NUMBER_HEIGHT, 10, 0);
     var integerString = number.toString();
    var intArray = {};

    for(var i = 0; i < integerString.length; i++)
    {
        intArray[i] = parseInt(integerString.substr(i,1));
    }

     return intArray;
	// TODO: implement me!
}

function mibbuConvertString2Frame( string ){
	// letters live in views/letters.png
	// Given an string composed only of the letters a -> z
	// return all of it as its frame number
	// for example, given the string "daddy bad"
	// this should return [3, 0, 3, 3, 23, 26, 1, 0, 3]
	// notice that space (as well as all non-a-z characters) returns 26

    var stringArray = {};
    var properString = string.toString();
    for(var i = 0; i <= string.length;i++)
    {    if  ((properString.charCodeAt(i) - 97) < 0)
        stringArray[i] = 26
        else
    {
        stringArray[i] = properString.charCodeAt(i) - 97;
    }
    }
    return stringArray;
	// TODO: implement me!
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
