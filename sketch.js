var car,wall;


function setup() {
  createCanvas(800,400);

   
  speed=random(55,90);
  weight=random(400,1500);  
 



   car =createSprite(10, 200, 30, 30);
   car.velocityX=speed;
   wall=createSprite(750,200,40,100);
  car.shapeColor="red"
  
}

function draw() {
  background(0);  

if (wall.x-car.x<car.width/2+wall.width/2){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180){
  car.shapeColor="yellow"
}
if (deformation<180 && deformation>100){
  car.shapeColor="green"
}
if (deformation<100){

  car.shapeColor="blue"
}

}
drawSprites();
}