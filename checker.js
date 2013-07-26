// Quick and dirty function to check against JSON file

function checkLiquifactionStatus() {
  var form = $('form');
  var userBlockLot = $('#inputBlock').val() + "," + $('#inputLot').val();
  console.log(userBlockLot);

  $.getJSON('./data.json', function(data) {
      console.log("loaded JSON");
      $.each(data, function(key, value) {
        if (value.BLOCK_NUM == $('#inputBlock').val() && value.LOT_NUM == $('#inputLot').val()) {
          $('#not-found').hide();
          $('#found').show();
          return false;
        } else {
          $('#not-found').show();
          $('#found').hide();
        }
      });
  });
}
