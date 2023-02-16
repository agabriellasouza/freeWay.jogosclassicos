//variáveisdoator
let xAtor = 90;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, heigth1, cx, cy, diameter);
  for (let i = 0; i < imagemCarros.length; i = i +1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarros, alturaCarros, xAtor, yAtor, 15);
    if (colisao){
     colidiu();
      somColisao.play();
     voltaposicaoInicialAtor();
     if (pontosMaiorQueZero()){
       meusPontos -= 1;
     }
    }
  }
}

function colidiu(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(30);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 30);
}

function marcaPontos(){
 if (yAtor < 15){
   meusPontos += 1;
   somPonto.play();
   voltaposicaoInicialAtor();
 }
}

function voltaposicaoInicialAtor(){
  yAtor = 366;
}
  
function pontosMaiorQueZero(){
 return meusPontos > 0
}
  
function podeSeMover(){
  return yAtor < 366;
}