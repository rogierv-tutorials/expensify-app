// const person = {
//   name: 'Rogier',
//   age: 35,
//   location: {
//     city: 'Rotterdam',
//     temp: 15
//   }
// };

// const { name: firstName = 'Anonymous', age, location } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = location;

// if (city && temperature) {
//   console.log(`It's ${temperature} is ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia'];
const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , price] = item;

console.log(`A medium ${itemName} costs ${price}`);
