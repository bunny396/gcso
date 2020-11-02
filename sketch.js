var car,wall;
var speed,weight;





function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  car.velocityX = speed;
  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor=("80,80,80");
  speed=random(55,90);
  weight=random(400,1500);

}

function draw() {
  background("black");  
  if(wall.x -car.x <(car.width+wall.wedth)/2)
  {
    car.veloccityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation=0.5 >180)
    {
        car.shapeColor=colour(255,0,0);
    }

    if(deformation<180 &&deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<180)
    {
      car.shapeColor=colour(0,255,0);
    }
  }
  drawSprites();
}