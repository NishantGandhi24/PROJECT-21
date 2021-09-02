class Ground{
    constructor(x,y,w,h){
        var groundoption={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x,y,w,h,groundoption);
        World.add(world,this.body);
    }
display(){
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}    
}