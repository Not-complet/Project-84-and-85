c = document.getElementById("myCanvas");
ctx = c.getContext("2d");
var car_height = 70;
var car_width = 120;
var car1 = "car1.png";
var car2 = "car2.png";
var car1_x = 10;
var car1_y = 10;
var car2_x = 10;
var car2_y = 100;
var background_image = "racing.jpg";

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    car1_imageTag = new Image();
    car1_imageTag.onload = uploadCar1;
    car1_imageTag.src = car1;

    car2_imageTag = new Image();
    car2_imageTag.onload = uploadCar2;
    car2_imageTag.src = car2;
}
function uploadBackground(){
    ctx.drawImage(background_imageTag, 0,0, canvas.width, canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car_width, car_height);
}
function uploadCar2(){
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car_width, car_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed == e.keyCode;
    if (keyPressed = "38"){
        car1_up();
        console.log("up:car1");
    }
    if (keyPressed == "40"){
        car1_down();
        console.log("down:car1");
    } 
    if (keyPressed == "37"){
        car1_left();
        console.log("left:car1")
    }
    if (keyPressed == "39"){
        car1_right();
        console.log("right:car1")
    }
    if (keyPressed == "87"){ 
        car2_up();
        console.log("w:car2");
    }
    if (keyPressed == '65'){
        car2_left();
        console.log('a:car2');
    }
    if (keyPressed == '68'){
        car2_right();
        console.log("d:car2");
    }
    if (keyPressed == '83'){
        car2_down();
        console.log('s:car2');
    }
}