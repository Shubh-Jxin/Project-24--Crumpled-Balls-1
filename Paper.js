class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body= Bodies.circle(100,640,20,options)
        this.radius= 20;
        World.add(world, this.body)
    }
    display(){
        var pos= this.body.position
        ellipseMode(RADIUS);
        fill("tomato")
        ellipse(pos.x,pos.y,this.radius);
    }
}