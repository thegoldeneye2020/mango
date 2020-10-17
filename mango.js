class Mango{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction:1,
        }
        this.body = Bodies.circle(x,y,30,options);
        mango=loadImage("sprites/mango.png");
        //mango.scale=0.5;
        World.add(world, this.body);
      }

      display(){
        var pos =this.body.position;
      
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(pos.x, pos.y,30);
        
      }
    };