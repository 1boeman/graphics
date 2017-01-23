var c = document.getElementById("decanvas");
c.width = 800;
c.height = 800;
c.style.backgroundColor = 'black';

var ctx = c.getContext('2d')
ctx.translate(400,400);
ctx.lineWidth=2;
ctx.strokeStyle = '#ff0000';

var q = [];
function nextFromQ(){
  var modelq = [
    [100,20,200,20,21,10,100],
    [20,190,120,210,49,20,200],
    [40,30,200,200,301,30,200],
    [80,100,20,30,19,10,200],
    [0,0,300,300,19,20,100]
    [20,20,200,300,901,30,200],
    [10,10,300,400,1001,20,200]
    [0,0,400,600,101,20,200],
    [110,310,40,40,19,10,300]

  ]; 
  
  if (!q.length) {
   q = shuffleArray(modelq);
  } 
  draw.apply(this,q.shift());
}

draw(20,20,200,300,901,30,200)

function draw( x, y, width, height, angle, pause, iterations) {
  console.log(angle)
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


function clear (){
  if (ctx.strokeStyle == '#ffffff'){
    ctx.strokeStyle = '#000000';
  } else {
    ctx.strokeStyle = '#ffffff';
  }
  ctx.lineWidth= Math.random() * (8 - 1) + 1;

} 

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
