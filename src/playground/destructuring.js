//
// Object destruction
//

// const person = {
//     name: 'Daniel',
//     age: 23,
//     location: {
//         city: 'CDMX',
//         temp: 72
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// console.log(`${city} is ${temperature}.`);

//
//Array destruction
//

const address = ['308 Nardos', 'Tula', 'Hidalgo', '42836'];
const [, city, state = 'New York', ] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffe (ice)', '$2.00', '$2.50', '$2.75']
const [drink, , mediumPrice] = item;
console.log(`A ${drink} costs ${mediumPrice}`);