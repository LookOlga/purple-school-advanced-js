
'use strict'

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