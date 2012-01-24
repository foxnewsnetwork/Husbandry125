// Wrapper function for adding menu items and such to the game
function addUI() {
	gbox.addObject({
		id: "ui_id",
		group: "ui",
		tileset: "ui_tileset",
		initialize: InitializeUI,
		first: UpdateUI,
		blit: DrawUI
	}); // end gbox.addObject
} // end addUI

function InitializeUI(){

}

function UpdateUI(){

}

function DrawUI(){

}
