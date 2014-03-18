$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    // Write square drawing code here
    context.strokeStyle = color;
    context.strokeRect(x,y,sideLen,sideLen);
    // Delete the alerts when done
  };

  var drawCircle = function(x, y, radius, color) {
    // Write circle drawing code here
    context.beginPath();
    context.arc(x,y,radius,0,2*Math.PI);
    context.strokeStyle = color;
    context.closePath();
    context.stroke();
    // Delete the alerct when done
  };

  // Write drawTriplet function here
  var drawTriplet = function(x, y, radius, color) {
    var offSet = 5;
    drawCircle(x, y, radius, color);
    drawCircle(x+offSet+radius, y, radius, color);
    drawCircle(x+((offSet+radius)/2), y-(offSet+radius)*(Math.pow(3,1/2))/2, radius, color);
  }

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here
  var drawTriangle = function(x, y, sideLen, color) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x-sideLen/2, y+sideLen*(Math.pow(3,1/2))/2);
    context.lineTo(x+sideLen/2, y+sideLen*(Math.pow(3,1/2))/2);
    context.lineTo(x, y);
    context.fillStyle = color;
    context.fill();
    context.closePath();
    context.stroke();
  }

  var drawTriforce = function(x, y, color) {
    drawTriangle(x, y, 20, color);
    drawTriangle(x-20/2, y+20*(Math.pow(3,1/2))/2, 20, color);
    drawTriangle(x+20/2, y+20*(Math.pow(3,1/2))/2, 20, color);
  }

  var drawTripleTriforce = function(x, y, color) {
    drawTriforce(x, y, color);
    drawTriforce(x-40/2, y+40*(Math.pow(3,1/2))/2, 20, color);
    drawTriforce(x+40/2, y+40*(Math.pow(3,1/2))/2, 20, color);
  }

  var drawSierpinski = function(x, y, color) {
    drawTripleTriforce(x, y, color);
    drawTripleTriforce(x-80/2, y+80*(Math.pow(3,1/2))/2, 20, color);
    drawTripleTriforce(x+80/2, y+80*(Math.pow(3,1/2))/2, 20, color);
  }




  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //
  $('#p5').click(function() {
    drawCircle(250,350,50,'blue');
    drawSquare(200,300,100,'red');
    drawCircle(300,350,50,'green');
    drawCircle(200,350,50,'green');
    drawCircle(250,400,50,'green');
    drawCircle(250,300,50,'green');
  });

  $('#p6').click(function() {
    drawTriplet(150,300,30,'green');
  });

  $('#p7').click(function() {
    drawTriplet(450,200,30,'blue');
  })

  $('#p8').click(function() {
    drawTriplet(100,200,30,'red');
    drawTriplet(200,200,30,'yellow');
    drawTriplet(100,300,30,'black');  
    drawTriplet(200,300,30,'pink');
  })

  $('#p9').click(function() {
    drawTriangle(150,200,20,'black');
  })

  $('#p10').click(function() {
    drawTriforce(350,200,'black');
  })

  $('#p11').click(function() {
    drawTripleTriforce(350,300,'black');
  })

  $('#p12').click(function() {
    drawSierpinski(250,200,'black');
  })
});
