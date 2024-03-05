// Instanciando o tamagotchi:
var meuTamagotchi = new Tamagotchi('Sharkyyy');
var imgTamagotchi = document.getElementById('tamagotchi');
imgTamagotchi.src = meuTamagotchi.ui.imagem;

// Mensagem:
var msgTamagotchi = document.getElementById('tamagotchi_msg');
msgTamagotchi.innerHTML = "Olá!"

// Propriedades:
alimentacao.innerHTML = meuTamagotchi.fome;

var val_semFome = 5;
var val_comecandoFome = 10;
var val_comFome = 15;
var val_morto = 20;

// Objeto para mensagens e imagens
const estadosTamagotchi = {
  semFome: { mensagem: '', imagem: 'feliz' },
  comecandoFome: { mensagem: 'Uma coquinha gelada seria maneiro, hein!?', imagem: 'entediado' },
  comFome: { mensagem: 'Estou com MUITA fome!!!', imagem: 'triste' },
  morto: { mensagem: 'Morri x.x', imagem: 'morto' },
  naoEstouComFome: { mensagem: 'Não estou com fome', imagem: 'entediado' },
};

// Função para exibir mensagens e trocar imagens
function exibirEstadoTamagotchi(estado) {
  tamagotchi_msg.innerHTML = estadosTamagotchi[estado].mensagem;
  meuTamagotchi.ui.trocarImg(estadosTamagotchi[estado].imagem);
  imgTamagotchi.src = meuTamagotchi.ui.imagem;
}

// Função para determinar o estado do tamagotchi com base na fome
function determinarEstadoTamagotchi(fome) {
  if (fome <= val_semFome) {
    return 'semFome';
  } else if (fome <= val_comecandoFome) {
    return 'comecandoFome';
  } else if (fome >= val_comFome && fome < val_morto) {
    return 'comFome';
  } else {
    return 'morto';
  }
}

// Função para aumentar a fome a cada 3 segundos:
function aumentarFomeRegularmente() {
  const intervalId = setInterval(() => {
    meuTamagotchi.fome += 5;
    alimentacao.innerHTML = meuTamagotchi.fome;

    const estado = determinarEstadoTamagotchi(meuTamagotchi.fome);
    exibirEstadoTamagotchi(estado);

    if (estado === 'morto') {
      clearInterval(intervalId);
      btnAlimentar.style.display = 'none';
    }
  }, 3000);
  return intervalId;
}

// Alimentando o tamagotchi:
document.getElementById('btnAlimentar').addEventListener('click', function () {
  if (meuTamagotchi.fome >= val_semFome) {
    meuTamagotchi.alimentar(5);
    alimentacao.innerHTML = meuTamagotchi.fome;
    const estado = determinarEstadoTamagotchi(meuTamagotchi.fome);
    exibirEstadoTamagotchi(estado);
  } else {
    exibirEstadoTamagotchi('naoEstouComFome');
  }
});

// Inicializando tamagotchi:
var btnIniciar = document.getElementById('btnIniciar');
btnIniciar.addEventListener('click', function () {
  btnIniciar.style.display = 'none';
  var tamagotchi__box = document.getElementById('tamagotchi__box');
  tamagotchi__box.style.display = 'grid';
  aumentarFomeRegularmente();
});
