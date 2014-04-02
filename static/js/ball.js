$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;


  var ball = {
    xCoor: 20,
    yCoor: 20,
    radius: 20,
    vx: 5,
    vy:5
  };
  var xx = function() {
    ball.xCoor = ball.xCoor + ball.vx;
  }
  var yy = function() {
    ball.yCoor = ball.yCoor + ball.vy;
  }

  var updateGame = function() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.beginPath();
    context.arc(ball.xCoor, ball.yCoor, ball.radius ,0,2*Math.PI);
    context.fillStyle = 'blue';
    context.fill();
    context.closePath();
    context.stroke();
    setTimeout(updateGame,10);
    xx();
    yy();
    if (ball.xCoor > width - 20 )
    {
      ball.vx = -ball.vx
    }
     if (ball.xCoor < 20 )
    {
      ball.vx = -ball.vx
    }
    if (ball.yCoor > height - 20)
    {
      ball.vy = -ball.vy
    }
    if (ball.yCoor < 20)
    {
      ball.vy = -ball.vy
    }
  };

  

  updateGame();
});

