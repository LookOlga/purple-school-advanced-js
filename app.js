'use strict'

// 1-map

const uniqueseById = (arr) => {
    const IDs = [...new Set(arr.map(item => item.id))]
    return IDs.map(id => arr.find(item => item.id === id))
}

// 2-dice

const MIN = 1
const EXTRA_NUMBER_TO_INCLUDE_MAX = 1
const throwDice = (dice) => {
    const diceTypes = ['D4', 'D6', 'D8', 'D10', 'D12', 'D16', 'D20']
    
    if (!diceTypes.includes(dice)) return `Unsupported diceType: ${dice}`

    const max = Number(dice.replace(/[a-zA-Z]/g, ''))
   

    return Math.round(Math.random() * (max - MIN + EXTRA_NUMBER_TO_INCLUDE_MAX) + MIN)
}

// 3-birthday

const validateAge = (birthday) => {
    const legalAge = 18
    const currentDate = new Date()
    const birthdayDate = new Date(birthday)

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();

    if (currentDate.getMonth() < birthdayDate.getMonth() || 
        (currentDate.getMonth() === birthdayDate.getMonth() && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }

    return age >= legalAge;
}


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

// setTimer()

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

// 7-oop-in-class

class CharacterClass {
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

class OrkClass extends CharacterClass {
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

class ElfClass extends CharacterClass {
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

// 8-solid

class Billing {
    constructor(amount) {
        this.amount = amount
    }

    calculateTotal() {
        return this.amount
    }
}

class FixedBilling extends Billing {
    constructor(amount) {
        super(amount)
    }
}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount)
        this.hours = hours
    }

    calculateTotal() {
        return this.amount * this.hours
    }
}

class ItemBilling extends Billing {
    constructor(amount, itemsCount) {
        super(amount)
        this.itemsCount = itemsCount
    }

    calculateTotal() {
        return this.amount * this.itemsCount
    }
}

// 9-pokemon

const BASE_URL = 'https://pokeapi.co/api/v2/'
const LANGUAGE = 'en'

const checkRequestStatus = (result, message) => {
    if (result.status !== 200) throw new Error(message)
}

const getAbilityDescription = (event) => {
    const result = event.target
    checkRequestStatus(result, 'Error in getAbilityDescription request')
    const response = JSON.parse(result.response) 
    const engDescription = response.effect_entries.find(item => item.language.name === LANGUAGE).effect
    if (!engDescription) return
    console.log(engDescription)
}

const getPokemonAbilityURL = (event) => {
    const result = event.target
    checkRequestStatus(result, 'Error in getPokemonAbilityURL request')
    const response = JSON.parse(result.response)
    const abilityItem = response.abilities && response.abilities.length ? response.abilities[0] : {}
    return abilityItem?.ability?.url
}

const loadPokemonDescription = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `${BASE_URL}pokemon/ditto`)
    xhr.send()
    xhr.addEventListener('load', function(firstEvent) {
    
        const abilityURL = getPokemonAbilityURL(firstEvent)
        if (!abilityURL) return
        xhr.open('GET', abilityURL)
        xhr.send()
        xhr.addEventListener('load', getAbilityDescription)
    })
}

loadPokemonDescription()

// 10-pokemon-promise

const getPokemonData = (url, errorMessage, method = 'GET') => {
    return fetch(url, {
        method
    }).then(response => {
        if(!response.ok) return new Error(`${errorMessage}: ${response.status}`)
        return response.json()
    })
}

getPokemonData(`${BASE_URL}pokemon/ditto`, 'Cannot get pokemon data')
    .then(data => {
        const { url } = data.abilities[0].ability
        return getPokemonData(url, 'Cannot get pokemon description data')
    })
    .then(result => {
        const engDescription = result.effect_entries.find(item => item.language.name === LANGUAGE).effect
        console.log(engDescription)
    }).catch(error => {
        console.warn(error)
    })

// 11-geolocation

const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            if (!position) reject('Geolocation is unknown')
            resolve(position)
        })        
    }) 
}

getCurrentPosition()
    .then(response => {
        const { coords } = response
        console.log(`Latitude: ${coords.latitude}, longitude: ${coords.longitude}`);
    })
    .catch(error => {
        console.warn(error.message)
    })


// 12-promise-race

const getProduct = (id) => {
    return fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .catch(error => new Error(error.message))
}

const race = (promises) => {
    if (!Array.isArray(promises)) return new Promise((resolve, reject) => {
        reject(new Error('Argument promises is not iterable'))
    })
    
    if (!promises.length) return new Promise((resolve, reject) => {
        reject(new Error('Promise list is empty'))
    })

    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            promise.then(resolve, reject);
        }
    })
}

race([
    getProduct(1),
    getProduct(2),
    getProduct(3)
]).then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})


// 13-buttons

const buttonsWrapper = document.querySelector('.buttons__wrapper'),
      buttonsClickCounter = document.querySelector('.buttons__counter')
let counter = Number(buttonsClickCounter.textContent)

const createButtons = (quantity) => {
    for (let i = 0; i < quantity; i++) {
        const button = document.createElement('button')
        button.classList.add('buttons__btn')
        button.textContent = 'Click me'
        buttonsWrapper.append(button)
    }

    return document.querySelectorAll('.buttons__btn')
}

const buttons = createButtons(5)

buttonsWrapper.addEventListener('click', (e) => {
    buttons.forEach(button => {
        button.classList.remove('clicked')
        button.textContent = 'Click me'
    })

    const target = e.target
    if (target.tagName === 'BUTTON' && target.className === 'buttons__btn') {
        target.textContent = 'Clicked!'
        target.classList.add('clicked')
        buttonsClickCounter.textContent = ++counter
    }
})

