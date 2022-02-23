function setup()
{
canvas = createCanvas(650,450);
canvas.position(120,250);
video  = createCapture(VIDEO);
video.hide();
}
function draw()
{
image(video,200,135,250,200);
fill(0,255,0);
stroke(0,255,0);
circle(80,80,80);
circle(560,80,80);
circle(80,380,80);
circle(560,380,80);
fill(255,0,0)
stroke(255,0,0)
rect(120,65,400,30)
rect(120,365,400,30)
rect(65,120,30,220)
rect(545,120,30,220)
}
function take_snapshot() 
{
save('Kashvi.png');
}


