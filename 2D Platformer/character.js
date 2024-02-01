function drawJumpingLeft()
{
    //Chracter Jumping Left
    stroke(0);
    fill(253, 205, 231);	
    ellipse(gameChar_x-15, gameChar_y-27, 10, 15); // left arm
    fill(245, 98, 113);
    ellipse(gameChar_x-10, gameChar_y-2, 15, 10); // left leg
    ellipse(gameChar_x+10, gameChar_y-2, 10, 15); // right leg
    fill(253, 205, 231);
    ellipse(gameChar_x, gameChar_y-17, 35, 35);	// body
    fill(255, 0, 0, 100);
    ellipse(gameChar_x+1, gameChar_y-15, 8, 5); // left cheek
    ellipse(gameChar_x-14, gameChar_y-15, 7, 4); // right cheek
    fill(253, 205, 231);
    ellipse(gameChar_x+8, gameChar_y-32, 10, 15); // right arm
    fill(0);
    ellipse(gameChar_x-10, gameChar_y-22, 5, 10); // left eye
    ellipse(gameChar_x-3, gameChar_y-22, 5, 10); // right eye
    fill(255)
    ellipse(gameChar_x-10, gameChar_y-24, 3, 5); // left eye (white part)
    ellipse(gameChar_x-3, gameChar_y-24, 3, 5); // right eye (white part)
    fill(255, 0, 0, 100);
    ellipse(gameChar_x-7, gameChar_y-12, 4, 4); //mouth
} 

function drawJumpingRight()
{
    //Character Jumping Right
    stroke(0);
    fill(253, 205, 231);	
    ellipse(gameChar_x+15, gameChar_y-27, 10, 15); // right arm
    fill(245, 98, 113);
    ellipse(gameChar_x-10, gameChar_y-2, 10, 15); // left leg
    ellipse(gameChar_x+10, gameChar_y-2, 15, 10); // right leg
    fill(253, 205, 231);
    ellipse(gameChar_x, gameChar_y-17, 35, 35);	// body
    fill(255, 0, 0, 100);
    ellipse(gameChar_x-1, gameChar_y-15, 8, 5); // left cheek
    ellipse(gameChar_x+14, gameChar_y-15, 7, 4); // right cheek
    fill(253, 205, 231);
    ellipse(gameChar_x-8, gameChar_y-32, 10, 15); // left arm
    fill(0);
    ellipse(gameChar_x+10, gameChar_y-22, 5, 10); // left eye
    ellipse(gameChar_x+3, gameChar_y-22, 5, 10); // right eye
    fill(255)
    ellipse(gameChar_x+10, gameChar_y-24, 3, 5); // left eye (white part)
    ellipse(gameChar_x+3, gameChar_y-24, 3, 5); // right eye (white part)
    fill(255, 0, 0, 100);
    ellipse(gameChar_x+7, gameChar_y-12, 4, 4);  
} 

function drawWalkingLeft()
{
    //Character Walking Left
    stroke(0);
    fill(253, 205, 231);	
    ellipse(gameChar_x-15, gameChar_y-17, 15, 15); // left arm
    fill(245, 98, 113);
    ellipse(gameChar_x-10, gameChar_y-2, 15, 10); // left leg
    ellipse(gameChar_x+10, gameChar_y-4, 10, 15); // right leg
    fill(253, 205, 231);
    ellipse(gameChar_x, gameChar_y-17, 35, 35);	// body
    fill(255, 0, 0, 100);
    ellipse(gameChar_x+1, gameChar_y-15, 8, 5); // left cheek
    ellipse(gameChar_x-14, gameChar_y-15, 7, 4); // right cheek
    fill(253, 205, 231);
    ellipse(gameChar_x+8, gameChar_y-17, 15, 15); // right arm
    fill(0);
    ellipse(gameChar_x-10, gameChar_y-22, 5, 10); // left eye
    ellipse(gameChar_x-3, gameChar_y-22, 5, 10); // right eye
    fill(255)
    ellipse(gameChar_x-10, gameChar_y-24, 3, 5); // left eye (white part)
    ellipse(gameChar_x-3, gameChar_y-24, 3, 5); // right eye (white part)
    fill(255, 0, 0, 100);
    ellipse(gameChar_x-7, gameChar_y-12, 4, 4);
} 

function drawWalkingRight()
{
    //Character Walking Right
    stroke(0);
    fill(253, 205, 231);	
    ellipse(gameChar_x+15, gameChar_y-17, 15, 15); // right arm
    fill(245, 98, 113);
    ellipse(gameChar_x-10, gameChar_y-4, 10, 15); // left leg
    ellipse(gameChar_x+10, gameChar_y-2, 15, 10); // right leg
    fill(253, 205, 231);
    ellipse(gameChar_x, gameChar_y-17, 35, 35);	// body
    fill(255, 0, 0, 100);
    ellipse(gameChar_x-1, gameChar_y-15, 8, 5); // left cheek
    ellipse(gameChar_x+14, gameChar_y-15, 7, 4); // right cheek
    fill(253, 205, 231);
    ellipse(gameChar_x-8, gameChar_y-17, 15, 15); // left arm
    fill(0);
    ellipse(gameChar_x+10, gameChar_y-22, 5, 10); // left eye
    ellipse(gameChar_x+3, gameChar_y-22, 5, 10); // right eye
    fill(255)
    ellipse(gameChar_x+10, gameChar_y-24, 3, 5); // left eye (white part)
    ellipse(gameChar_x+3, gameChar_y-24, 3, 5); // right eye (white part)
    fill(255, 0, 0, 100);
    ellipse(gameChar_x+7, gameChar_y-12, 4, 4);
} 

function drawJumpingFacingForwards()
{
    //Character Jumping Facing Forward
    stroke(0);
    fill(253, 205, 231);	
    ellipse(gameChar_x-15, gameChar_y-32, 10, 15); // left arm
    ellipse(gameChar_x+15, gameChar_y-27, 15, 10); // right arm
    fill(245, 98, 113);
    ellipse(gameChar_x-10, gameChar_y-4, 10, 20); // left leg
    ellipse(gameChar_x+10, gameChar_y-4, 10, 20); // right leg
    fill(253, 205, 231);
    ellipse(gameChar_x, gameChar_y-17, 35, 35);	// body
    fill(0);
    ellipse(gameChar_x-5, gameChar_y-22, 5, 10); // left eye
    ellipse(gameChar_x+5, gameChar_y-22, 5, 10); // right eye
    fill(255)
    ellipse(gameChar_x-5, gameChar_y-24, 3, 5); // left eye (white part)
    ellipse(gameChar_x+5, gameChar_y-24, 3, 5); // right eye (white part)
    fill(255, 0, 0, 100);
    ellipse(gameChar_x+10, gameChar_y-15, 8, 5); // left cheek
    ellipse(gameChar_x-10, gameChar_y-15, 8, 5); // right cheek
    noFill();
    stroke(0);
    fill(255, 0, 0, 100);
    ellipse(gameChar_x, gameChar_y-12, 4, 4); // mouth
} 

function drawStandingFrontFacing()
{
    //Character Facing Forward
    stroke(0);
    fill(253, 205, 231);	
    ellipse(gameChar_x-15, gameChar_y-17, 15, 15); // left arm
    ellipse(gameChar_x+15, gameChar_y-17, 15, 15); // right arm
    fill(245, 98, 113);
    ellipse(gameChar_x-10, gameChar_y-2, 15, 10); // left leg
    ellipse(gameChar_x+10, gameChar_y-2, 15, 10); // right leg
    fill(253, 205, 231);
    ellipse(gameChar_x, gameChar_y-17, 35, 35);	// body
    fill(0);
    ellipse(gameChar_x-5, gameChar_y-22, 5, 10); // left eye
    ellipse(gameChar_x+5, gameChar_y-22, 5, 10); // right eye
    fill(255)
    ellipse(gameChar_x-5, gameChar_y-24, 3, 5); // left eye (white part)
    ellipse(gameChar_x+5, gameChar_y-24, 3, 5); // right eye (white part)
    fill(255, 0, 0, 100);
    ellipse(gameChar_x+10, gameChar_y-15, 8, 5); // left cheek
    ellipse(gameChar_x-10, gameChar_y-15, 8, 5); // right cheek
    noFill();
    stroke(0);
    fill(255, 0, 0, 100);
    ellipse(gameChar_x, gameChar_y-12, 4, 4); // mouth
}