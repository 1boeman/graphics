var c = document.getElementById("decanvas");
var ctx = c.getContext('2d')
var divider = 1
var w = screen.width ;
var totalIterations = 0;
if (w < 1148)  divider = 2
if (w < 701)  divider = 3
if (w < 500)  divider = 4

c.width = 1000/divider;
c.height = 800/divider;
c.style.backgroundColor = 'black';

ctx.translate((500/divider),(400/divider));
ctx.lineWidth=2;
ctx.strokeStyle = '#ff0000';

function nextFromQ(){
  var shape = randomNr (1,9);
  if (shape > 3) {
      draw.apply(this,[randomNr(0,200), randomNr(0,200), randomNr(4,600), randomNr(4,600), randomNr(1,1001),randomNr(10,50),randomNr(100,400)]);
  } else {
      drawCircle.apply(this,[randomNr(1,500),randomNr(1,500),randomNr(2,600),randomNr(1,1001),randomNr(10,100),randomNr(100,400)])
  }
}

draw(20,20,200,300,901,30,200)

function draw( x, y, width, height, angle, pause, iterations) {
  clear();
  var rotation = angle * ( Math.PI/180);
  for (var i = 0; i < iterations; i++){
    setTimeout(function(i){
      ctx.rotate(rotation);
      ctx.strokeRect(x/divider,y/divider,width/divider,height/divider);
    },i*pause);     
  } 
  setTimeout(nextFromQ,(iterations+1)*pause); 
}

function drawCircle(x, y, radius, angle, pause, iterations){
  clear()
  var rotation = angle * ( Math.PI/180);
  for (var i = 0; i < iterations; i++) {
    setTimeout(function(i){
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.arc(x/divider, y/divider, radius/divider, 0, 2*Math.PI);
      ctx.stroke();
    },i*pause);     
  } 
  setTimeout(nextFromQ,(iterations+1)*pause); 
}


function randomNr(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function clear (){
  if (ctx.strokeStyle == '#ffffff'){
    ctx.strokeStyle = '#000000';
  } else {
    ctx.strokeStyle = '#ffffff';
  }
  ctx.lineWidth= randomNr(1,20) 
} 

