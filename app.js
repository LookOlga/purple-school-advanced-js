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