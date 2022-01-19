function setup(){
    canvas = createCanvas(180,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(ClassifyCanvas);
    synth = window.speechSynthesis;
}
function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
}

function clearCanvas(){
    background('white');
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
       }
}

function ClassifyCanvas(){
    classifier.classify(canvas,gotResult);
}

function gotResult(error,results){
    if(error){console.error(error);}
    console.log(results);
    document.getElementById("label").innerHTML = 'Label :' + results[0].label;
    document.getElementById("Confidence").innerHTML = 'confidence :' + Math.round(results[0].confidence);
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synt.speak(utterThis);
}