/**************************
* INPUT CONTROLLER        *
***************************/
// This game only responds to the mouse

var mouseX;
var mouseY;
var mouseDown = false;
var mouseUp = true;
var mouseStartX;
var mouseStartY;
var mouseEndX;
var mouseEndY;

function InitializeMouseController(){

	$("canvas").mousemove( function(e){
		mouseX = e.clientX;
		mouseY = e.clientY;
		//$("#debug").html(mouseX + " " + mouseY);
	});
	$("canvas").mousedown( function(e){
		mouseDown = true;
		if(mouseUp == true){
			mouseStartX = mouseX + 0;
			mouseStartY = mouseY + 0;
		}
		mouseUp = false;
		mouseEndX = undefined;
		mouseEndY = undefined;
		$("#debug").html("down at: " + mouseX + " " + mouseY);
	});
	$("canvas").mouseup( function(e){
		mouseDown = false;
		mouseUp = true;
		mouseEndX = mouseX + 0;
		mouseEndY = mouseY + 0;
		$("#debug").html("vec x: " + (mouseStartX - mouseEndX) + " vec y: " + (mouseStartY - mouseEndY));
	});
};

function CheckWithinBounds( sprite, x, y ){
	// We first check x-range
	var size = sprite.size();
	if( sprite.x < x && x < sprite.x + size.width ){
		if( sprite.y < y && y < sprite.y + size.height ){
			return true;
		}
	}
	return false;
}


  //Trigger to see if mouse is being moved.
	var startX;
		var startY;
		var mouseSetFlag = false;
  
  function handleAmmoMove(e) {
      //Move the ammo
          //playerBarn.ammo.mouseMove(mouseX + AMMO_WIDTH/2,mouseY+AMMO_HEIGHT/2);
      //theBarn.ammo.mouseMove(theBarn.sprite.x + AMMO_WIDTH/2,theBarn.sprite.y-150);
	  //theBarn.ammo.SetPosition( e.clientX, e.clientY );


      mibbuSetSpritePosition( crosshair,mouseX-AMMO_WIDTH/2,mouseY-AMMO_HEIGHT, 0);

        //Calculate distance of sprite from starting point.
        var distanceX = mouseX-(playerBarn.cannonSprite.x+CANNON_WIDTH/2);
		var distanceY = mouseY-(playerBarn.cannonSprite.y+CANNON_HEIGHT/2);
        //Check to see if ammo is dragged too far.
      $("#debug").html( "mouse x: " + distanceX*distanceX+distanceY*distanceY );

		if (distanceX*distanceX+distanceY*distanceY>SHOT_RADIUS) {
			//Calculate angle of fire.
            var shotAngle=Math.atan2(distanceY,distanceX);
			
			// Spins the cannon sprite
			playerBarn.rotateCannon( shotAngle * 180 / Math.PI );
			
            //Keep sprite from moving farther than designated radius.
            xcord=(playerBarn.cannonSprite.x+CANNON_WIDTH/2)+Math.sqrt(SHOT_RADIUS)*Math.cos(shotAngle);
			ycord=(playerBarn.cannonSprite.y+CANNON_HEIGHT/2)+Math.sqrt(SHOT_RADIUS)*Math.sin(shotAngle);
            $("#debug").html( "shot x: " + xcord + "   y cord:" + ycord);
              crosshair.x = xcord;
            crosshair.y = ycord;
            mibbuSetSpritePosition( crosshair,xcord-AMMO_WIDTH/2,ycord-AMMO_HEIGHT/2, 0);
		}

   };


   //If the mouse is released. Fire it!
   function handleAmmoRelease(e) {
       //Remove listener so ammo isn't moved.
       document.removeEventListener("mousemove", handleAmmoMove, true);
//	   mouseEndX = mouseX + 0;
//		mouseEndY = mouseY + 0;
//
//	   var Vx = 4 * (mouseStartX - mouseEndX) * METER_PER_PIXEL;
//	   var Vy = 4 * (mouseStartY - mouseEndY) * METER_PER_PIXEL;
//       //Fire the ammo.

   //playerBarn.ammo.fire(playerBarn.cannonSprite.x + CANNON_WIDTH/2,playerBarn.cannonSprite.y + CANNON_HEIGHT/2);
//	   playerBarn.ammo.SetVelocity(Vx, Vy);
       //theBarn.ammo.fire(theBarn.sprite.x + AMMO_WIDTH/2,theBarn.sprite.y-150);
//        playerBarn.ammo.flying = true;
//       playerBarn.ammo.notHit = true;

		playerBarn.ammo.sprite.speed(6);
        //Calculate angle and distance from origin. To be used when
        //calculating firing velocity.
        var distanceX = crosshair.x-(playerBarn.cannonSprite.x+CROSSHAIR_WIDTH/2);
		var distanceY = crosshair.y-(playerBarn.cannonSprite.y+CROSSHAIR_HEIGHT/2);
     	var distance = Math.sqrt(distanceX*distanceX+distanceY*distanceY);
        var birdAngle = Math.atan2(distanceY,distanceX);

        //Horizontal force
        var horizontalForce = distance*Math.cos(birdAngle)/10;

        //Verticle force
        var verticalForce = distance*Math.sin(birdAngle)/10;
        //Create the force.
        var vec = new b2Vec2(horizontalForce,verticalForce);

       playerBarn.ammoJointDestroy();

        //Apply an impulse to the ammo.
        playerBarn.ammo.body.ApplyImpulse(vec, playerBarn.ammo.body.GetWorldCenter());

        //Handle conflux of ammo.
        playerBarn.ammo.conflux();
        playerBarn.ammo.flying = true;
        playerBarn.ammo.notHit = true;
       //remove listener so we don't accidentally fire ammo again.
       document.removeEventListener("mouseup", handleAmmoRelease, true);

       //Everytime a pig is shot, we need the client to do work.
       var shotData = {
           'id': playerBarn.player.id,
           'hForce': horizontalForce,
           'vForce': verticalForce
       }
       ShootPig(shotData)
   }
/*
var isLeftDown, isRightDown;
 
 var mouseX, mouseY, mousePVec, isMouseDown, selectedBody, mouseJoint;
 var canvasPosition = getElementPosition(document.getElementById("canvas"));
 
 document.addEventListener("mousedown", function(e) {
    isMouseDown = true;
    handleMouseMove(e);
    document.addEventListener("mousemove", handleMouseMove, true);
 }, true);
 
 document.addEventListener("mouseup", function() {
    document.removeEventListener("mousemove", handleMouseMove, true);
    isMouseDown = false;
    mouseX = undefined;
    mouseY = undefined;
 }, true);
 
 function handleMouseMove(e) {
    mouseX = (e.clientX - canvasPosition.x) * METER_PER_PIXEL;
    mouseY = (e.clientY - canvasPosition.y) * METER_PER_PIXEL;
 };
 
 function getBodyAtMouse() {
    mousePVec = new b2Vec2(mouseX, mouseY);
    var aabb = new b2AABB();
    aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
    aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);
    
    // Query the world for overlapping shapes.

    selectedBody = null;
    world.QueryAABB(getBodyCB, aabb);
    return selectedBody;
 }

 function getBodyCB(fixture) {
    if(fixture.GetBody().GetType() != b2Body.b2_staticBody) {
       if(fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
          selectedBody = fixture.GetBody();
          return false;
       }
    }
    return true;
 */
// Unused
// Keyboard
/*
var catchKeyDown = function(e) {
	switch (e.keyCode) {
		case 80:
			//Pause();
			break;
		case 37:
			player.sides = -1;
			break;
		case 39:
			player.sides = 1;
			break;
	}
	e.stopPropagation();
}
var catchKeyUp = function(e) {
	switch (e.keyCode) {
		case 37:
			if (player.sides===-1) player.sides = 0;
			break;
		case 39:
			if (player.sides===1) player.sides = 0;
			break;
	}
	//e.stopPropagation();
}
*/
