// Inicialize o tamagotchi:
var meuTamagotchi = new Tamagotchi('Sharkyyy');

// Inicializando propriedades:
alimentacao.innerHTML = meuTamagotchi.fome;

// Exibindo a imagem:
let imgTamagotchi = document.getElementById('tamagotchi');
imgTamagotchi.src = meuTamagotchi.ui.imagem;

let msgTamagotchi = document.getElementById('tamagotchi_msg');
msgTamagotchi.innerHTML = "Olá!"


// Alimentando o tamagotchi:
document.getElementById('btnAlimentar').addEventListener('click', function () {
  if (meuTamagotchi.fome > 0) {
    meuTamagotchi.alimentar(5);
    alimentacao.innerHTML = meuTamagotchi.fome;
  } else {
    meuTamagotchi.ui.trocarImg('entediado');
    imgTamagotchi.src = meuTamagotchi.ui.imagem;
    setTimeout(() => {
      meuTamagotchi.ui.trocarImg('feliz');
      imgTamagotchi.src = meuTamagotchi.ui.imagem;
    }, 2000);
  }
});

// Função para aumentar a fome a cada 3 segundos:
function aumentarFomeRegularmente() {
  const intervalId = setInterval(() => {

    if (meuTamagotchi.fome < 15) {
      meuTamagotchi.fome += 5;
      alimentacao.innerHTML = meuTamagotchi.fome;

      if (meuTamagotchi.fome >= 10) {
        meuTamagotchi.ui.trocarImg('triste');
        imgTamagotchi.src = meuTamagotchi.ui.imagem;
        tamagotchi_msg.innerHTML = "Estou com MUITA fome!!!"
      } else if (meuTamagotchi.fome >= 5) {
        meuTamagotchi.ui.trocarImg('entediado');
        imgTamagotchi.src = meuTamagotchi.ui.imagem;
        tamagotchi_msg.innerHTML = "Uma coquinha gelada seria maneiro, hein!?"
      } else {
        tamagotchi_msg.innerHTML = ''
      }
    } else {
      meuTamagotchi.ui.trocarImg('morto');
      imgTamagotchi.src = meuTamagotchi.ui.imagem;

      tamagotchi_msg.innerHTML = "Morri x.x"

      btnAlimentar.style.display = 'none';
    }
  }, 3000);
}

var btnIniciar = document.getElementById('btnIniciar');
btnIniciar.addEventListener('click', function () {
  btnIniciar.style.display = 'none';

  var tamagotchi__box = document.getElementById('tamagotchi__box');
  tamagotchi__box.style.display = 'grid';

  aumentarFomeRegularmente();
})