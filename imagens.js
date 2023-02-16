//códigos referentes as imagens e sons do projeto

//imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//sons
let somColisao;
let somPonto;
let somTrilha;

function preload(){
 imagemAtor = loadImage("imagens/ator.png");
 imagemCarro1 = loadImage("imagens/carro-1.png");
 imagemCarro2 = loadImage("imagens/carro-2.png");
 imagemCarro3 = loadImage("imagens/carro-3.png");
 imagemEstrada = loadImage("imagens/estrada.png");
 imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro3, imagemCarro2, imagemCarro1];
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
  somTrilha = loadSound("sons/trilha.mp3");
}

