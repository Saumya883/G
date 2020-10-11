var wall,car
var speed,weight;
function setup() {
  createCanvas(1600,400);
 
  speed = random(55,90)
  weight = random(400,1500)
 
  car=createSprite(100,250,50,50)
  car.velocityX = speed;

  wall=createSprite(1500,200,60,height/2)
  
  
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=1;
    var deformation=0.5*weight*speed*speed/22509;

    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  } 
  drawSprites();
}