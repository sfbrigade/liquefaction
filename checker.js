// Quick and dirty function to check against JSON file

//scan
function checkLiquifactionStatus() {

	var userBlockLot = form.elements["block"].value + "," + form.elements["lot"].value;
	console.log(userBlockLot);

	$.getJSON('./data.json', function(data) {
			console.log("success");
		}).done(function( userBlockLot, json ) {
			if ( userBlockLot in json ) {
				return true;
			} else {
				return false;
			}
		});
}