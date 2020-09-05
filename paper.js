class Paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.radius = r
    }
    display(){
        var pos =this.body.position;
        //rectMode(CENTER);
        fill("blue");
        circle(pos.x, pos.y, this.radius);
    }    
}