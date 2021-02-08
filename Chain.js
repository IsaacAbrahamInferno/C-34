class Chain{
    constructor(bodyA,pointB){
    var options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:1,
    length:200
    }
    this.pointB=pointB    
    this.chain=Constriant.create(options);
    
    World.add(Earth,this.chain)
    }   
    display(){
    
    line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)
    } 
    }