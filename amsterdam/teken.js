var c = document.getElementById("decanvas");
var ctx = c.getContext('2d')

c.width = 1000;
c.height = 800;
c.style.backgroundColor = 'black';

ctx.translate(500,400);
ctx.lineWidth=2;
ctx.strokeStyle = '#ff0000';

function nextFromQ(){
  draw.apply(this,[randomNr(0,200), randomNr(0,200), randomNr(4,600), randomNr(4,600), randomNr(1,1001),randomNr(10,50),randomNr(100,400)]);
}

draw(20,20,200,300,901,30,200)

function draw( x, y, width, height, angle, pause, iterations) {
  clear();
  var rotation = angle * ( Math.PI/180);
  for (var i = 0; i < iterations; i++){
    setTimeout(function(i){
      ctx.rotate(rotation);
      ctx.strokeRect(x,y,width,height);
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

