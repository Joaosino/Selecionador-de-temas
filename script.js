//cria as variaveis para as funções e como elas são usadas em todo o momento elas são globais
const container = document.getElementById('container')
const bola = document.querySelector('.bola')
const interruptor = document.querySelector('.interruptor')
const corpo = document.querySelector('#corpo')

//cria a função que irá selecionar o tema
function selecionaTema() {
  //cria a variavel que irá verificar se o checkbox foi clicado
  let check = document.getElementById('checkbox')  
  //verifica se o checkbox foi ou não clicado e seleciona o tema usando as funções temaClaro e temaEscuro
  if (check.checked == true){
    temaClaro()
  } else {
    temaEscuro()
  }
}

//cria a função temaEscuro
function temaEscuro() {
  //define os estilos de cor do tema
  container.style.backgroundColor = '#292c35';
  bola.style.backgroundColor = "#292c35";
  interruptor.style.backgroundColor = '#f1f1f1';
  corpo.style.backgroundColor = '#f1f1f1';
  
}

function temaClaro(){
  //define os estilos de cor do tema
  container.style.backgroundColor = '#f1f1f1';
  bola.style.backgroundColor = "#f1f1f1";
  interruptor.style.backgroundColor = '#292c35';
  corpo.style.backgroundColor = '#292c35';
}

//inicia o site já carregando o tema escuro

