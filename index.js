//That variables for blackholes and photons
const c = 80;
const G = 6;
const dt = 0.0600;


//This variable for blackhole's for loop
let previousB;

let time = true;

let pHistoryL = window.prompt("Foton kuyruk uzunluğunu giriniz : (ideal - 5)");
let beginBlackholeAmount = window.prompt("Enter amount of begining blakhole");

const photons = [];
const blackholes = [];
const stars = [];

//This variable for distance of photons
let angle = 10;
let turnAngle = 5;

let offsety = 0;
let offsetx = 0;
let offsetz = -3000;

function setup() {
    createCanvas(screen.width - 10, screen.height - 132.5, WEBGL);

    translate(width / 2, height / 2, 0);

    //This "for loop" for create blackhouse and push blackholes array
    for (let y = 1; y <= beginBlackholeAmount; y += 1) {
        blackholes.push(new Blackhole(0, 0, random(2000) + 1000));
    }


    //This "for loop" for background stars
    //İt create new star and push stars array
    for (let y = 1; y <= 1000; y += 1) {
        stars.push(new Star(random(-width * 2, width * 2) * 1.5, random(-height * 2, height * 2) * 1.5, random(-height * 2, height * 2) * 1.5, random(1) + 3));

    }


}


function draw() {
    translate(0, 0, offsetz);

    //perspective(-100, 100, 3000, 3000);
    angleMode(DEGREES);
    rotateY(offsety);
    rotateX(offsetx);


    //background is optional I am using red background
    background(136, 16, 16);
    //background(0);


    //This loop shows stars
    for (let s of stars) {
        //s.show();
    }

    //This loop for photon's function
    for (let p of photons) {


        //current photon
        currentP = p;

        if (time === true) {

            //Here,  blackholes pull photons
            for (let b of blackholes) {
                b.pull(currentP);
                b.pull(currentP);
            }

            //This function for photon moves and changing velocity
            currentP.update();

        }

        //This function shows photon
        currentP.show();



    }


    //This loop for photon's function
    for (let b of blackholes) {

        //Here if , b is the first blackhole of blaackholes array
        if (previousB == null) {
            //This function shows blackholes
            b.show();
            if (time === true) {

                //This function for blackholes moves and changing velocity
                b.update();
            }

        } else {
            //This function shows blackholes
            b.show();

            //This function enables black holes to merge
            b.merge(previousB);

            if (time === true) {

                //This function for blackholes moves and changing velocity
                b.update();

                //This function pull other blackholes
                b.pullB(blackholes);


            }
        }

        //Here previous blackhoseu is current blackhouse
        //I use for merge function of blackhole
        previousB = b;


    }





}

//İf mouse clicked
function mouseClicked() {

    //create new Blackhole and push blackholes array
    //blackholes.push(new Blackhole(mouseX, mouseY, random(2000) + 2000));
    blackholes.push(new Blackhole(0 / 2, 0 / 2, random(2000) + 2000));
}

//İf some keys pressed
function keyPressed() {

    //İf key is d
    if (key == "d" || key == "D") {
        //Create new photons on right
        let start = height + 2000;
        let end = -2000;
        for (let y = end; y < start; y += angle) {
            photons.push(new Photon(width / 2, y, 0, 0, 2 * c, 0));

        }
    }

    //İf key is a
    if (key == "a" || key == "A") {
        //Create new photons on left
        let start = height + 2000;
        let end = -2000;
        for (let y = end; y < start; y += angle) {
            photons.push(new Photon(-width / 2, y, 0, 20 * c, 0, 0));

        }
    }

    //İf key is w
    if (key == "w" || key == "W") {
        //Create new photons on top
        let start = width + 2000;
        let end = -2000;
        for (let y = end; y < start; y += angle) {
            photons.push(new Photon(y, width / 2, 500, 0, -c, 0));

        }
    }

    //İf key is s
    if (key == "s" || key == "S") {
        //Create new photons on bottom
        let start = 150;
        let end = -150;

        for (let y = end - height * 2; y < start + 500; y += angle * 2) {
            for (let z = end - height; z < start + height; z += angle * 2) {
                photons.push(new Photon(650 + y, height, z, 0, -c * 2, 0));
            }


        }
    }

    //İf key is s
    if (key == "q" || key == "Q") {
        //Create new photons on bottom
        //Create new photons on bottom
        let start = 150;
        let end = -150;
        for (let y = end; y < start; y += angle * 2) {
            for (let x = end; x < start; x += angle * 2) {
                for (let z = end - height; z < start + height; z += angle * 2) {

                    photons.push(new Photon(x, y, z, random(0, 0), random(-0, 0), 0));

                }
            }

        }
    }

    //İf key is s
    if (key == "e" || key == "E") {



        for (let t = 0; t <= 360; t += 5) {

            for (let y = 0; y <= 360; y += 5) {


                translate(0, y);
                photons.push(new Photon(sin(t) * 2000, cos(t) * 2000, 0, 0, 0, 0));

                photons.push(new Photon(0, cos(t) * 2000, sin(t) * 2000, 0, 0, 0));

                photons.push(new Photon(cos(t) * 2000, 0, sin(t) * 2000, 0, 0, 0));




            }
        }
    }

    if (key == "t" || key == "T") {
        time = !time;
    }

    if (key == "o" || key == "O") {
        if (offsetz <= 100) {
            offsetz += 100;

        }
    }

    if (key == "p" || key == "P") {
        if (offsetz >= -10000) {
            offsetz -= 100;

        }

    }


    if (keyCode === UP_ARROW) {

        rotateX(offsetx);
        console.log("X : " + offsetx);
        offsetx += turnAngle;

    }
    if (keyCode === DOWN_ARROW) {

        rotateX(offsetx);
        console.log("X : " + offsetx);
        offsetx -= turnAngle;


    }
    if (keyCode === LEFT_ARROW) {

        rotateY(offsety);
        console.log("Y : " + offsety);
        offsety += turnAngle;


    }
    if (keyCode === RIGHT_ARROW) {

        rotateY(offsety);
        console.log("Y : " + offsety);
        offsety -= turnAngle;

    }
}