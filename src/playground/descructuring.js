console.log('running');

const person = {
    name:'Francis',
    age:  25,
    location :{
        city: 'Vancouver',
        temp: 63
    }
};
// Destruction ES6
const {name, age} = person;
console.log(`${name} is ${age}`);

// Deconstruction ES6 easy code
const {city, temp} = person.location;
console.log(`The weather is ${temp} in ${city}`);
 // Deconstruction ES6 easy code   
// // Another option is you can rename the object, You just need to use the new name.
// City is now reference as home while temp is now cold
// city: home
// temp: cold
const {city: home, temp:cold} = person.location;
console.log(`The weather is ${cold} in ${home}`);

// console.log(`The weather is ${person.location.temp} in ${person.location.city}`);

// Default value. You can set an object as a default value;



const ClubDisco = {
    // By removing the object value, it will resoved to the default value defined below
    // manager:'James',
    ethnicity:  45,
    location :{
       town: 'Vancouver',
        capacity: 6400
    }
};

const {manager = "defaultName", ethnicity} = ClubDisco;
const {town, capacity} = ClubDisco.location;
if (town && capacity){
    console.log(`${manager} is ${ethnicity}. He manages clubdisco capacity of ${capacity} in ${town}`); 
};


// Code Challenge

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        company: 'Penguine'
    }
};


const {company: publisherName = "Self Publisher"} = book.publisher;
console.log(`${publisherName}`);


// ES5 code
// // Old syntax
// // const name = person.name;
// // const age = person.age;
// // console.log(`${person.name} is ${person.age}`);
