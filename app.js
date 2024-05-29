'use strict'

// 1-map

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

// 2-dice

const throwDice = (dice) => {
    const diceTypes = ['D4', 'D6', 'D8', 'D10', 'D12', 'D16', 'D20']
    
    if(!diceTypes.includes(dice)) return `Unsupported diceType: ${dice}`

    const max = Number(dice.replace(/[a-zA-Z]/g, ''))
    const min = 1

    return Math.round(Math.random() * (max - min + 1) + min)
}

// 3-birthday

const validateAge = (birthday) => {
    const currentYear = new Date().getFullYear()
    const birthdayYear = new Date(birthday).getFullYear()

    console.log(currentYear)
    console.log(birthdayYear)
}