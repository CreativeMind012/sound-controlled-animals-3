dog = 0;
lion = 0;
cow = 0;
anim = "";
anso = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MZxHFyZdp/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if (error){
        console.error(error);
    }
    else {
        console.log("got results");

        
red = Math.floor(Math.random() * 255) + 1 ;
green = Math.floor(Math.random() * 255) + 1 ;
blue = Math.floor(Math.random() * 255) + 1 ;

document.getElementById("no_of_times").innerHTML = 'Detected' +anim+' - '+ anso ;
document.getElementById("name_of_audio").innerHTML = 'Detected voice is of -  ' + results[0].label ;
document.getElementById("no_of_times").style.color = "rgb("+red+","+green+","+blue+")" ;
document.getElementById("name_of_audio").style.color = "rgb("+red+","+green+","+blue+")" ;

img = document.getElementById("image_of_a?").value;

if(results[0].label == "barking")
{
    img = 'dog.png';
    dog = dog + 1;
    anim = "dog";
    anso = dog;
}
else if(results[0].label == "mooing")
{
    img = 'cow.jpg';
    cow = cow + 1;
    anim = "cow";
    anso = cow;
}
else if(results[0].label == "roaring")
{
    img = 'lion.png';
    lion = lion + 1;
    anim = "lion";
    anso = lion;
}
else
{
    img = 'ear.png';
}
    }
}
















