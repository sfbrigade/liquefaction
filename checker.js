// Quick and dirty function to check against JSON file

//scan
function checkLiquifactionStatus() {
  var form = $('form');
  // var data = [
  //   { "BLOCK_NUM": "5005", "LOT_NUM": "001"},
  //   { "BLOCK_NUM": "666", "LOT_NUM": "002"},
  // ];
  //
  var userBlockLot = $('#inputBlock').val() + "," + $('#inputLot').val();
  console.log(userBlockLot);

  // $.each(data, function(i, item) {
  //   console.log(data[i].BLOCK_NUM);
  // });

  $.getJSON('./data.json', function(data) {
      console.log("loaded JSON");
      $.each(data, function(key, value) {
        // console.log(value.BLOCK_NUM + " " + value.LOT_NUM);
        if (value.BLOCK_NUM == $('#inputBlock').val() && value.LOT_NUM == $('#inputLot').val()) {
          console.log("OMG YOUR HOUSE WILL BE SUCKED INTO THE DEPTHS");
          $('#results').text("FOUND IN DATABASE");
        } 
      });
  });
}
