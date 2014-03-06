$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  $('#p1').click(function() {
  	context.strokeStyle = 'blue';
    context.strokeRect(10, 20, 50, 80);
  });

 $('#p2').click(function() {
  	context.strokeStyle = 'pink';
    context.strokeRect(70, 90, 50, 50);
  });

 $('#p3').click(function() {
  	context.fillStyle = 'pink';
    context.fillAr(70, 90, 50, 50);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

});
