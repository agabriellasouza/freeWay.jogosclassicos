//códigos de tudo referente aos carros

//variáveisdoscarros
let xCarros = [600, 605, 610, 615, 610, 605]
let yCarros = [40, 95, 145, 210, 265, 315]
let velocidadeCarros = [2, 3, 4, 3, 2, 4]
let larguraCarros = 50;
let alturaCarros = 40;

function mostraCarros(){
  for (let i = 0; i < imagemCarros.length; i = i +1){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarros, alturaCarros)
  }
}

function movimentaCarros(){
  for (let i = 0; i < imagemCarros.length; i = i +1){
   xCarros[i] -= velocidadeCarros[i]
  }
}

function voltaPosicaoInicial(){
  for (let i = 0; i < imagemCarros.length; i = i +1){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < - 50;
}
