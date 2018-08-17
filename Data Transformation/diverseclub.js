// 1.) Getting the nationalies
// { name: 'Book club', members: [9, 3, 6, 2] } should become ['NL', 'US', 'DE', 'CA']
// MAP members.map(member ...???)

//  1a.) 9 (member) should become {id: 9, name: 'Nathalie', nationality: 'NL'},
// FIND people.find(person ...?) // member should match person.id

//  1b.) 4 people 
// 
// {id: 2, name: 'Adam', nationality: 'CA'},
// {id: 3, name: 'Larry', nationality: 'US'},
// {id: 6, name: 'Emily', nationality: 'DE'},
// {id: 9, name: 'Nathalie', nationality: 'NL'}

// should become:

// ['NL', 'US', 'DE', 'CA']

// MAP previousResult.map(person ...?)

// 2.) Counting the diversity ( book club is a bad example )
// ['NL','NL', 'US', 'DE', 'CA'] should become 4
// FILTER / REDUCE nationalities.filter(nationality ...?)

// 3.) Return the intermediate result:
// { name: 'Book club', members: [9, 3, 6, 2], diversity: 4 }

// 4.) Do this for all clubs
// 5.) Compare club's diversity ratings




const people = [
    {id: 1, name: 'James', nationality: 'GB'},
    {id: 2, name: 'Adam', nationality: 'CA'},
    {id: 3, name: 'Larry', nationality: 'US'},
    {id: 4, name: 'Fred', nationality: 'NL'},
    {id: 5, name: 'Anna', nationality: 'NL'},
    {id: 6, name: 'Emily', nationality: 'DE'},
    {id: 7, name: 'Lenny', nationality: 'US'},
    {id: 8, name: 'Cara', nationality: 'NL'},
    {id: 9, name: 'Nathalie', nationality: 'NL'},
]

const clubs = [
    {name: 'Book Club', members: [9,3,6,2]},
    {name: 'Auto Club', members: [1,2,3]},
    {name: 'Country Club', members: [7,5,8]},
    {name: 'Food Club', members: [5,1,6,7]},
    {name: 'Yoga Club', members: [1,4,5,3,7]},
    {name: 'Garage Band', members: [1,3,8,9]},
    {name: 'Pool Club', members: [6,4,5,8,9]},
]



//const peopleMap = people.map(national => national.nationality) 
//console.log(peopleMap);

/*const poolClub = clubs[6].members.
    map(memberId =>{
     const foundPerson = people.find( person =>  memberId === person.id)
     return foundPerson;
 })
.map(person =>person.nationality)
/*.reduce((accumulator, currentValue)=>{
    console.log(accumulator,currentValue)
    if(accumulator.includes(currentValue)){
    accumulator.push(currentValue)
    }
    return accumulator
},[])
.length */

//console.log(new Set(poolClub.size))

const getMemberships = (person) =>{
    //get the id of the person

    const personId = person.id
    const memberships =clubs.filter(club => {
        console.log(club)

        if(club.members.includes(personId)){
            return true
        } else{
            return false
        }
    })
    .map(club =>{
        return club.name
    })
    return memberships

}

console.log(getMemberships(people[0]))

console.log(people.map(person =>getMemberships(person)))

const getMemberships = (person) =>{
    return clubs
    .filter(club =>club.members.includes(person.id))
    .map(club => club.name)
}