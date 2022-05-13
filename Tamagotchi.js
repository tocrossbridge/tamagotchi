/* tamagotchi status */
var health = document.getElementById('health');
var fun = document.getElementById('fun');
var hungry = document.getElementById('hungry');
var bath = document.getElementById('bath');
var poop = document.getElementById('poop');
var sleep = document.getElementById('sleep');

class Tamagotchi{
    constructor(){
        this.name = 'Baby Shark'
        this.type = 'shark'
        this.hp = 1000
        this.hungry = 1000
        this.dirty = 1000
        this.health = 1000
        this.poopNeed = 1000
        this.fun = 1000
        this.sleepy = 0
    }

    hello() {
        console.log(`Hello, they call me ${this.name} :)`);
    }

    feed(){
        this.hungry +=100
        this.update() 
        return
    }
    cure(){
        this.health += 100
        this.update()
        return
    }
    bath(){
        this.dirty += 250
        this.health += 150
        this.hp += 50
        this.sleepy -= 50
        this.update()
        return
    }
    poop(){
        this.dirty -= 100
        this.health += 100
        this.update()
        return
    }
    sleep(){
        this.sleepy = 0
        this.fun +=50
        this.health +=250
        this.hungry -= 250
        this.hp += 5
        this.update()
        return
    }
    read(){
        this.fun += 250
        this.sleepy += 100
        this.update()
        return
    }
    dance(){
        this.fun +=250
        this.hp += 100
        this.dirty -= 100
        this.update()
        return
    }

    update(){
        console.log('atualizando!')
        health.innerHTML = myTamagotchi.health;
        fun.innerHTML = myTamagotchi.fun;
        hungry.innerHTML = myTamagotchi.hungry;
        bath.innerHTML = myTamagotchi.dirty;
        poop.innerHTML = myTamagotchi.poopNeed;
        sleep.innerHTML = myTamagotchi.sleepy;
        return
    }
}

console.log('Game started!')
console.log('Creating your tamagotchi...')
const myTamagotchi = new Tamagotchi();

/* tamagotchi status */
health.innerHTML = myTamagotchi.health;
fun.innerHTML = myTamagotchi.fun;
hungry.innerHTML = myTamagotchi.hungry;
bath.innerHTML = myTamagotchi.dirty;
poop.innerHTML = myTamagotchi.poopNeed;
sleep.innerHTML = myTamagotchi.sleepy;

console.log('Congratulations! Your tamagotchi was born :)')
console.log(myTamagotchi)
