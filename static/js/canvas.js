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
 	context.beginPath();
  	context.arc(100,200,50,0,Math.PI);
  	context.closePath();
  	context.strokeStyle = 'yellow';
    context.stroke();
  });

  $('#p4').click(function() {
 	context.beginPath();
  	context.arc(200,300,50,0,2*Math.PI);
  	context.closePath();
    context.strokeStyle = 'red';
    context.stroke();
  });
 
 $('#p5').click(function() {
 	context.beginPath();
  	context.moveTo(200,100);
  	context.lineTo(200,200);
  	context.closePath();
    context.strokeStyle = 'purple';
    context.stroke();
  });

  $('#p6').click(function() {
  	context.fillStyle = 'green';
    context.fillRect(300, 100, 50, 80);
  });

$('#p7').click(function() {
 	context.beginPath();
  	context.arc(200,300,50,0,2*Math.PI);
  	context.fillStyle = 'red'
    context.fill();
  	context.closePath();
    context.stroke();
  });

 $('#p8').click(function() {
  	context.strokeStyle = 'blue';
    context.strokeRect(70, 90, 50, 50);
    context.fillStyle = 'yellow'
    context.fillRect(70, 90, 50, 50);
  });

 $('#p9').click(function() {
  	context.strokeStyle = 'blue';
  	for (var i = 1; i <= 5; i++) {
       context.strokeRect(10 + 50*i, 10, 50, 50) ;
}
  });

 $('#p10').click(function() {
  	context.strokeStyle = 'pink';
  	for (var i = 0; i < 100; i++) {
       context.strokeRect(5*i, 100 , 5, 5) ;
}
  });


  //--------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

});
