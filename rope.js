class Rope{
	constructor(body,pointB){

		var options={
             bodyA:body,			 
			pointB:pointB, 
			stiffness:1.2, 
			length:250
		}

		
		this.pointB=pointB;
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	

	display(){
		if(this.launcher.bodyA){
			var pointA=this.launcher.bodyA.position;
			var pointB=this.pointB

            strokeWeight(2);	
            stroke(48,22,8);	
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
    }
}


	