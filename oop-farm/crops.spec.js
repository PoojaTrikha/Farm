// crops.spec.js
const {Wheat, SugarCane, Crop } = require('./crop')

test('The Wheat class can calculate a yield', () => {
  const wheat = new Wheat(100)
  expect(wheat.getYieldInKg()).toBeDefined()
})

test('The Wheat class calculates the proper yield', () => {
  const wheat = new Wheat(100)
  expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2)
})


test('The SugarCane class can calculate a yield', () => {
    const sugarcane = new SugarCane(100)
    expect(sugarcane.getYieldInKg()).toBeDefined()
  })
  
  test('The sugarcane class calculates the proper yield', () => {
    const sugarcane = new SugarCane(100)
    expect(sugarcane.getYieldInKg()).toBeCloseTo(453.4, 0)
  })

  test('A crop can store its area size', () => {
    const crop = new Crop(12345)
    expect(crop.acres).toBe(12345)
  })