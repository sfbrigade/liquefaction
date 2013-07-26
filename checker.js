// Quick and dirty function to check against JSON file

function checkLiquifactionStatus() {
  var form = $('form');
  var userBlockLot = $('#inputBlock').val() + "," + $('#inputLot').val();
  console.log(userBlockLot);

  $.getJSON('./data.json', function(data) {
      console.log("loaded JSON");
      $.each(data, function(key, value) {
        if (value.BLOCK_NUM == $('#inputBlock').val() && value.LOT_NUM == $('#inputLot').val()) {
          console.log("OMG YOUR HOUSE WILL BE SUCKED INTO THE DEPTHS");
          $('#not-found').hide();
          $('#found').show();
          break;
        } else { 
          $('#not-found').show();
          $('#found').hide();
        }
      });
  });
}
