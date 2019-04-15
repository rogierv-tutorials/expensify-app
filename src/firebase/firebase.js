import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBIql8LvVJugnw3L49odZ8iqxjEwtAHRmI',
  authDomain: 'expensify-34bf4.firebaseapp.com',
  databaseURL: 'https://expensify-34bf4.firebaseio.com',
  projectId: 'expensify-34bf4',
  storageBucket: 'expensify-34bf4.appspot.com',
  messagingSenderId: '813649496204'
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').on('child_removed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Gas bill',
//   note: '',
//   amount: 12300,
//   createdAt: 5000
// });

// database.ref('notes/-LcVT5B0nSYyfEl_TGLF').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Firebase'
// });

// const notes = [
//   {
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
//   },
//   {
//     id: '7641as',
//     title: 'Second note',
//     body: 'This is my note'
//   }
// ];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     const { name, job } = snapshot.val();
//     console.log(`${name} is a ${job.title} at ${job.company}`);
//   },
//   e => console.log('Error with data fetching', e)
// );

// database.ref().update({ name: 'Rogier' });
// database.ref().update({ 'job/company': 'Amazon' });

// database
//   .ref()
//   .set({
//     name: 'Rogier Verkaik',
//     age: 35,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Rotterdam',
//       country: 'The Netherlands'
//     }
//   })
//   .then(() => console.log('Data is saved'))
//   .catch(error => console.error('This failed.', error));

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => console.log('isSingle removed'))
//   .catch(e => console.log(e));
