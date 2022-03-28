function preload() {
    garage = loadImage("garage.jpg");
}

function setup() {
    canvas = createCanvas(640, 430,);
    canvas.position(650, 200);
}

function draw() {
    image(garage, 0, 0, 640, 430);
    fill("red");
    text("Car 98%", 350, 280);
    noFill();
    stroke("red");
    rect(350, 270, 90, 60);

    fill("red");
    text("MotorCycle 74%", 250, 280);
    noFill()
    stroke("red");
    rect(250, 270, 90, 60);
}

function back() {
    window.location = "home.html";
}