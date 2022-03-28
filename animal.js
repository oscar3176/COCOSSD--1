function preload() {
    animals = loadImage("animals.jpg");
}

function setup() {
    canvas = createCanvas(640, 430,);
    canvas.position(650, 200);
}

function draw() {
    image(animals, 0, 0, 640, 430);
    fill("red");
    text("Elephant 100%", 400, 280);
    noFill();
    stroke("red");
    rect(400, 270, 90, 90);

    fill("red");
    text("Elephant 98%", 270, 230);
    noFill()
    stroke("red");
    rect(270, 220, 130, 130);
}

function back() {
    window.location = "home.html";
}