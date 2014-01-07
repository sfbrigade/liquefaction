function checkliquefactionStatus() {
  resetFound();

  $.getJSON('./data.json', function(bl_pairs) {
    var input_block = $('#inputBlock').val();
    var input_lot = $('#inputLot').val();
    $(".blockNum").text(input_block); // Adds the input to the result message.
    $(".lotNum").text(input_lot); // Adds the input to the result message.
    
    // Finding everything matching the block and lot pair.
    // A result greater than 0 means there is a block and lot pair within the database.
    // Blocks and lots are converted to integers to allow for leading 0s. Radix is 16 to account for letters.
    if ($.grep(bl_pairs, function(bl_pair, index) {
      return (parseInt(bl_pair.BLOCK_NUM, 16) === parseInt(input_block, 16) && parseInt(bl_pair.LOT_NUM, 16) === parseInt(input_lot, 16));
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
  $("#found").attr("tabindex",-1).focus();
}

function showNotFound() {
  $("#not-found").show();
  $("#not-found").attr("tabindex",-1).focus();

  $("#found").hide();
}