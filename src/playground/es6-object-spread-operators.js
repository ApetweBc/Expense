
const user = {
    name : 'Jen',
    age : 24
};

console.log({
    ...user,
    location: 'Vancouver',
    age: 27 
});