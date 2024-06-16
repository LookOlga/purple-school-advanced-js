'use strict'
// 4 - timer

const setTimer = () => {
    const timerContainer = document.querySelector('.timer-content')
    const endDate = new Date(new Date().getFullYear(), 11, 31, 23, 59);
    const endDateMonth = endDate.getMonth() + 1
    const timeShift = 1
    const locale = window.navigator.language

    const intervalId = setInterval(() => {
        const today = new Date();
        const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const daysLeft = lastDayOfMonth.getDate() - currentDate.getDate();

        const currentDateParts = new Intl.DateTimeFormat(locale, {
            month: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).formatToParts(today.getTime())


        const formattedCurrentDateParts = currentDateParts.reduce((acc, item) => {
            acc[item.type] = item.value;
            return acc;
        }, {})

        timerContainer.textContent = `${endDateMonth - formattedCurrentDateParts.month} months 
        ${daysLeft} days
        ${24 - formattedCurrentDateParts.hour - timeShift} hours
        ${60 - formattedCurrentDateParts.minute - timeShift} minutes
        ${60 - formattedCurrentDateParts.second} seconds`
    }, 1000)


    if (new Date().getTime >= endDate.getTime()) {
        clearInterval(intervalId)
    }
}

setTimer()

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

// 6-class

class Car {
    #run
    #model
    #brand

    constructor({run, model, brand}) {
        this.#run = run
        this.#model = model
        this.#brand = brand
    }

    get run() {
        return this.#run
    }

    set run(value) {
        this.#run = value
    }

    info() {
        console.log(`Brand: ${this.#brand}, Model: ${this.#model}, Run: ${this.#run}`)
    }
}

