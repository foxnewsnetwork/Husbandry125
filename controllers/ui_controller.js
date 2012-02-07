// We implement the move buttons

var rightButton = new Game.spr('views/rightbutton.png', MOVE_BUTTON_WIDTH, MOVE_BUTTON_HEIGHT, 1, 0);
var leftButton = new Game.spr('views/leftbutton.png', MOVE_BUTTON_WIDTH, MOVE_BUTTON_HEIGHT, 1, 0);

mibbuSetSpritePosition( rightButton, GAME_WIDTH - 95, GAME_HEIGHT - 400, Z_GUI);
mibbuSetSpritePosition( leftButton, 15, GAME_HEIGHT - 400, Z_GUI);

rightButton.speed(0);
leftButton.speed(0);