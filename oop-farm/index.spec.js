// index.spec.js
const {Farm} = require('./index')
const {Wheat, SugarCane, Crop } = require('./crop')


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