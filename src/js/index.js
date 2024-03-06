// Classe base para as funcionalidades internas do tamagotchi
class TamagotchiBase {
  constructor(nome) {
    // Dados pessoais:
    this.nome = nome;
    this.tipo = 'tubarao-martelo';

    // Propriedades de status:
    this.estados = ['semFome', 'semSono'];
    this.fome = 0;
    this.sono = 0;
    this.energia = 100;
    this.humor = 100;
  }

  // Props
  checaEstado(estado) {
    return tutu.estados.filter(item => item == estado).length
  }

  checaPropriedades() {
    const status = [];

    // Fome:
    if (this.fome >= 250) {
      status.push('morto');
    } else if (this.fome >= 50 && this.fome < 250) {
      status.push('comFome')
    } else if (this.fome >= 20 && this.fome < 50) {
      status.push('comecandoFome')
    } else if (this.fome < 20) {
      status.push('semFome')
    }

    // Sono:
    if (this.sono >= 250) {
      status.push('morto');
    } else if (this.sono >= 100 && this.sono < 250) {
      status.push('insonia');
    } else if (this.sono >= 50 && this.sono < 100) {
      status.push('comSono')
    } else if (this.sono >= 20 && this.sono < 50) {
      status.push('comecandoSono')
    } else if (this.sono < 20) {
      status.push('semSono')
    }

    return this.estados = status;
  }

  // Alimentação
  alimentar(comida) {
    this.fome -= comida;
    if (this.fome < 0) { this.fome = 0; } // impedindo valores negativos
  }
  aumentarFome(comida) {
    this.fome += comida;
  }

  // Diversão
  brincar(energiaBrincadeira, humorBrincadeira) {
    this.energia -= energiaBrincadeira;
    this.humor += humorBrincadeira;
  }

  // Sono
  dormir(horas) {
    this.sono -= horas;
  }
  aumentarSono(horas) {
    this.sono += horas;
  }

}

// Classe que combina as funcionalidades usando herança:
class Tamagotchi extends TamagotchiBase {
  constructor(nome) {
    super(nome);
    this.ui = new TamagotchiUI(nome);
  }
}

// Classe para a parte gráfica do tamagotchi:
class TamagotchiUI {
  constructor(nome, imagem, falaBalaozinho) {
    this.nome = nome ?? 'Gsszzz';
    this.imagem = imagem ?? 'src/img/creatures/shark-hammer/happy.png';
    this.falaBalaozinho = falaBalaozinho ?? 'Olá!';
  }

  atualizarUI() {
    // Atualizando props:
    document.getElementById('alimentacao').innerHTML = tutu.fome;
    document.getElementById('sono').innerHTML = tutu.sono;
    document.getElementById('estados').innerHTML = tutu.estados;

    // Atualizando img/msg de acordo com estado:
    let imagem = document.getElementById('tamagotchi');
    let mensagem = document.getElementById('tamagotchi_msg');

    // Na paz de Cristo:
    if (tutu.checaEstado('semFome') && tutu.checaEstado('semSono')) {
      imagem.src = 'src/img/creatures/shark-hammer/happy.png';
      mensagem.innerHTML = ':)';
    }

    // Somente fome:
    if (tutu.checaEstado('comecandoFome') && tutu.checaEstado('semSono')) {
      imagem.src = 'src/img/creatures/shark-hammer/bored.png';
      mensagem.innerHTML = 'Uma coquinha gelada seria maneiro, hein!?';
    }
    if (tutu.checaEstado('comFome') && tutu.checaEstado('semSono')) {
      imagem.src = 'src/img/creatures/shark-hammer/sad.png';
      mensagem.innerHTML = 'Estou com MUITA fome!!!';
    }

    // Somente sono:
    if (tutu.checaEstado('semFome') && tutu.checaEstado('comecandoSono')) {
      imagem.src = 'src/img/creatures/shark-hammer/sleep/comecandoSono.png';
      mensagem.innerHTML = 'Tô capotando o corsa';
    }
    if (tutu.checaEstado('semFome') && tutu.checaEstado('comSono')) {
      imagem.src = 'src/img/creatures/shark-hammer/sleep/comSono.png';
      mensagem.innerHTML = 'Vamo dormir logo que não somos herdeiros';
    }
    if (tutu.checaEstado('semFome') && tutu.checaEstado('insonia')) {
      imagem.src = 'src/img/creatures/shark-hammer/sleep/insonia.png';
      mensagem.innerHTML = 'Não lembro a última vez que dormi, me tornei um dev em startMerda?';
    }

    // Com sono e fome:
    if (
      tutu.checaEstado('comecandoFome') && tutu.checaEstado('comecandoSono')
      ||
      tutu.checaEstado('comecandoFome') && tutu.checaEstado('comSono')
      ||
      tutu.checaEstado('comFome') && tutu.checaEstado('comecandoSono')
      ||
      tutu.checaEstado('comFome') && tutu.checaEstado('comSono')
    ) {
      imagem.src = 'src/img/creatures/shark-hammer/babado.png';
      mensagem.innerHTML = 'Você foi comprar um cigarro não foi?';
    }

    // Morto:
    if (tutu.checaEstado('morto')) {
      imagem.src = 'src/img/creatures/shark-hammer/dead.png';
      mensagem.innerHTML = 'Morri x.x';
    }
  }
}


// Criando o tutu:
var tutu = new Tamagotchi('Sharkyyy'); // objeto do tutu

// Outros elementos da tela:
var domElements = {
  btnActions: document.getElementById('btns-action'),
}

/** 
 * Aumentar props a cada 3 segundos:
*/
function aumentarPropsRegularmente() {
  const intervalId = setInterval(() => {
    tutu.checaPropriedades();
    tutu.ui.atualizarUI();

    if (tutu.checaEstado('morto')) {
      clearInterval(intervalId);
      domElements.btnActions.style.display = 'none';
    } else {
      tutu.aumentarFome(5);
      tutu.aumentarSono(5);
    }
  }, 1000);
  return intervalId;
}


/**
 * ALIMENTAÇÃO
 * Se fome igual a zero, não permitir alimentar
 */
document.getElementById('btnAlimentar').addEventListener('click', function () {
  if (tutu.fome >= 0) {
    tutu.alimentar(10);
  } else {
    // TODO: exibirEstadoTamagotchi('naoEstouComFome');
  }
});

/**
 * SONO
 * Se sono igual a zero, não permitir descansar
 */
document.getElementById('btnDormir').addEventListener('click', function () {
  if (tutu.sono >= 0) {
    tutu.dormir(10);
  } else {
    // TODO: exibirEstadoTamagotchi('naoEstouComSono');
  }
});

/**
 * INICIALIZANDO O JOGO
 * 
 */
var btnIniciar = document.getElementById('btnIniciar');
btnIniciar.addEventListener('click', function () {
  // Sumindo com o botão de iniciar:
  btnIniciar.style.display = 'none';

  // Aparecendo a box do jogo:
  let tamagotchi__box = document.getElementById('tamagotchi__box');
  tamagotchi__box.style.display = 'grid';

  // Aparecendo a box de botões de ação:
  domElements.btnActions.style.display = 'block';

  // Aumentando propriedades a cada 3 segundos:
  aumentarPropsRegularmente();
});