var hr, mn, sc;
var scAngle,mnAngle,hrAngle;
var roomImage,room;

function preload()
{
  roomImage = loadImage("room.PNG")
}

function setup() {
  createCanvas(600,800);
  
 angleMode(DEGREES);



}

function draw() {
  background(roomImage); 
  
  translate(200,200);
    rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
    rotate(scAngle); 
    stroke("lime");
    strokeWeight(7);
    line(0,0,100,0);
    pop();

  push();
  rotate(mnAngle);
  stroke("purple");
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke("purple");
    point(30,300)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke("lime");
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke("purple");
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke("yellow");
    arc(0,0,260,260,0,hrAngle);

  drawSprites();
}