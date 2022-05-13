export default class Tamagotchi{
    constructor(){
        this.name = 'Baby Shark'
        this.type = 'shark'
        this.hp = 1000
        this.hungry = 1000
        this.dirty = 1000
        this.health = 1000
        this.poopNeed = 1000
        this.fun = 1000
        this.sleep = 0
    }

    hello() {
        console.log(`Hello, they call me ${this.name} :)`);
    }

    feed(){
        console.log('feed! :<')
        return this.hungry +=100 
    }
    cure(){
        return this.health += 100
    }
    bath(){
        this.dirty += 250
        this.health += 150
        this.hp += 50
        this.sleep -= 50
        return
    }
    poop(){
        this.dirty -= 100
        this.health += 100
        return
    }
    sleep(){
        this.sleep = 0
        this.fun +=50
        this.health +=250
        this.hungry -= 250
        this.hp += 5
        return
    }
    read(){
        this.fun += 250
        this.sleep += 100
        return
    }
    dance(){
        this.fun +=250
        this.hp += 100
        this.dirty -= 100
        return
    }
}