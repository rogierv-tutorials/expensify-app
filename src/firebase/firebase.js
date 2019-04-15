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

database.ref().set({
  name: 'Rogier Verkaik',
  age: 35,
  isSingle: false,
  location: {
    city: 'Rotterdam',
    country: 'The Netherlands'
  }
});

// database.ref().set('This is my data.');

database.ref('age').set(37);
database.ref('location/city').set('Amsterdam');
database.ref('attributes').set({ height: 185, weight: 85 });
