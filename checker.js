// Quick and dirty function to check against JSON file

//pull in info from form


//scan
function checkLiquifactionStatus( obj, lst ) {
	if ( obj in lst ) {
		return true;
	} else {
		return false;
	}
}

var userBlockLot = form.elements["block"].value + "," + form.elements["lot"].value;
console.log(userBlockLot);

var liquifactionList = $.getJSON('./data.json', function() { //this is not referencing a real file
	console.log("success");
})
.done( console.log(checkLiquifactionStatus ( userBlockLot, liquifactionList )) );

//return
