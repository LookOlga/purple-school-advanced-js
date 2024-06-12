'use strict'

// 7-oop-in-class

class Character {
    constructor({
        race,
        name,
        language
    }) {
        this.race = race
        this.name = name
        this.language = language
    }

    speak() {
        console.log(`Native language: ${this.language}`)
    }
}

class Ork extends Character {
    constructor({
        race,
        name,
        language,
        weapon
    }) {
        super({
            race,
            name,
            language
        })
        this.weapon = weapon
    }

    beat() {
        console.log(`Beat with ${this.weapon}`)
    }

    speak() {
        console.log(`${this.name} speaks in ${this.language}`)
    }
}

class Elf extends Character {
    constructor({
        race,
        name,
        language,
        spellType
    }) {
        super({
            race,
            name,
            language
        })
        this.spellType = spellType
    }

    spell() {
        console.log(`Spell ${this.spellType}`)
    }

    speak(secondLanguage = null) {
        console.log(`${this.name} speaks in ${this.language} ${secondLanguage ? 'and ' + secondLanguage : ''}`)
    }
}
