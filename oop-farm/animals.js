
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
        this.price = 4
        
    }
    getWeightInKg() {
    
        return Math.min(this.Age * 2.3,700)

    }
}

class Cow extends Animal {
    constructor(Age, price) {
        super(Age)
        this.price = 5
        
    }

    getWeightInKg() {

        return Math.min(this.Age * 1.5, 1200)
    }
}

class Horse extends Animal {
    constructor(Age, price) {
        super(Age)
        this.price = 10
        
    }

    getWeightInKg() {
     
        return Math.min(this.Age * 1.7,1000)
    }
}





module.exports = { Animal, Pig, Horse, Cow}