class Floor{
constructor(x,y,width,height){
var options = {
isStatic:true    
}    
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(Earth,this.body)
}   
display(){
rectMode(CENTER);
rect (this.body.position.x,this.body.position.y,this.width,this.height)
} 
}