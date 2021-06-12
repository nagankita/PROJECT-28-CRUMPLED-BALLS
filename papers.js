class Papers{
    constructor(x,y,radius){

        var options= {'restitution':0.3,
        density:1,
        friction:3
        
        
        
        }
        
        
            this.body=Bodies.circle(x,y,radius,options)
            World.add(world,this.body)
        this.radius=3*radius;
    
        
        }
        display(){
            push ()
            fill ("blue")
            rectMode(CENTER)
            translate (this.body.position.x,this.body.position.y)
            rotate (this.body.angle)
            circle(0,0,this.radius);
            pop ();
        }  
}