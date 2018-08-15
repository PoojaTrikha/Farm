// crops.js

class Crop {
    constructor(acres) {
        this.acres = acres

    }
    getYieldInEuros() {
        return this.getYieldInKg() * this.price
    }

    getCosts(){
        return this.acres * this.cost

    }
}

class Wheat extends Crop {
    constructor(acres, price,cost) {
        super(acres)
        this.price = 1.5
        this.cost = 340
    }

    getYieldInKg() {
        return Math.pow(this.acres * 1.5, 1.3)
    }
}

class SugarCane extends Crop {
    constructor(acres, price,cost) {
        super(acres)
        this.price = 2
        this.cost = 166
    }

    getYieldInKg() {
        return Math.pow(this.acres * 2.6, 1.1)
    }

}


module.exports = { Wheat, Crop, SugarCane }
