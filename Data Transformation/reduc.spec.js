const {oldestSoFar, groupEvenUneven } = require('./reduc')

test('oldestSoFar determines the oldest person in a collection', () => {
    const people = [
      {name: 'Don', age: 23},
      {name: 'Adam', age: 33},
      {name: 'Steve', age: 14},
      {name: 'Rachel', age: 56},
      {name: 'Maud', age: 46},
      {name: 'Hermien', age: 28}
    ]

    const oldestPerson = people.reduce(oldestSoFar)

    expect(oldestPerson).toStrictEqual({name: 'Rachel', age: 56})
  })