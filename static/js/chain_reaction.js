$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var balls = []
  var b0 = {
    xCoor: 20,
    yCoor: 20,
    radius: 20,
    vx: 5,
    vy:5
  };
    var b1 = {
    xCoor: 140,
    yCoor: 140,
    radius: 50,
    vx: 5,
    vy:5
  };
    var b2 = {
    xCoor: 300,
    yCoor: 300,
    radius: 80,
    vx: 5,
    vy:5
  };

  balls.push(b0); 
  balls.push(b1);
  balls.push(b2);
  // Run an interation of the game
  var updateGame = function() {
    for (var i = 0; i < balls.length; i++) {
    context.beginPath();
    context.arc(balls[i].xCoor,balls[i].yCoor, balls[i].radius ,0,2*Math.PI);
    context.fillStyle = 'pink';
    context.fill();
    context.closePath();
    context.stroke();
    };
  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});
