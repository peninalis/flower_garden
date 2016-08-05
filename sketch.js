var cloud=-1;
function circle(x,y,diameter){
  ellipse(x,y,diameter,diameter);
}
function square(x,y, side) {
  rect(x,y,side,side);
  
}
function drawcloud(x){
  fill(255, 255,255);
   noStroke();
   circle(x,100,80);
   circle(x+50,100,80);
   circle(x-50,100,80);
  circle(x,50,80);
}

function drawsunny(){
background(204, 255, 204);
stroke(0,225,0);
  fill(0,225,0);
  rect(320,300,4,500);
fill(100,100,100);
stroke(100,100,100);
  circle(320,240,50);
  fill(150,150,150);
  circle(320,190,60);
  circle(320,290,60);
  circle(270,240,60);
  circle(370,240,60);
  circle(290,200,60);
  circle(290,280,60);
  circle(350,200,60);
  circle(350,280,60);

  line(0,400,640,400);
  fill(0,225,0);
  rect(0,400,640,170);
  stroke(0,225,0);
  fill(0,225,0);
  rect(100,350,2,500);
  ellipse(100,350,15,25);
  ellipse(108,375,12,7);
   rect(500,150,4,500);
   fill(255, 80, 80);
   stroke(153, 51, 51);
   ellipse(500,150, 55,100);
   fill(153, 51, 51);
   ellipse(500,116,45,30);
   fill(255, 255, 0);
   circle(100,100,80);
}  

function drawcloudy (){
  background(102, 153, 153);
  stroke(0,225,0);
  fill(0,225,0);
  rect(320,300,4,500);
  fill(100,100,100);
  stroke(100,100,100);
  circle(320,240,50);
  fill(150,150,150);
  circle(320,190,60);
  circle(320,290,60);
  circle(270,240,60);
  circle(370,240,60);
  circle(290,200,60);
  circle(290,280,60);
  circle(350,200,60);
  circle(350,280,60);

  line(0,400,640,400);
  fill(0,225,0);
  rect(0,400,640,170);
  stroke(0,225,0);
  fill(0,225,0);
  rect(100,350,2,500);
  ellipse(100,350,15,25);
  ellipse(108,375,12,7);
   rect(500,150,4,500);
   fill(255, 80, 80);
   stroke(153, 51, 51);
   ellipse(500,150, 55,100);
   fill(153, 51, 51);
   ellipse(500,116,45,30);
}

function setup() {
  createCanvas(640,480);
  drawsunny ();
}

function draw() {
 
  if (cloud>-1){
    cloud=cloud+2;
     drawcloudy();
  drawcloud (cloud);
  
  }
  
}

function mousePressed(){
  cloud=mouseX;
  drawcloudy();
   drawcloud (mouseX);
  
  
}
