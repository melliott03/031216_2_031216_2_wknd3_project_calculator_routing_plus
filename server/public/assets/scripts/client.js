$(document).ready(function (){
  console.log('LOADS');
  $('.calcbtn').on('click', function(){
    event.preventDefault();

    var $el = $(this);
    var btnvalue = $el.data('num');
    console.log('data from button:', $el.data('num'));
    $('#operatorsOperandsEntered').val($('#operatorsOperandsEntered').val() + btnvalue);
    console.log("new button's vaulue:", btnvalue);

    });
    $('.equalbtn').on('click', function(){
      event.preventDefault();
      var input = $('#operatorsOperandsEntered').val();
      console.log("input to be calculated:", input);
      var inputString = input.toString();
      var inputObject = {};
      inputObject.inputItems = inputString;
      console.log("input as a string:", inputObject);
      var input = $('#operatorsOperandsEntered').empty();


      $.ajax({
          type: "POST",
          url:"/math",
          data: inputObject,
          success: function(data){
            console.log("yey! returned from math.js:", data);
            // function appendDom(data){
            //
            // };
          }
      });
  });

});

  // $("#operatorsOperandsEntered").on("submit", function(event) {
  //   event.preventDefault();
  //
  //   var $el = $(this);
  //   console.log('data from button:', $el.data('data-num'));
  //
  //   var values = {};
  //   console.log("HERE: ", $("#catForm"));
  //   $.each($("#catForm").serializeArray(), function(i, field){//these names can be anything just the order matters
  //     values[field.name] = field.value; //these name/value names are important to keep
  //   });
  //   $.ajax({
  //     type: "POST",
  //     url:"/add",
  //     data: values,
  //     success: function(data){
  //       $.ajax({
  //         type: "GET",
  //         url:"/cats",
  //         success: function(catsObject){
  //           console.log('inside of success ', catsObject);
  //           appendDom(catsObject);
  //           function appendDom(catsObject){
  //             $('#putCatsHere').empty();
  //             for (var i = 0; i < catsObject.length; i++) {
  //               $('#putCatsHere').append('<p>'+ catsObject[i].name +'</p>');
  //             }
  //             console.log('inside of appendDom ', catsObject);
  //
  //
  //
  //           };
  //         }
  //       });
  //     }
  //   });
  //
