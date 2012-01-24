// Keyboard
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

//mouse

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
    mouseX = (e.clientX - canvasPosition.x) / 30;
    mouseY = (e.clientY - canvasPosition.y) / 30;
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
 
