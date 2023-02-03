//ator
let xAtor = 220;
let yAtor = 354;
let colisao = false;
let meusPontos = 0;

function ator1(){
  image(imagemAtor1, xAtor, yAtor, 50, 50)
}

function movimentoAtor(){
  if(keyIsDown(87)){
    yAtor -= 3;
  }
  if(keyIsDown(83)){
     yAtor += 3;
    
  }
  if(keyIsDown(65)){
    xAtor -= 3;
  }
  if(keyIsDown(68)){
    xAtor += 3;
  }
}

function verificaColisao(){
   for (let i = 0; i < xZumbis.length; i = i + 1) {
     colisao = collideRectCircle(xZumbis[i], yZumbis[i], comprimentoZumbis,          alturaZumbis, xAtor, yAtor, 0)
     
        if (colisao) {
           voltaAtor();
          if(meusPontos > 0){
            meusPontos = 0
          }
        
        }
     
    }
}

function voltaAtor(){
  yAtor = 354;
}

function pontuacao(){
  textAlign(CENTER);
  textSize(30);
  fill(color(255, 230, 0))
  text(meusPontos, width / 2, 30)
}

function marcaPonto() {
  if(yAtor < 15) {
    meusPontos += 1
    voltaAtor();
  }
}

