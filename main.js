

function setup() {
    canvas = CreateCanvas(200,200);
    canvas.center();
    background("white");
   canvas.mouseReleased(classifyCanvas);
   synth = window.speechSynthesis;
}

function preload() {

    
classifier = ml5.imageClassifier('DoodleNet');
}


function ClearCanvas() {

    background("white");
}

function draw() {


    strokeWeight(13);

    stroke(0);

    if(mouseIsPressed) {
        line(pmousex, pmouseŸ, mousex, mouseY);
    }
}