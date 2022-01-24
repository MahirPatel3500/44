class Wall{
    constructor(x,y,width,height){
        var option = {
        isStatic:true
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,this.width,this.heigth,option)
        World.add(world,this.body)
    }
    display(){
        push()
        fill("yellow")
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
       rect(this.x,this.y,this.width,this.height);
        pop()
    }
}

