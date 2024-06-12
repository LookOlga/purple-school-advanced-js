
'use strict'

// 5-oop

const Character = function ({race, name, language}) {
    this.race = race
    this.name = name
    this.language = language
}

Character.prototype.speak = function() {
    console.log(`${this.name} speaks in ${this.language}`)
}

const addCharacterAsPrototype = () => Object.create(Character.prototype)

const Ork = function({weapon, ...properties}) {
    Character.call(this, properties)   
    this.weapon = weapon
}

Ork.prototype = addCharacterAsPrototype()
Ork.prototype.constructor = Ork

Ork.prototype.beat = function() {
    console.log(`Beat with ${this.weapon}`)
}

const Elf = function(spellType, ...properties) {
    Character.call(this, properties)    
    this.spellType = spellType
}

Elf.prototype = addCharacterAsPrototype()
Elf.prototype.constructor = Elf

Elf.prototype.spell = function() {
    console.log(`Spell ${this.spellType}`)
}

