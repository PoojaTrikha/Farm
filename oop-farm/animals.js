
class Animal {
    constructor(Age) {
        this.Age = Age
    }

    getValueInEuros(){
        return this.getWeightInKg() * this.price
    }

}

class Pig extends Animal {
    constructor(Age, price) {
        super(Age)
        this.price = 1.5
        
    }
    getWeightInKg() {
    
        return this.Age * 2.3

    }
}

class Cow extends Animal {
    constructor(Age, price) {
        super(Age)
        this.price = 4
        
    }

    getWeightInKg() {

        return this.Age * 1.5
    }
}

class Horse extends Animal {
    constructor(Age, price) {
        super(Age)
        this.price = 10
        
    }

    getWeightInKg() {
     
        return this.Age * 1.7
    }
}





module.exports = { Animal, Pig, Horse, Cow}