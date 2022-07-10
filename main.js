function setup()
{
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas=createCanvas(400,400);
    canvas.position(430,130);

    poseNet= ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotPoses);
}
function modelDone()
{
    console.log("PoseNet Is Innitialized And Loaded");
}

function draw()
{
    background("#5196e3");
}

function gotPoses(results,error)
{
   if(error)
   {
    console.error(error);
   }
   if(results.length > 0);
   {
    console.log(results);

    console.log("rightwrist_x ="+results[0].pose.rightwrist.x+"rightwrist_y ="+results[0].pose.rightwrist.y);
    console.log("lefttwrist_x ="+results[0].pose.lefttwrist.x+"lefttwrist_y ="+results[0].pose.lefttwrist.y);
   }
}