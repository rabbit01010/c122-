function setup() {
    canvas = createCanvas(740, 400);
    canvas.position(280, 250);
    video = createCapture(VIDEO);
    video.size(400, 200);
    video.position(450, 350);
}

function draw() {
    fill(1386, 0, 0);
    stroke(1386, 128, 0);
    circle(690, 50, 70);
    circle(50, 50, 70);
    circle(690, 350 ,70);
    circle(50, 350 ,70);
    
    fill(0, 128, 0);
    stroke(1386, 1268, 0);
    rect(32, 84, 25, 233);
    rect(680, 84, 25, 233);
    rect(85, 40, 570, 25);
    rect(85, 340, 570, 25);
}

function take_snapshot(){
    save('student_name.png');
}

