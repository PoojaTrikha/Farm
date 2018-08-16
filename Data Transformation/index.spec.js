const { findNamesByIds } = require('./index')

describe('Names by Ids', () => {
  test('findNamesByIds should take an array of numbers and an array of users and return the corresponding names', () => {
    const users = [
      { id: 1, name: 'Joop', age: 42 },
      { id: 2, name: 'Klaas', age: 18 },
      { id: 4, name: 'Miep', age: 20 },
      { id: 5, name: 'Janneke', age: 75 },
    ]

    const ids = [2, 4, 5]
    const names = findNamesByIds(users, ids)
    expect(names.length).toBe(1)
    expect(names.includes('Klaas')).toBe(false)
    expect(names.includes('Miep')).toBe(false)
    expect(names.includes('Janneke')).toBe(true)
  })
})