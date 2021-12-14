class Ball
{
  constructor(x, y,r) 
  {
    let options = {
        restitution:0.5
    };
    
    this.body = Bodies.circle(x, y,r,options);
    this.w = r;
    this.h = r;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    stroke(255);
    fill("red");
    ellipse(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}


