import Tamagotchi from './Tamagotchi.js'


console.log('Game started!')

console.log('Creating your tamagotchi...')
const myTamagotchi = new Tamagotchi();

/* tamagotchi status */
let health = document.getElementById('health').innerHTML = myTamagotchi.health;
let fun = document.getElementById('fun').innerHTML = myTamagotchi.fun;
let hungry = document.getElementById('hungry').innerHTML = myTamagotchi.hungry;
let bath = document.getElementById('bath').innerHTML = myTamagotchi.dirty;
let poop = document.getElementById('poop').innerHTML = myTamagotchi.poopNeed;
let sleep = document.getElementById('sleep').innerHTML = myTamagotchi.sleep;

console.log('Congratulations! Your tamagotchi is born:')
console.log(myTamagotchi)