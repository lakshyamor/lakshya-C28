class Launcher{

constructor(bodyA, pointB){

var options = {
   bodyA: bodyA,
   pointB= pointB,
   stifness:0.04,
   length:10
}
this.pointB = pointB
this.launcher = Constraint.create(options);
World.add(world,this,launcher);
}

fly(){
    this,launcher.bodyA = null;
}

display(){
if(this.sling.bodyA){
var pointA = this.launcher.bodyA.position;
var pointB = this.pointB;
strokeWeight(3);
Line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}