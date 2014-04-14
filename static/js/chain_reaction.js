$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var numBalls = 10;
  var balls = [];

  for (var i = 0; i < numBalls; i++) {
    var ball_i = {
    xCoor: width * Math.random(),
    yCoor: height * Math.random(),
    radius: 20,
    vx: 20 * Math.random(),
    vy: 15 * Math.random()
  };
    balls.push(ball_i); 
}

  var updateGame = function() {

    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    for (var i = 0; i < balls.length; i++) {

    context.beginPath();
    context.arc(balls[i].xCoor,balls[i].yCoor, balls[i].radius ,0,2*Math.PI);
    context.fillStyle = 'pink';
    context.fill();
    context.closePath();
    context.stroke();
    };
    requestAnimationFrame(updateGame);

    for (var i = 0; i < balls.length; i++) {
    var xx = function() {
    balls[i].xCoor = balls[i].xCoor + balls[i].vx;
  }
    var yy = function() {
    balls[i].yCoor = balls[i].yCoor + balls[i].vy;
  }
    xx();
    yy();

    
    if (balls[i].xCoor > width - 20 )
    { balls[i].vx = -balls[i].vx };
     if (balls[i].xCoor < 20 )
    { balls[i].vx = -balls[i].vx };   
    if (balls[i].yCoor > height - 20)
    { balls[i].vy = -balls[i].vy };
    if (balls[i].yCoor < 20)
    { balls[i].vy = -balls[i].vy };
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
