// index.js
class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
    this.animals = []
  }
  addAnimal(animal) {
    this.animals.push(animal)
  }
  addCrop(crop) {
    this.crops.push(crop)
  }
 /* calculateIncome() {
    return this.crops.map(crop => crop.getYieldInEuros())
  } */
 
  AnimalIncome() {
    return this.animals
      .map(animal => animal.getValueInEuros())
        .reduce((c, d) => c + d, 0)
  }

 
  calculateIncome() {
    return this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((a, b) => a + b, this.AnimalIncome())
  }

}

module.exports = { Farm }
//const {Crop } = require('./crop')
