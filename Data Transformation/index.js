var data = [
    {
        id: 1,
        name: 'John',
        age: 42
    },
    {
        id: 2,
        name: 'kees',
        age: 67

    },
    {
        id: 3,
        name: 'Jan',
        age: 86
    },
    {
        id: 4,
        name: 'Joop',
        age: 21
    },
    {
        id: 5,
        name: 'Joep',
        age: 22
    },
    {
        id: 6,
        name: 'Klass',
        age: 56
    }

];

//Imperative

/*var listdata = function () {
     for (var i = 0; i < data.length; i++) {
       //  console.log(i, 'index')
     console.log( `Id: ${data[i].id} Name: ${data[i].Name} age: ${data[i].age}`);
     }
  };
  
listdata(); 

//Declarative for Mapping the data

const mapdata = data.map( person => ({ids:person.id, Name:person.Name, age:person.age}))
console.log(mapdata) */

//Declarative for Filter the data

const findNamesByIds = (users, ids) => {

   const newUsers = users.filter((user) =>{
    return ids.includes(user.id) && user.age > 21   
    }).map(user => user.name)
    console.log(newUsers)
    return newUsers

    
    
    //const mapdata = data.filter(person => person.age >= 21)
   //return mapdata
}

/*const findNamesByIds = (users, ids) => {

 return users
 .filter(user =>ids.includes(user.id)) 
 .filter(user => user.age >21)
 .map(user =>user.name)  

} */



module.exports = { findNamesByIds } 


