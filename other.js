/* MAP Method 
const people = [
    {
        name: 'Bob',
        age: 20,
        position: 'Developer',
    },
    {
        name: 'Anna',
        age: 25,
        position: 'Designer',
    },
    {
        name: 'Susy',
        age: 30,
        position: 'The Boss',  
    },
];

// Way 1
const ages = people.map((person) => {
   console.log(person);
  return person.age
});
console.log(ages);

// Way 2
const getAges = (person) => person.age;
const ages = people.map(getAges);
console.log(ages);


//Way 3
const newPeople = people.map((item) => {
    return{
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 20,
    };
});
console.log(newPeople);

// Displaying Result

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');
result.innerHTML =  names;

*/

// filter and find
const people = [
    {name:  'bob', age: 20, position: 'developer'},
    {name: 'peter',age: 25, position: 'designer'},
    {name: 'susy',age: 30, position: 'the boss'},
    {name: 'anna',age: 35, position: 'intern'},
];

//filter
const youngPeople = people.filter((person) => {
//if else statement to print the result
    if(person.age < 30)
    {
        return person;
    }
})



