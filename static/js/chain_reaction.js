$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var reactions = [];
  var numBalls = 10;
  var balls = [];

  for (var i = 0; i < numBalls; i++) {

    var ball_i = {
    xCoor: width * Math.random(),
    yCoor: height * Math.random(),
    radius: 10,
    vx: 20 * Math.random(),
    vy: 15 * Math.random()
  };
    balls.push(ball_i); 
  };

  var updateGame = function() {

    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    for (var i = 0; i < balls.length; i++) {

    context.beginPath();
    context.arc(balls[i].xCoor,balls[i].yCoor, balls[i].radius ,0,2*Math.PI);
    context.fillStyle = 'blue';
    context.fill();
    context.closePath();
    context.stroke();
    };

    for (var i = 0; i < reactions.length; i++) {

    context.beginPath();
    context.arc(reactions[i].xCoor,reactions[i].yCoor, reactions[i].radius ,0,2*Math.PI);
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

  
  $('#game_canvas').click(function(e) {
    
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    var reaction_object = {
    xCoor: x,
    yCoor: y,
    radius: 30
  };
    reactions.push(reaction_object);
  });

  updateGame();
});
