// General controller to drive the game
// The main function lives in here
var maingame;

function loadResources() {
  // This initializes Akihabara with the default settings.
  // The title (which appears in the browser title bar) is the text we're passing to the function.
	help.akihabaraInit({
  		title: 'Very Angry Birds',
  		width: 640,
  		height: 480,
  		zoom: 1
	});
 
  // Load all necessary sprites
	gbox.addImage("barn_sprite", "barn_sprite.png");
	gbox.addImage("cannon_sprite", "cannon_spirte.png");
	gbox.addImage("ammo_sprite", "ammo_sprite.png");
	gbox.addImage("background1", "background1.png");
	gbox.addImage("background2", "background2.png");
	gbox.addImage("background3", "background3.png");
  
  // Properly load the tiles
  /*gbox.addTiles({
	id:      'player_tiles', // set a unique ID for future reference
    image:   'player_sprite', // Use the 'sprites' image, as loaded above
    tileh:   16,
    tilew:   16,
    tilerow: 1,
    gapx:    0,
    gapy:    0
  });*/
 
  // Fonts are mapped over an image, setting the first letter, the letter size, the length of all rows of letters and a horizontal/vertical gap.
//  gbox.addFont({ id: 'small', image: 'font', firstletter: ' ', tileh: 8, tilew: 8, tilerow: 255, gapx: 0, gapy: 0 });
 
  // When everything is ready, the 'loadAll' downloads all the needed resources, and then calls the function "main".
	gbox.loadAll(main);
}

window.addEventListener('load', loadResources, false);

function main() {
  gbox.setGroups(['game']);
  maingame = gamecycle.createMaingame('game', 'game');
 
  // We'll add more here in the next step...
 
  gbox.go();
}
