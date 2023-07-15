function limitarTamanho(elemento, tamanhoMaximo) {
  if (elemento.value.length > tamanhoMaximo) {
    elemento.value = elemento.value.slice(0, tamanhoMaximo);
  }
}

function formatarCartao(elemento) {
  let valor = elemento.value.replace(/\s/g, ''); // Remove todos os espaços em branco
  let formatado = '';

  for (let i = 0; i < valor.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatado += ' ';
    }

    formatado += valor.charAt(i);
  }

  elemento.value = formatado;
}

function mudaNomeCartao(valor) {
  var showname = document.getElementById('showname');
  showname.textContent = valor;
}

function mudaNumeroCartao(elemento){
  var shownum = document.getElementById('shownumber');
  shownum.textContent = elemento.value;
}

function mudaValidadeCartao(elemento) {
  var mes = document.getElementById('valmes');
  var ano = document.getElementById('valano');
  var validade = document.getElementById('showval'); 
  validade.textContent = `${mes.value} / ${ano.value}`;
}

function mudaNumeroCvc(elemento) {
  var cvc = document.getElementById('showcvc');
  cvc.textContent = elemento.value;
}


function limitaAnoValidade(elemento) {
  if (elemento.value > 37 || (elemento.value < 23 && elemento.value > 10)) {
    elemento.value = 30;
  }
}

function limitaMesValidade(elemento) {
  if (elemento.value > 12 ) {
    elemento.value = 12;
  }
}



function validade(elemento) {
  limitarTamanho(elemento, 2);
  mudaValidadeCartao(elemento);
  limitaMesValidade(elemento);
}

function validade2(elemento) {
  limitarTamanho(elemento, 2);
  mudaValidadeCartao(elemento);
  limitaAnoValidade(elemento);
}

function executarFuncoes(elemento) {
  limitarTamanho(elemento, 19);
  formatarCartao(elemento);
  mudaNumeroCartao(elemento);
  mudaValidadeCartao(elemento);
}

function executarFuncoesCvc (elemento) {
  limitarTamanho(elemento, 4)
  mudaNumeroCvc(elemento)
}



