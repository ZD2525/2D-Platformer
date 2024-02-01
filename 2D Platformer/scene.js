// Draws the Sky
function drawSky()
{
  background(100, 155, 255);
}

// Draws the Ground
function drawGround()
{
  noStroke();
  fill(0,155,0);
  rect(0, floorPos_y, width, 18);
  fill(139, 69, 19);	
  rect(0, floorPos_y+18, width, height/4); 
}

// Draws the Sun
function drawSun() 
{
  fill(245, 187, 87);
  stroke(245, 187, 87);
  push();
  translate(100, 80);
  rotate(radians(frameCount / 2));
  ellipse(0, 0, 60, 60);
  line(0, -60, 0, -40);
  line(0, 40, 0, 60);
  line(-45, -45, -30, -30);
  line(45, -45, 30, -30);
  line(-60, 0, -40, 0);
  line(40, 0, 60, 0);
  line(-45, 45, -30, 30);
  line(45, 45, 30, 30);
  pop();
  noFill();
  noStroke();
}

// Draws the snow with particle system
function drawSnow(){
  emitter1.drawAndUpdateParticles();
  emitter2.drawAndUpdateParticles();
  emitter3.drawAndUpdateParticles();
  emitter4.drawAndUpdateParticles();
  emitter5.drawAndUpdateParticles();
  emitter6.drawAndUpdateParticles();
}  

// Draws the Clouds
function drawClouds() 
{
  for(const cl of clouds)
  {
    fill(255);
	  ellipse(cl.x_pos, cl.y_pos-40, cl.size+100, cl.size);
    ellipse(cl.x_pos-50, cl.y_pos-25, cl.size+100, cl.size);
    ellipse(cl.x_pos+50, cl.y_pos-25, cl.size+100, cl.size);
	  ellipse(cl.x_pos+20, cl.y_pos-15, cl.size+100, cl.size);
	}
}

// Draws the Mountains
function drawMountains() 
{
  for(const m of mountains)
  {
    //Base of mountain
    fill(174, 139, 222);
    triangle(
      m.x_pos,
      m.y_pos,
      m.x_pos + m.width * 0.5,
      m.y_pos * 0.463,
      m.x_pos + m.width,
      m.y_pos
    );
    //Mountain Shadow
    fill(90);
    triangle(
      m.x_pos + m.width * 0.5,
      m.y_pos * 0.463,
      m.x_pos + m.width * 0.8,
      m.y_pos,
      m.x_pos + m.width,
      m.y_pos
    );
    //Top part of mountain
    fill(231, 241, 255);
    triangle(
      m.x_pos + m.width * 0.32,
      m.y_pos * 0.653,
      m.x_pos + m.width * 0.5,
      m.y_pos * 0.463,
      m.x_pos + m.width * 0.64,
      m.y_pos * 0.716
    );
  }
}

// Draws the Trees
function drawTrees()
{
  for(const t of trees_x) 
  {
    //Tree Trunk
    fill(193, 154, 107);
    rect(t, treePos_y, 30, 150);

    //Tree 'leaves'
    //Bottom
    fill(105, 155, 103);
    triangle(
      t - 65,
      treePos_y + 100,
      t + 15,
      treePos_y,
      t + 95,
      treePos_y + 100
    );
    //Middle
    fill(81, 137, 82);
    triangle(
      t - 65,
      treePos_y + 60,
      t + 15,
      treePos_y - 40,
      t + 95,
      treePos_y + 60
    );
    //Top
    fill(63, 128, 70);
    triangle(
      t - 65,
      treePos_y + 20,
      t + 15,
      treePos_y - 80,
      t + 95,
      treePos_y + 20
    );
  }
}
  
// Draws the Canyons
function drawCanyon(t_canyon) {
  fill(0);
  rect(t_canyon.x_pos, floorPos_y, t_canyon.width, floorPos_y);
}

// Draws the collectables
function drawCollectable(t_collectable) {
  fill(255, 255, 102);
  ellipse(t_collectable.x_pos, t_collectable.y_pos-15, t_collectable.size/2, t_collectable.size);
}

// Function to draw the Flagpole
function drawFlagpole() {
  push();
  strokeWeight(5);
  stroke(151);
  line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
  noStroke();
  fill(255, 0, 0);
  ellipse(flagpole.x_pos, floorPos_y - 250, 16, 16);
  image(img, flagpole.x_pos, floorPos_y - 290, 300, 300);


  if (flagpole.isReached) {
    fill(25, 25, 112);
    rect(flagpole.x_pos + 2, floorPos_y - 242, 75, 55);
    fill(151);
    textSize(24);

  } else {
    fill(25, 25, 112);
    rect(flagpole.x_pos + 2, floorPos_y - 52, 75, 55);
    fill(151);
    textSize(24);
  }

  pop();
}