prediction1="";
prediction2="";

Webcam.set({

height:350,
width:350,
image_format:"png",
png_quality:8000
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){

Webcam.snap(function(data_uri){

document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri+ '"/>'

})

}

console.log('ml5 version:' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/K2dXGPh7e/model.json' , modelLoaded);

function modelLoaded(){

console.log('Model Loaded');

}

function speak1(){

var synth = window.speechSynthesis;
speak_data_1= "The first prediction is" + prediction1;
speak_data_2= "And the second prediction is" + prediction2;
var utterThis= new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);
}

function check(){

img = document.getElementById('captured_image');
classifier.classify(img,gotResult);

}

function gotResult(error, results){

if (error){
console.error(error);
}
 else {

console.log(results);
document.getElementById("name1").innerHTML = results[0].label;
document.getElementById("name2").innerHTML = results[1].label;
prediction1 = results[0].label;
prediction2= results[1].label;
speak1();
if(prediction1 =="Happy"){

    document.getElementById("emoji1").innerHTML=" &#128522";
    
    }
    
    if(prediction1 =="Sad"){
    
        document.getElementById("emoji1").innerHTML="&#128532";
        
        }
    
        if(prediction1 =="Angry"){
    
            document.getElementById("emoji1").innerHTML="&#128548";
            
            }
    
            if(prediction2 =="Happy"){
    
                document.getElementById("emoji2").innerHTML="&#128522";
                
                }
                
                if(prediction2 =="Sad"){
                
                    document.getElementById("emoji2").innerHTML ="&#128532";
                    
                    }
                
                    if(prediction2 =="Angry"){
                
                        document.getElementById("emoji2").innerHTML="&#128548";
                        
                        }
 }
}

