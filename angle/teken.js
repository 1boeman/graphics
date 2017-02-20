var c = document.getElementById("decanvas");
var ctx = c.getContext('2d')
var divider = 1
var w = screen.width ;
if (w < 1148)  divider = 2
if (w < 701)  divider = 3
if (w < 500)  divider = 4

c.width = 1000/divider;
c.height = 800/divider;
c.style.backgroundColor = 'black';

ctx.translate((500/divider),(400/divider));
ctx.lineWidth=2;
ctx.strokeStyle = '#ffffff';
ctx.lineWidth= 10 
ctx.globalAlpha = 0.5
i=0
function nextFromQ(){
  draw.apply(this,[randomNr(-400,400), randomNr(-400,400), randomNr(-500,500), randomNr(-400,400), randomNr(0,400),randomNr(0,450),randomNr(1,400),randomNr(1000,5000), randomNr(1,4)]);
}

nextFromQ();

function draw( cp1x, cp1y, cp2x, cp2y, endx, endy, angle, pause, iterations) {
  var rotation = angle * ( Math.PI/180);
  clear();

  for (var i = 0; i < iterations; i++){
    setTimeout(function(i){
      ctx.rotate(rotation);
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endx, endy);
    },i*pause);     
  } 
  ctx.stroke()

  setTimeout(nextFromQ,(iterations+1)*pause); 
}

function randomNr(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function clear (){
//  ctx.clearRect(-500, -400, ctx.canvas.width, ctx.canvas.height);

  //ctx.transform(0, 0, 0, 0, 1, 0)
/*
  if (ctx.strokeStyle == '#ffffff'){
    ctx.strokeStyle = '#000000';
  } else {
    ctx.strokeStyle = '#ffffff';
  }
  ctx.lineWidth= randomNr(1,20) 
*/

} 

