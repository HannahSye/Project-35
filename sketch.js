//Create variables here
var dog,dogImg,dogImg1;
var database;
var foodS, foodStock;

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
  dogImg1=loadImage("images/dogImg1.png")

}

//Function to set initial environment
function setup() {
	createCanvas(500, 500);
  
  dog=createSpritee(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

foodStock=database.ref('foodStock');
foodStock.on("value",readStock);
textsize(20);
}

// function to display UI
function draw() {  
  drawSprites();
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
    fill(255,255,254);
    stroke("black");
    textSize(13);
    text("Note: Press UP_ARROW Key To Feed Drago Milk!", 130,10,300,20);
}

    //Function to read values from DB
    function readStock(data){
      foodS=data.val();
  }

//Function to write values in DB
function writeStock(x){
 if(x<=0){
   x=0;
 }else{
   x=x-1;
 }
  database.ref('/').update({
    Food:x
  })
}

