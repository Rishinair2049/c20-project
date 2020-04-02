
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
var r = 0;
var g = 50;
var b=255;
var ball;

function setup(){
  createCanvas(1200,400);
}


function draw(){
  // Pass the values to the background() function you have learnt previously.
 background(r,g,b);
  // change the value of Red based on the mouse movement about the X axis
 r = map(mouseX,0,1100,75,700);
  // change the value of Green based on the mouse movement about the X axis
 g = map(mouseX,0,1100,50,500);
  // change the value of Blue based on the mouse movement about the X axis
 b = map(mouseX,0,1100,25,200);
  // Use the map() function to do so. 

  // Create an ellipse that will move around with you mouse about the X axis.
  fill('white');
  ball = ellipse(mouseX,mouseY,100);
  // Remember to fill the canvas with white paint before creating the ellipse.
}