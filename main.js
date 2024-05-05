function setup(){
   canvas = createCanvas(100,100);
   canvas.center();
   video = createCapture(VIDEO);
   classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MqkoT3giSS/model.json',modelLoaded);
 }

function modelLoaded(){
   console.log('Model Loaded!');   
 }

function draw(){
   image(video,0,0,100,100);
   classifier.classify(image,gotResults);
 }

function gotResults(error,results){
    if(error){
      console.error(error);
    }else{
      console.log(results);
      document.getElementById("results_object_name").innerHTML = results[0].label;
      document.getElementById("results_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
 }