
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