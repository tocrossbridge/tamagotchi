// Classe base para as funcionalidades internas do tamagotchi
class TamagotchiBase {
  constructor(nome) {
    this.nome = nome;
    this.fome = 0;
  }

  alimentar(comida) {
    this.fome -= comida;
  }

}

// Classe para a parte gráfica do tamagotchi:
class TamagotchiUI {
  constructor(nome) {
    this.nome = nome;
    this.imagem = 'src/img/happy.png';
  }

  exibir() {
    console.log(`${this.nome} - ${this.imagem}`);
  }

  trocarImg(tipo) {
    switch (tipo) {
      case 'feliz':
        this.imagem = 'src/img/happy.png';
        break;
      case 'entediado':
        this.imagem = 'src/img/bored.png';
        break;
      case 'triste':
        this.imagem = 'src/img/sad.png';
        break;
      case 'morto':
        this.imagem = 'src/img/dead.png';
        break;
      default:
        this.imagem = 'src/img/happy.png';
        break;
    }

  }
}

// Classe que combina as funcionalidades usando herança:
class Tamagotchi extends TamagotchiBase {
  constructor(nome) {
    super(nome);
    this.ui = new TamagotchiUI(nome);
  }
}