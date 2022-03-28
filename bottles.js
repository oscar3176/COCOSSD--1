function preload() {
    bottles = loadImage("bottles.jpg");
}

function setup() {
    canvas = createCanvas(640, 430,);
    canvas.position(650, 200);
}

function draw() {
    image(bottles, 0, 0, 640, 430);
    fill("red");
    text("Bottle 98%", 270, 30);
    noFill();
    stroke("red");
    rect(260, 20, 120, 400);
}

function back() {
    window.location = "home.html";
}