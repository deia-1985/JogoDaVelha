var jogador = 1;
var bola = "0";
var xiz = "x";


function jogar(celula){
    
   
    if(celula.innerHTML == ""){
        
        if(jogador%2==0){
            celula.innerHTML = bola;
            jogador++;
        }else{
            celula.innerHTML = xiz; 
            jogador++;
        }


    }

    
    verificarEmpate();
    verificarVitoria()
}

function verificarVitoria() {
    var elementos = document.querySelectorAll('[posicao]');
  
    // Verificando as condições de vitória
    if (
      (elementos[0].textContent === 'x' && elementos[1].textContent === 'x' && elementos[2].textContent === 'x') ||
      (elementos[3].textContent === 'x' && elementos[4].textContent === 'x' && elementos[5].textContent === 'x') ||
      (elementos[6].textContent === 'x' && elementos[7].textContent === 'x' && elementos[8].textContent === 'x') ||
      (elementos[0].textContent === 'x' && elementos[3].textContent === 'x' && elementos[6].textContent === 'x') ||
      (elementos[1].textContent === 'x' && elementos[4].textContent === 'x' && elementos[7].textContent === 'x') ||
      (elementos[2].textContent === 'x' && elementos[5].textContent === 'x' && elementos[8].textContent === 'x') ||
      (elementos[0].textContent === 'x' && elementos[4].textContent === 'x' && elementos[8].textContent === 'x') ||
      (elementos[2].textContent === 'x' && elementos[4].textContent === 'x' && elementos[6].textContent === 'x')
    ) {
      alert('Vitória do X!');
    } else if (
      (elementos[0].textContent === '0' && elementos[1].textContent === '0' && elementos[2].textContent === '0') ||
      (elementos[3].textContent === '0' && elementos[4].textContent === '0' && elementos[5].textContent === '0') ||
      (elementos[6].textContent === '0' && elementos[7].textContent === '0' && elementos[8].textContent === '0') ||
      (elementos[0].textContent === '0' && elementos[3].textContent === '0' && elementos[6].textContent === '0') ||
      (elementos[1].textContent === '0' && elementos[4].textContent === '0' && elementos[7].textContent === '0') ||
      (elementos[2].textContent === '0' && elementos[5].textContent === '0' && elementos[8].textContent === '0') ||
      (elementos[0].textContent === '0' && elementos[4].textContent === '0' && elementos[8].textContent === '0') ||
      (elementos[2].textContent === '0' && elementos[4].textContent === '0' && elementos[6].textContent === '0')
    ) {
      alert('Vitória da bola! ');
    }
  }

  function verificarEmpate() {
    var elementos = document.querySelectorAll('[posicao]');
    var todasPreenchidas = true;
  
    // Verificando se todas as células estão preenchidas
    elementos.forEach(function(elemento) {
      if (elemento.textContent === '') {
        todasPreenchidas = false;
      }
    });
  
    // Verificando se houve empate
    if (todasPreenchidas) {
      alert('Empate!');
    }
  }
  

function reiniciar(){
    window.location.reload();
}