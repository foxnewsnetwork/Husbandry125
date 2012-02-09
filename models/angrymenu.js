// The model to handle menu navigation

var AngryMenu = function(){ 
	this.activeMenu = MENU_TITLE;
	this.title = new Game.spr('views/gametitle.png', TITLE_WIDTH, TITLE_HEIGHT, 2, 0);
	this.titleFaded = new Game.spr('views/gametitlefaded.png', TITLE_WIDTH, TITLE_HEIGHT, 2, 0);
	this.join = new Game.spr('views/joinbutton.png', BUTTON_WIDTH, BUTTON_HEIGHT, 3, 0);
	this.signin = new Game.spr('views/signinbutton.png', BUTTON_WIDTH, BUTTON_HEIGHT, 3, 0);
	this.shop = new Game.spr('views/shopbutton.png', BUTTON_WIDTH, BUTTON_HEIGHT, 3, 0);
	this.backlay = new Game.spr('views/backlay.png', BACKLAY_WIDTH, BACKLAY_HEIGHT, 2, 0);
	this.icon = new Game.spr('views/shopicon.png', ICON_WIDTH, ICON_HEIGHT, 2, 0);
	this.icon2 = new Game.spr('views/shopicon.png', ICON_WIDTH, ICON_HEIGHT, 2, 0);
	this.icon3 = new Game.spr('views/shopicon.png', ICON_WIDTH, ICON_HEIGHT, 2, 0);
	
	this.product = new Game.spr('views/product1.png', ICON_WIDTH, ICON_HEIGHT, 2, 0);
	this.product2 = new Game.spr('views/product2.png', ICON_WIDTH, ICON_HEIGHT, 2, 0);
	this.product3 = new Game.spr('views/product3.png', ICON_WIDTH, ICON_HEIGHT, 2, 0);
	
	this.killEverything = function(){
		this.title.speed(0);
		this.titleFaded.speed(0);
		this.join.speed(0);
		this.signin.speed(0);
		this.shop.speed(0);
		this.backlay.speed(0);
		this.icon.speed(0);
		this.icon2.speed(0);
		this.icon3.speed(0);
		this.product.speed(0);
		this.product2.speed(0);
		this.product3.speed(0);
		
		this.title.frame(1);
		this.titleFaded.frame(1);
		this.join.frame(2);
		this.signin.frame(2);
		this.shop.frame(2);
		this.backlay.frame(1);
		this.icon.frame(1);
		this.icon2.frame(1);
		this.icon3.frame(1);
		this.product.frame(1);
		this.product2.frame(1);
		this.product3.frame(1);
	}
	this.initialize = function(){
		this.killEverything();
		this.displayTitleScreen();
	}
	this.displayTitleScreen = function(){ 
		this.activeMenu = MENU_TITLE;
		this.killEverything();
		mibbuSetSpritePosition(
			this.title, 
			(GAME_WIDTH - TITLE_WIDTH) / 2,
			(GAME_HEIGHT - TITLE_HEIGHT) / 2,
			Z_GUI - 10
		);
		this.title.speed(0);
		this.title.frame(0);
		mibbuSetSpritePosition(
			this.titleFaded, 
			(GAME_WIDTH - TITLE_WIDTH) / 2,
			(GAME_HEIGHT - TITLE_HEIGHT) / 2,
			Z_GUI - 10
		);
		this.titleFaded.speed(0);
		this.titleFaded.frame(1);
	}
	this.displayMainMenu = function(){
		this.activeMenu = MENU_MAIN;
		this.killEverything();
		this.title.frame(1);
		this.titleFaded.frame(0);
		
		mibbuSetSpritePosition( 
			this.join,
			(GAME_WIDTH - BUTTON_WIDTH) / 2,
			GAME_HEIGHT / 5 + BUTTON_HEIGHT,
			Z_GUI
		);
		mibbuSetSpritePosition( 
			this.signin,
			(GAME_WIDTH - BUTTON_WIDTH) / 2,
			GAME_HEIGHT / 5 + BUTTON_HEIGHT * 2 + 10 ,
			Z_GUI
		);
		mibbuSetSpritePosition( 
			this.shop,
			(GAME_WIDTH - BUTTON_WIDTH) / 2,
			GAME_HEIGHT / 5 + BUTTON_HEIGHT * 3 + 20,
			Z_GUI
		);
		
		this.join.frame(0);
		this.signin.frame(0);
		this.shop.frame(0);
		this.join.speed(0);
		this.signin.speed(0);
		this.shop.speed(0);
	}
	this.displayShopMenu = function(){
		this.activeMenu = MENU_SHOP;
		this.killEverything();
		
		mibbuSetSpritePosition( 
			this.backlay,
			(GAME_WIDTH - BACKLAY_WIDTH) / 2,
			GAME_HEIGHT / 5,
			Z_GUI - 5
		);
		this.backlay.frame(0);
		
		mibbuSetSpritePosition( 
			this.icon,
			(GAME_WIDTH - ICON_WIDTH) / 2,
			GAME_HEIGHT / 5 + ICON_HEIGHT,
			Z_GUI - 2
		);
		mibbuSetSpritePosition( 
			this.icon2,
			(GAME_WIDTH - ICON_WIDTH) / 2 + 85,
			GAME_HEIGHT / 5 + ICON_HEIGHT,
			Z_GUI - 2
		);
		mibbuSetSpritePosition( 
			this.icon3,
			(GAME_WIDTH - ICON_WIDTH) / 2 - 85,
			GAME_HEIGHT / 5 + ICON_HEIGHT,
			Z_GUI - 2
		);
		mibbuSetSpritePosition( 
			this.product,
			(GAME_WIDTH - ICON_WIDTH) / 2,
			GAME_HEIGHT / 5 + ICON_HEIGHT,
			Z_GUI 
		);
		mibbuSetSpritePosition( 
			this.product2,
			(GAME_WIDTH - ICON_WIDTH) / 2 + 85,
			GAME_HEIGHT / 5 + ICON_HEIGHT,
			Z_GUI 
		);
		mibbuSetSpritePosition( 
			this.product3,
			(GAME_WIDTH - ICON_WIDTH) / 2 - 85,
			GAME_HEIGHT / 5 + ICON_HEIGHT,
			Z_GUI
		);
		
		this.icon.frame(0);
		this.icon2.frame(0);
		this.icon3.frame(0);
		this.product.frame(0);
		this.product2.frame(0);
		this.product3.frame(0);
	}
}