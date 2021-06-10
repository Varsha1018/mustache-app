function preload(){
}

function setup(){
    canvas=createCanvas(400, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400, 380);
    video.hide();
    poseNet=ml5.poseNet(video,moddelloaded);
    poseNet.on("pose",Gotpose);
}

function moddelloaded(){
    console.log("poseNet is loaded");
    }
    
    function Gotpose(results){
        if(results.length > 0){
            console.log("results");
            console.log("nose_x ="+results[0].pose.nose.x);
            console.log("nose_y = "+results[0].pose.nose.y);
        }
    }
    

function draw(){
    image(video, 0, 0, 400, 380);
}

function capture(){
    save();
}
