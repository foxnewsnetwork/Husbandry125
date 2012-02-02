/**************************
* INPUT CONTROLLER        *
***************************/
// This game only responds to the mouse

var mouseX;
var mouseY;
var mouseDown;
function InitializeMouseController(){

	$("canvas").mousemove( function(e){
		mouseX = e.clientX;
		mouseY = e.clientY;
		$("#debug").html(mouseX + " " + mouseY);
	});
	$("canvas").mousedown( function(e){
		mouseDown = true;
		$("#debug").html("down at: " + mouseX + " " + mouseY);
	});
	$("canvas").mouseup( function(e){
		mouseDown = false;
		$("#debug").html("up at: " + mouseX + " " + mouseY);
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
  function handleAmmoMove(e) {
      //Move the ammo
          playerBarn.ammo.mouseMove(playerBarn.sprite.x + AMMO_WIDTH/2,playerBarn.sprite.y-150);
   };


   //If the mouse is released. Fire it!
   function handleAmmoRelease(e) {
       //Remove listener so ammo isn't moved.
       document.removeEventListener("mousemove", handleAmmoMove, true);

       //Fire the ammo.
       playerBarn.ammo.fire(playerBarn.sprite.x + AMMO_WIDTH/2,playerBarn.sprite.y-150);

       //remove listener so we don't accidentally fire ammo again.
       document.removeEventListener("mouseup", handleAmmoRelease, true);

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