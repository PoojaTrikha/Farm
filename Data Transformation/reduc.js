
const people = [
    {name: 'Don', age: 23},
    {name: 'Adam', age: 33},
    {name: 'Steve', age: 14},
    {name: 'Rachel', age: 56},
    {name: 'Maud', age: 46},
    {name: 'Hermien', age: 28}
]

const oldestSoFar = (oldestPerson, currentPerson) =>{

console.log(oldestPerson, currentPerson)
if(oldestPerson.age > currentPerson.age){
    return oldestPerson
}
 return currentPerson
}




const numbers = [0, 1, 4, 5, 6, 9]

/*const groups ={
    even :[],
    uneven :[]
    
} */

const groupEvenUneven = (accumulator, currentvalue) => {

const copy = {even : [...accumulator.even], uneven :[...accumulator]}

if(currentvalue%2 === 0){
    
copy.even.push(currentvalue)

} else{
copy.uneven.push(currentvalue)

}
return copy
}

module.exports = {oldestSoFar,groupEvenUneven } 


const cars = [
    {brand: 'Toyota', model: 'Aygo'},
    {brand: 'Skoda', model: 'Octavia'},
    {brand: 'Volkswagen', model: 'Passat'},
    {brand: 'Mercedes', model: 'CLS'},
    {brand: 'Seat', model: 'Ibiza'}
]

// Returns the first car object whose brand matches the brand parameter.
function slowSearch(brand) {
    return cars.find(car => car.brand === brand)
}

const carIndex = {
    Toyota : {}
}