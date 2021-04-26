class Star {
    //it is constructor
    constructor(x, y, z, r) {
        //I created a vector named pos for stars positiıon
        this.pos = createVector(x, y, z);

        //This variable for point's strokeWeight
        this.r = r;

        //There are for random color
        this.red = random(130) + 125;
        this.green = random(50) + 50;
        this.blue = random(200) + 50;

    }

    //This function shows stars on canva
    show() {

        //Color of star
        stroke(this.red, this.green, this.blue);

        //width of star
        strokeWeight(this.r);

        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        //it is code which is show the star
        sphere(this.r);
        pop();
    }
}