
'use strict'

// 5-oop

const Personage = function ({race, name, language}) {
    this.race = race
    this.name = name
    this.language = language
}

Personage.prototype.speak = function() {
    console.log(`${this.name} speaks in ${this.language}`)
}

const addPersonageAsPrototype = () => Object.create(Personage.prototype)

const Ork = function({weapon, ...properties}) {
    Personage.call(this, properties)   
    this.weapon = weapon
}

Ork.prototype = addPersonageAsPrototype()

Ork.prototype.beat = function() {
    console.log(`Beat with ${this.weapon}`)
}

const Elf = function(spellType, ...properties) {
    Personage.call(this, properties)    
    this.spellType = spellType
}

Elf.prototype = addPersonageAsPrototype()

Elf.prototype.spell = function() {
    console.log(`Spell ${this.spellType}`)
}

