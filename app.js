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
