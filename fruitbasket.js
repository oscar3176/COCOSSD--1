function preload() {
    fruitbasket = loadImage("fruit_basket.jpg");
}

function setup() {
    canvas = createCanvas(640, 430,);
    canvas.position(650, 200);
}

function draw() {
    image(fruitbasket, 0, 0, 640, 430);
    fill("red");
    text("Orange 98%", 380, 150);
    noFill();
    stroke("red");
    rect(380, 140, 90, 100);

    fill("red");
    text("Orange 94%", 270, 200);
    noFill()
    stroke("red");
    rect(270, 190, 90, 150);
}

function back() {
    window.location = "home.html";
}