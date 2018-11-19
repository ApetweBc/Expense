import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBOIHOeuZRXencz5ZAk9vr71g7CHLJlXvE",
  authDomain: "expensalert.firebaseapp.com",
  databaseURL: "https://expensalert.firebaseio.com",
  projectId: "expensalert",
  storageBucket: "expensalert.appspot.com",
  messagingSenderId: "1074240621331"
};

firebase.initializeApp(config);
const database = firebase.database();
//   database.ref().set({
//   name: 'Francis Antobre',
//   age: '34',
//   stress: 4,
//   job: {
//    title: "software developer",
//    company: "Amazon"
// },
//   location:{
//     city: "Seattle",
//     country: "Canada"
//   }
// }).then(()=>{
//   console.log('data is saved');
// }). catch((error)=>{
//   console.log('This is an error', error);
// });


// Using push method 

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: ' Syngular'
// });

// This is manual setting a id. 
// const firebaseNotes = {
//   notes: {
//     apsgss:{
//       title: 'first note',
//       body: "This is my note"
//     },
//     pbhsgg:{
//       title: 'Another',
//       body: "another note"
//     }

//   }
// }
// const notes = [{
//   id: 12,
//   title: 'first note',
//   body: "This is my note"
// },{
//   id: 673,
//   title: 'Another',
//   body: "another note"
// }];

// database.ref('notes').set({
//   notes
// });




// Fetching data(Read)
// database.ref().once('value')
// .then((snapshot)=>{
//  const val  = snapshot.val();
// console.log(val.age);
// }).catch((error)=>{
//   console.log('no data coming', error);
// })

// Another way to fetch data continuously. It updates when ever the database changes. it subscribes. 
// database.ref().on('value',(snapshot) =>{
//    console.log(snapshot.val());
// }, (error) =>{
//   console.log('Error', error)
// });

// setTimeout(()=>{
//     database.ref('age').set(29);
// }, 3000)
// setTimeout(()=>{
//   // To unsubscribe. It affects anything below
//   database.ref().off();
// }, 7000)
// setTimeout(()=>{
//   database.ref('age').set(18);
// }, 10500)

// // Update the database/You can also add something brand new

// database.ref().update({
// name: "Kwaku",
// age: 45,
// job:'Software developer',
// single: null
// });

// // Another way to update nested key value. Updating nesting objects is not gonna work with like this syntax location/city: Boston. Instead you need to wrapp them in quotes as shown below. 
// database.ref().update({
//   job: 'Manager',
//   'location/city': "Boston"
// });

// Another method using set to delete data

// database.ref('single').set(null);

// Remove database targeting a key

// const databases = database.ref('single');
// databases.remove()
// .then(()=>{
//   console.log('Single is  is remove');
// }).catch((error)=>{
//   console.log('It cant be removed', error);
// })

// Child_remove
database.ref('expenses').on('child_removed', (snapshot)=> {
  console.log(snapshot.key, snapshot.val());
});


// child_changed
database.ref('expenses').on('child_changed', (snapshot)=> {
console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot)=> {
console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
// .once('value')
// .then((snapshot)=>{
//    const expenses = [];
//    snapshot.forEach((childSnapshot)=>{
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       });
//    });
//    console.log(expenses);
// });

// // supscription
// database.ref('expenses')
// .on('value', (snapshot)=>{
//    const expenses = [];
//    snapshot.forEach((childSnapshot)=>{
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       });
//    });
//    console.log(expenses);
// });


// database.ref('expenses').push({
//   description: "Rent",
//   note: "",
//   amount: 199833,
//   creatAT: Date()
// });



// // database.ref().set('This is my data');
// database.ref('age').set({
//   age: 27
// }).then(()=>{
//   console.log('suceeded');
// }).catch((error)=>{
//   console.log('Not Succeeded', error)
// })

// child root
// database.ref('location/city')
// .set('Burnaby')
// .then(()=>{
//   console.log(' City suceeded');
// }).catch((error)=>{
//   console.log(' City Not Succeeded', error)
// });

// database.ref('attributes').set({
//   height: 6.3,
//   weight: 220
// }).then(()=>{
//   console.log('Attributed suceeded');
// }).catch((error)=>{
//   console.log('Attributed Not Succeeded', error)
// })


// Code challenge 1

// database.ref().update({
//   stress:  9,
//   'job/company': "Google",
//   'location/city': "New York"
// }).then(()=>{
//   console.log("new data set");
// }).catch((error)=>{
//   console.log('something is wrong', error);
// });

// Code challenge 2 subscription

// database.ref().on('value', (snapshot) =>{
// const val = snapshot.val();
// console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })


// code challenge 3 

database.ref('expenses').push({
  description: "Rent",
  note: "",
  amount: 199833,
  creatAT: Date()
});



