class ball{
    constructor(x,y,r){
    var options = {
    density :1,
    friction :0.05   
    }    
    this.body=Bodies.circle(x,y,r,options);
    this.r=r;
    World.add(Earth,this.body)
    }   
    display(){
    ellipseMode(CENTER);
    ellipse (this.body.position.x,this.body.position.y,this.r,this.r);
    } 
    }