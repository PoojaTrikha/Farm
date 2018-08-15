const {Farm} = require('./index')
const {Pig, Horse, Cow, Animal} = require('./animals')
const {Wheat, SugarCane, Crop } = require('./crop')

test ('Animals and crops will be taken into account for calculateIncome', () =>{
    const farm = new Farm()
    farm.addAnimal(new Cow(1000))
    farm.addAnimal(new Horse(1000))
    farm.addAnimal(new Pig(1000))
    farm.addCrop(new SugarCane(100))
    farm.addCrop(new Wheat(100))
    expect(farm.calculateIncome()).toBeCloseTo(20718.37, 0)
})