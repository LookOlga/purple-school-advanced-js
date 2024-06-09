
'use strict'

const arr = [
    {id: 8, name: 'Вася'},
    {id: 9, name: 'Света'},
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Антон'},
    {id: 1, name: 'Вася'},
    {id: 9, name: 'Света'},
    {id: 5, name: 'Ваня'},
]

const IDs = [...new Set(arr.map(item => item.id))]
const res = IDs.map(id => arr.find(item => item.id === id))

// 4-timer

const setTimer = () => {
    const timerContainer = document.querySelector('.timer-content')
    const endDate = new Date('12-31-2024')
    const endDateMonth = endDate.getMonth() + 1
   
    const intervalId = setInterval(() => {
    const today = new Date();
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const daysLeft = lastDayOfMonth.getDate() - currentDate.getDate();
        const currentDateParts = new Intl.DateTimeFormat('RU-ru', {
            month: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).formatToParts(today.getTime())


        const formattedCurrentParts = currentDateParts.reduce((acc, item) => {
            acc[item.type] = item.value;
            return acc;
        }, {})

        timerContainer.textContent = `${endDateMonth - formattedCurrentParts.month} months 
        ${daysLeft} days
        ${24 - formattedCurrentParts.hour - 1} hours
        ${60 - formattedCurrentParts.minute - 1} minutes
        ${60 - formattedCurrentParts.second} seconds`
    }, 1000)

    
   if(endDate.getTime() === new Date().getTime) {
    clearInterval(intervalId)
   }
   
}

setTimer()

// 5-oop

const Personage = function ({race, name, language}) {
    this.race = race
    this.name = name
    this.language = language
}

Personage.prototype.speak = function() {
    console.log(`${this.name} speaks in ${this.language}`)
}

const Ork = function({race, name, language, weapon}) {
    Personage.call(this, {race, name, language});
    this.weapon = weapon
}

Ork.prototype = Object.create(Personage.prototype);

Ork.prototype.beat = function() {
    console.log(`Beat with ${this.weapon}`)
}

const Elf = function({race, name, language, spellType}) {
    Personage.call(this, {race, name, language});
    this.spellType = spellType
}

Elf.prototype.spell = function() {
    console.log(`Spell ${this.spellType}`)
}

const ork = new Ork({race: 'Mongolian', name: 'Bork', language: 'English', weapon: 'knife'})
const elf = new Elf({race: 'China', name: 'Garry', language: 'Chinese', spellType: 'charming'})


