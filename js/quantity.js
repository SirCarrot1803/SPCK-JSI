
// Quantity selector
// $('.input-number-increment').click(function() {
//     var $input = $(this).parents('.input-number-group').find('.input-number');
//     var val = parseInt($input.val(), 10);
//     $input.val(val + 1);
//   });
  
//   $('.input-number-decrement').click(function() {
//     var $input = $(this).parents('.input-number-group').find('.input-number');
//     var val = parseInt($input.val(), 10);
//     $input.val(val - 1);
//   })
  


  jQuery(document).ready(($) => {
    $(".quantity").on("click", ".plus", function (e) {
      let $input = $(this).prev("input.qty");
      let val = parseInt($input.val());
      $input.val(val + 1).change();
      getVal();

    });
  
    $(".quantity").on("click", ".minus", function (e) {
      let $input = $(this).next("input.qty");
      var val = parseInt($input.val());
      if (val > 0) {
        $input.val(val - 1).change();
      }
      getVal();
    });
    
  });
  function getVal(){

    const val = document.getElementById('quantity'). value;
    console.log(val)
  }