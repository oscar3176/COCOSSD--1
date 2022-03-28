function preload() {
    desk = loadImage("desk.jpg");
}

function setup() {
    canvas = createCanvas(640, 430,);
    canvas.position(650, 200);
}

function draw() {
    image(desk, 0, 0, 640, 430);
    fill("red");
    text("Chair 89%", 350, 200);
    noFill();
    stroke("red");
    rect(350, 190, 220, 200);
}

function back() {
    window.location = "home.html";
}