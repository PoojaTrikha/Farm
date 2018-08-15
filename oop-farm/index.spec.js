// index.spec.js
const {Farm} = require('./index')

test('A Farm can have a name', () => {
  const farm = new Farm('TEST_NAME')
  expect(farm.name).toBe('TEST_NAME')
})