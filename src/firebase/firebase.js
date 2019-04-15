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

database
  .ref()
  .set({
    name: 'Rogier Verkaik',
    age: 35,
    stressLevel: 6,
    job: {
      title: 'Software Developer',
      company: 'Google'
    },
    location: {
      city: 'Rotterdam',
      country: 'The Netherlands'
    }
  })
  .then(() => console.log('Data is saved'))
  .catch(error => console.error('This failed.', error));

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => console.log('isSingle removed'))
//   .catch(e => console.log(e));
