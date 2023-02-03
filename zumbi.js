//zumbis
let xZumbis = [500, 500, 500, 500, 500, 500];
let yZumbis = [38, 94, 148, 210, 260, 315];
let velocidadeZumbis = [3.6, 2.6, 4.1, 2.6, 5, 4];
let comprimentoZumbis = 60;
let alturaZumbis = 50;

function zumbi(){
  for (let i = 0; i < xZumbis.length; i = i + 1) {
    image(imagemZumbi, xZumbis[i], yZumbis[i], comprimentoZumbis, alturaZumbis)
  }
}

function movimentaZumbi(){
  for (let i = 0; i < xZumbis.length; i = i + 1) {
  xZumbis[i] -= velocidadeZumbis[i];
  }
}

function retornoZumbis(){
  for (let i = 0; i < xZumbis.length; i = i + 1) {
    if(xZumbis[i] < -50)
    xZumbis[i] = 500
  }
}
  
