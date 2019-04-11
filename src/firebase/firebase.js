import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBIql8LvVJugnw3L49odZ8iqxjEwtAHRmI',
  authDomain: 'expensify-34bf4.firebaseapp.com',
  databaseURL: 'https://expensify-34bf4.firebaseio.com',
  projectId: 'expensify-34bf4',
  storageBucket: 'expensify-34bf4.appspot.com',
  messagingSenderId: '813649496204'
};

firebase.initializeApp(config);

firebase
  .database()
  .ref()
  .set({
    name: 'Rogier Verkaik'
  });
