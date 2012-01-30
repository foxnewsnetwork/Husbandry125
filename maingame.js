/******************************
* The Final Line Between Worlds *
*******************************/
// This is the final thing to be called and merely starts the game
var physics;
var mousecontrol;

$(document).ready(function(){
	 physics = new Physics;
	 InitializeMouseController();
	 
});


function gameLoop(){	
	// Step 0: Initialize physics as necessary

	// Step 1: Mass confluence
	Confluence( physics.Barn, theSprBarn );

	// Step 2: Handle input
	if( CheckWithinBounds( leftButton, mouseX, mouseY ) ){
		leftButton.frame(1);
		//if( mouseDown ){
			mibbuMoveSpritePosition( theSprBarn, -MOVE_SPEED, 0, 0);
			mibbuMoveSpritePosition( theSprCannon, -MOVE_SPEED, 0, 0); 
		//}
	}
	else if( CheckWithinBounds( rightButton, mouseX, mouseY ) ){
		rightButton.frame(1);
		//if( mouseDown ){
			mibbuMoveSpritePosition( theSprBarn, MOVE_SPEED, 0, 0);
			mibbuMoveSpritePosition( theSprCannon, MOVE_SPEED, 0, 0);
		//}
	}
    else if (mouseDown)
    {
//        b2Vec2 vel = physics.Barn.GetLinearVelocity();
//        vel.y = 10;//upwards - don't change x velocity
//        physics.Barn.body.SetLinearVelocity( vel );
        var impulse = physics.Barn.body.GetMass() * 2;
        var vel = new b2Vec2(0,-impulse)

        physics.Barn.body.ApplyImpulse(vel, physics.Barn.body.GetWorldCenter())

    }
	else {
		leftButton.frame(0);
		rightButton.frame(0);
	}
	
	// Step 2.5: mass conflux
	Conflux( physics.Barn, theSprBarn );

	// Step 3: Step... into the future
	physics.update();
} 

Game.on();
Game.hook(gameLoop);

