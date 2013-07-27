function checkLiquifactionStatus() {
  resetFound();

  var form = $('form');
  var userBlockLot = $('#inputBlock').val() + "," + $('#inputLot').val();
  console.log(userBlockLot);

  var checker_result = false;

  $.getJSON('./data.json', function(bl_pairs) {
    console.log("loaded JSON");
    if ($.grep(bl_pairs, function(bl_pair, index) {
      var input_block = $('#inputBlock').val();
      var input_lot = $('#inputLot').val();

      return (bl_pair.BLOCK_NUM == input_block && bl_pair.LOT_NUM == input_lot);
    }).length > 0) {
       showFound();
    }
    else {
      showNotFound();
    }
  });
}

function resetFound() {
  $("#not-found").hide();
  $("#found").hide();
}

function showFound() {
  $("#not-found").hide();
  $("#found").show();
}

function showNotFound() {
  $("#not-found").show();
  $("#found").hide();
}