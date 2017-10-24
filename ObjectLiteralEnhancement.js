var name = "Tallac"
var elevation = 9738

var funHike = {name, elevation}
console.log(funHike)

var print = function() {
    console.log(`Mt. ${this.name} is ${this.elevation} feet tall`)
}

var bestHike = {name, elevation, print}
bestHike.print()

var sound = "yo"

const skier = {
    name,
    sound,
    powderYell() {
        let yell = this.sound.toUpperCase()
        console.log(`${yell} ${yell} ${yell}!!!`)
    },
    speed(mph) {
        this.speed = mph
        console.log('speed:', mph)
    }
}
skier.powderYell()
skier.speed(95)