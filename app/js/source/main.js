(function(){
  'use strict';
  $(document).ready(initialize);

  function initialize(){
    $('#btn').click(doStuff1);
    $('#btn2').click(doStuff2);
    $('#btn3').click(doStuff3);
    $('#btn4').click(doStuff4);
    $('#btn5').click(doStuff5);
    $('#btn6').click(doStuff6);
    $('#btn7').click(doStuff7);

  }

  function doStuff1(){
    $('h1').css('color', 'red');
    $('h2').css('background-color','#338576');
    $('h3').text('Kelley');
  }

  function doStuff2(){
    $('#btn').text('I have been changed!');
  }

  function doStuff3(){
    $('body').addClass('alert');
  }

  function doStuff4(){
    $('body').removeClass('alert');
  }

  function doStuff5(){
    $('body').toggleClass('alert');
  }

  function doStuff6(){
    var x = $('#tb1').val();
    $('h1').text(x.toUpperCase());
  }

  function doStuff7(){
    var x = $('#tb1').val();
    $('h3').css('background-color', x);
  }

})();
