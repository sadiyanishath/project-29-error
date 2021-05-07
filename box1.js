class Box1 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':1.0,
          'density':1.0
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){

      if((this.body.speed)<3)
 {
}else
{
World.remove(world,this.body)
this.body.visible=0;
} 
      var pos =this.body.position;
      var angle=this.body.angle;
      push()
      strokeWeight(4)
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      fill(128,128,128);
      rect(0, 0, this.width, this.height);
      pop()
    }
  };
