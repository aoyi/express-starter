$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var levels = [];
  var level1 = {
    num: 1,
    minReactions: 2,
    numBalls: 5
  }
  var level2 = {
    num: 2,
    minReactions: 4,
    numBalls: 10
  }
  var level3 = {
    num: 3,
    minReactions: 8,
    numBalls:15
  }
  var level4 = {
    num: 4,
    minReactions: 12, 
    numBalls: 20
  }
  var level5 = {
    num: 5,
    minReactions: 20,
    numBalls: 30
  }
  var level6 = {
    num: 6,
    minReactions: 35,
    numBalls: 40
  }
  var level7 = {
    num: 7,
    minReactions: 46,
    numBalls: 50
  }
  var level8 = {
    num: 7,
    minReactions: 55,
    numBalls: 60
  }
  var level9 = {
    num: 7,
    minReactions: 95,
    numBalls: 100
  }
  levels.push(level1); levels.push(level2); levels.push(level3);
  levels.push(level4); levels.push(level5); levels.push(level6);
  levels.push(level7); levels.push(level8); levels.push(level9);

  var curLevel = 0;
  var levelText = "Level 1 - React 1 out of 5 balls";

  var gameState = "menu";
  var menuText = "Click to play!";
  var numReacted = 0;
  var reacting = false;
  var numBalls = 2;
  var balls = [];
  for (var z = 0; z<numBalls; z++) {
    var ball = {
      xCoor:width*Math.random(),
      yCoor:height*Math.random(),
      radius:15,
      color: "black",
      vx:10*Math.random(),
      vy:15*Math.random()
    };
    balls.push(ball);
  }
  //alert(balls.length);

  var reactions = [];

  // Run an interation of the game
  var updateGame = function() {
    // PUT STUFF HERE
    console.log(gameState + reacting + curLevel);
    if (gameState === "menu") {
      context.font = "30px Arial"
      context.fillText(menuText, 325, 30);
    }else if (gameState === "over") {
      context.font = "30px Arial"
      context.fillText(menuText, 325, 30);
    }else if (gameState === "restart") {
      context.font = "30px Arial"
      context.fillText(menuText, 325, 100);
    }else if (gameState === "finalWin") {
      context.font = "40px Courier";
      context.fillText(menuText, 325, 100);
    }else if (reacting == true && reactions.length == 0 && gameState != "restart") {
      menuText = "GAME OVER! You reacted " + numReacted + " balls";
      gameState = "over";
      updateGame();
    }else if (numReacted >= levels[curLevel].minReactions) {
      curLevel++;
      if (curLevel == 9) {
        menuText = "Perfect!";
        gameState = "finalWin";
        updateGame();
      }else {
        gameState = "menu";
        context.font = "30px Arial"
        context.fillText("You Win! Click to next level", 250,250);
      }
    }else if (gameState === "playing") {
      for (var b = 0; b<balls.length; b++) {
        var collided = false;
        for (var a = 0; a<reactions.length; a++) {
          var xdiff = Math.abs(reactions[a].xCoor - balls[b].xCoor);
          var ydiff = Math.abs(reactions[a].yCoor - balls[b].yCoor);
          var dist = Math.sqrt(xdiff*xdiff + ydiff*ydiff);
          if (dist < reactions[a].radius + balls[b].radius) {
            collided = true;
          }
        }
        if (collided == true) {
          var gReac = {
            xCoor: balls[b].xCoor,
            yCoor: balls[b].yCoor,
            radius: 1,
            color: "black",
            timer: 0
          };
          numReacted++;
          reactions.push(gReac);
          balls.splice(b, 1);
          b--;
          numBalls--;
        }
      }

      for (var j = 0; j<numBalls; j++) {
        balls[j].xCoor = balls[j].xCoor + balls[j].vx;
        balls[j].yCoor = balls[j].yCoor + balls[j].vy;
        if (balls[j].xCoor > width - 20 )
        {
          balls[j].vx = -balls[j].vx
        }
         if (balls[j].xCoor < 20 )
        {
          balls[j].vx = -balls[j].vx
        }
        if (balls[j].yCoor > height - 20)
        {
          balls[j].vy = -balls[j].vy
        }
        if (balls[j].yCoor < 20)
        {
          balls[j].vy = -balls[j].vy
        }
      }

      for (var x = 0; x<reactions.length; x++) {
        reactions[x].timer++;
        if (reactions[x].timer > 200) {
          reactions[x].radius--;
        }else if (reactions[x].radius < 30) {
          reactions[x].radius++;
        }
        if (reactions[x].radius == 0) {
          reactions.splice(x,1);
          x--;
        }
      }
      context.fillStyle = 'white';
      context.fillRect(0, 0, width, height);
      for (var i = 0; i<numBalls; i++) {
        //console.log("what");
        context.beginPath();
        context.arc(balls[i].xCoor, balls[i].yCoor, balls[i].radius ,0,2*Math.PI);
        context.fillStyle = balls[i].color;
        context.fill();
        context.closePath();
        context.stroke();
      }
      for (var n = 0; n<reactions.length; n++) {
        context.beginPath();
        context.arc(reactions[n].xCoor, reactions[n].yCoor, reactions[n].radius ,0,2*Math.PI);
        context.fillStyle = reactions[n].color;
        context.fill();
        context.closePath();
        context.stroke();
      }
      context.font = "20px Courier";
      context.fillText("Reactions: "+numReacted, 20, 20);
      context.fillText(levelText, 20, 580);
      requestAnimationFrame(updateGame);
    }     
  };


  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    if (gameState === "menu") {
      //console.log("what");
      levelText = "Level " + (curLevel+1) + " - React " + levels[curLevel].minReactions + " out of " + levels[curLevel].numBalls + " balls";
      gameState = "playing";
      numBalls = levels[curLevel].numBalls;
      balls = [];
      for (var z = 0; z<numBalls; z++) {
        var ball = {
          xCoor:width*Math.random(),
          yCoor:height*Math.random(),
          radius:15,
          color: "black",
          vx:10*Math.random(),
          vy:15*Math.random()
        };
        balls.push(ball);
      }
      reactions = [];
      reacting = false;
      numReacted = 0;
      updateGame();
    }else if (gameState === "finalWin") {
      curLevel = 0;
      gameState = "menu";
    }else if (gameState === "over") {
      gameState = "restart";
      menuText = "Click to RESTART!";
      updateGame();
    }else if (gameState === "restart") {
      balls = [];
      numBalls = levels[curLevel].numBalls;
      for (var z = 0; z<numBalls; z++) {
        var ball = {
          xCoor:width*Math.random(),
          yCoor:height*Math.random(),
          radius:15,
          color: "black",
          vx:10*Math.random(),
          vy:15*Math.random()
        };
        balls.push(ball);
      }
      reacting = false;
      numReacted = 0;
      gameState = "playing";
      updateGame();
    }else if (gameState === "playing" && reacting == false) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;
        // PUT STUFF HERE
        var newReaction = {
          xCoor:x,
          yCoor:y,
          radius:1,
          color: "black",
          timer: 0
        };
        reacting = true;
        reactions.push(newReaction);
        //balls.push(newball);
        //numBalls++;
      }
  });

  updateGame();
});