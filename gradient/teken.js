var c = document.getElementById("decanvas");
var ctx = c.getContext('2d')
var divider = 1
var w = screen.width;
var h = screen.height;
c.width = w;
c.height = h
var totalIterations = 499;
var iteration = 0
var direction = 1;
var randomColor = getRandomColor(); 

function grad(){
  clear();
  if (direction == 1 && iteration < totalIterations){
    iteration+=0.5;
    if (ctx.globalAlpha < 1)  ctx.globalAlpha += 0.002;
  } else {
    iteration -=0.5
  }
  if (iteration == totalIterations) direction = 0;
  if (iteration == 0) {
    direction = 1;
    randomColor = getRandomColor();
  }

  var grd=ctx.createRadialGradient(w/2,h/2,0+iteration,w/2,h/2,500);
  grd.addColorStop(0,randomColor);
  grd.addColorStop(1,"black");

  if(direction == 0 && ctx.globalAlpha > 0) ctx.globalAlpha -= 0.001
  ctx.fillStyle=grd;
  ctx.fillRect(0,0,w,h);
  setTimeout(grad,10)
}
grad();

function clear(){
  ctx.fillStyle='black'
  ctx.fillRect(0,0,w,h)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

