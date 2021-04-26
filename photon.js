class Photon {

    //it is constructor part
    constructor(x, y, z = 0, c1 = -c, c2 = 0, c3 = 0) {

        //this code is position of photon
        this.pos = createVector(x, y, z);
        //This is the velocity of photon
        this.vel = createVector(c1, c2, c3);
        //this is the hidtory array for photon's tail
        this.history = [];
        //Length of photon's tail
        this.historyL = pHistoryL;
        //is it eaten from blackhole
        this.eaten = false;

    }

    //This function for photon moves , changing velocity and photons tail
    update() {
        this.history.push(this.pos.copy());
        const deltaV = this.vel.copy();
        deltaV.mult(dt);
        if (this.history.length > this.historyL) {
            this.history.splice(0, 1);
        }
        this.pos.add(deltaV);

    }

    //This function shows the photon and his tail
    show() {
        if (this.eaten == false) {
            //if it isnt eaten
            if (this.eaten == false) {
                //Show photon
                strokeWeight(4);
                stroke(255);
                fill(255);

                //here is the photon
                push();
                translate(this.pos.x, this.pos.y, this.pos.z)
                sphere(1);
                pop();

            }


        }

        beginShape();
        //if lenght of photon's tail is greater than 1
        if (this.historyL > 0) {

            //Turn all history
            for (let v of this.history) {
                //color
                stroke(255);
                noFill();
                //width of tail
                strokeWeight(0.5);
                //Here is the tail
                vertex(v.x, v.y, v.z);

            }


        }
        endShape();

    }
}