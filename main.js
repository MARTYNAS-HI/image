Webcam.attach( '#camera' );camera = document.getElementById("camera");
Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90   
});









function take_snapshot()
{   
Webcam.snap(function(data_uri) {
  document.getElementById("result").innerhtml = '<img id="captured_image" src="'+data_uri+'"/>';   
});
}
console.log('ml5 version:', ml5.version);                       
classifier = ml5.imageClassifier( 'https://teachablemachine.withgoogle.com/models/m5pod8uBD/model.json',modelLoaded);

function modelLoaded() { console.log('Model Loaded!'); }
            
     function check()       
    {        
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);

    }
            
            
            
            
            
            
            















































































































































































