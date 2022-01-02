//https://teachablemachine.withgoogle.com/models/el59pzWgL/
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/el59pzWgL/model.json" , modelReady)

}
function modelReady(){
    console.log("modelReady");
    classifier.classify(gotResult)

}
function gotResult(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result);
        var soundName = result[0].label
        var confidence = (result[0].confidence*100).toFixed(2);
        r = Math.floor(Math.random()*255)+1
        g = Math.floor(Math.random()*255)+1
        b = Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML = "I Can Hear-" + soundName
        document.getElementById("result_confidence").innerHTML = "Accuracy-" + confidence
        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")"
        document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")"
    }

}


