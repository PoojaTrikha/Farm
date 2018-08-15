const {Pig, Horse, Cow, Animal} = require('./animals')

test('Pig of 0 days calculates proper weight', () => {
  const pig = new Pig(0)
  expect(pig.getWeightInKg(20)).toBe(0)
})

test('Pig of 10 days calculates proper weight', () => {
  const pig = new Pig(10)
  expect(pig.getWeightInKg(10)).toBe(23)
})

test('Cow of 0 days calculates proper weight', () => {
  const cow = new Cow(0)
  expect(cow.getWeightInKg(0)).toBe(0)
})

test('Cow of 13 days calculates proper weight', () => {
  const cow = new Cow(13)
  expect(cow.getWeightInKg(13)).toBe(19.5)
})

test('Horse of 0 days calculates proper weight', () => {
  const horse = new Horse(0)
  expect(horse.getWeightInKg(12)).toBe(0)
})

test('Horse of 33 days calculates proper weight', () => {
  const horse = new Horse(33)
  expect(horse.getWeightInKg(33)).toBe(56.1)
})