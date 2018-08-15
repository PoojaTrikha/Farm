// index.spec.js
const {Farm} = require('./index')
const {Wheat, SugarCane, Crop } = require('./crop')
const {Pig, Horse, Cow, Animal} = require('./animals')


test('We can add a crop to our farm', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(100))
})

test('The income of an empty farm is 0', () => {
  const farm = new Farm('TEST_NAME')
  expect(farm.calculateIncome()).toBe(0)
})

test('The income of a 100 Wheat + 100 Sugarcane farm is X', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(100))
  farm.addCrop(new SugarCane(100))
  expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1)
})

test('Animals can be added to the farm', () => {
  const farm = new Farm()
  farm.addAnimal(new Cow(100))
})

test('Animals will be taken into account for calculateIncome', () => {
  const farm = new Farm()
  farm.addAnimal(new Cow(100))
  expect(farm.calculateIncome()).not.toBe(0)
})
test ('Animals and crops will be taken into account for calculateIncome', () =>{
  const farm = new Farm()
  farm.addAnimal(new Cow(1000))
  farm.addAnimal(new Horse(1000))
  farm.addAnimal(new Pig(1000))
  farm.addCrop(new SugarCane(100))
  farm.addCrop(new Wheat(100))
  expect(farm.calculateIncome()).toBeCloseTo(20718.37, 0)
})

test('Print report', () => {
  const farm = new Farm("Pooja's Farm")
  farm.addAnimal(new Cow(1000))
  farm.addAnimal(new Horse(1000))
  farm.addAnimal(new Pig(1000))
  farm.addCrop(new Wheat(100))
  farm.addCrop(new SugarCane(100))
  console.log(
      `---------------------------------
      - Farm: ${farm.name} 
      - No of animals: ${farm.animals.length} 
      - No of crops: ${farm.crops.length} 
      - Total income: ${Math.floor(farm.calculateIncome())}   
      ----------------------------------`)
})