class Ball{
    constructor(x,y){
        var option = {
            friction:0.01,
            restitution:1,
             density:0.0001
        }
        this.body = Bodies.circle(x,y,15,option)
        World.add(world,this.body)
    }
    display(){
        push()
        fill("red")
        translate(this.body.position.x,this.body.position.y)
        ellipse(0,0,30,30)
        pop()
    }
}