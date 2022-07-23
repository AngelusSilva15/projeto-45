var paradoImg
var atacandoImg
var mortoImg
var danoImg

function preload(){
  paradoImg = loadImage("assets/parado.png")
  atacandoImg = loadImage("assets/atacando.png")
  mortoImg = loadImage("assets/morto.png")
  danoImg = loadImage("assets/parado.png")
  zumbi = loadImage("assets/zombie.png")
  espada1 = loadImage("assets/espada.png")
  fundo1 = loadImage("assets/fundo.jpg")
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  jim = createSprite(displayWidth/2+100, displayHeight-100, 50, 50);
  jim.addImage("parado",paradoImg)
  jim.scale = 0.3

  zumbie = createSprite(displayWidth, displayHeight-100, 50, 50)
  zumbie.addImage(zumbi)
  zumbie.scale = 0.2
  zumbie.velocityX = -15
}

function draw() {
  background(fundo1); 

drawSprites();

}
