// Test code for stuff

/*var socket = io.connect('http://localhost');
socket.on('news', function (data) {
	$("#buttfuck").html('<p>Socket io working. yay!</p>');
	$("#buttfuck").append( data );
	socket.emit('my other event', { my: 'data' });

});
  */

AddShopFunction( "open shop down", function(items){ 
	$("#buttfuck").html( "<img alt='persons_of_african_descent_with_a_proclivity_for_theft_and_other_such_petty_crimes' src='" + items["picture_path"] + "' />" );
});

AddChatFunction( "chat down", function(data){ 
	$("#chat").append( "<p>" + "from: " + data["sessionId"] + " ==> " + data['message'] + "</p>" );
});

$(document).ready(function(){
	$("#shop").click(function(){
		$("#buttfuck").html( "request submitted" );
		GetShopItems();
	});
	
	$("#send-message").submit( function( ){ 
		PlayerChat( $("#message").val() );
		return false;
	});
} );


