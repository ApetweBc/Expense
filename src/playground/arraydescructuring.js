console.log('running');



// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//         company: 'Penguine'
//     }
// };


// const {company: publisherName = "Self Publisher"} = book.publisher;
// console.log(`${publisherName}`);

// // Normal array 
// const address = ['1299 south wales street', 'Vancouver', 'BC'];
// console.log(`You are in ${address[0]} ${address[1]}, ${address[2]}`);


// descructing  // unlike object the values in the bracket does not exist. It is using the position to figure the value.
// street as 0, city as 1
const address = ['1299 south wales street', 'Vancouver', 'BC'];
// // const [street, city, zip] = address;
// console.log(`You are in ${street} ${city} ${zip}`);

// The example below. You can elimante any posity you want by removing the instances and seperating it by comma.
// The address is removed from the array by removing the instances/
const [, city, zip] = address;
console.log(`You are in  ${city} ${zip}`);

// setting up default for array descructuring 

const item = ['Coffee', '$2.00', '$2.50', '2.75'];
const [coffee, , medium ='195', large] = item;
console.log(`A medium ${coffee} cost ${medium}`);