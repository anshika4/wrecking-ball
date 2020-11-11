class Box {
    constructor(x,y,width, height) {
      var options = {
          isStatic: false,
          friction:1.0,
          restituition:0.8,
          density:0.04
         
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width =width;
      this.height =  height;
      World.add(world, this.body);
      
    }
    display(){
     
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
     
      }
    }
    
     