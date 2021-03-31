import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgx3ruf4RKIZLz4vpkz3y6L-5-ojEeaGw",
    authDomain: "clone-68a7a.firebaseapp.com",
    databaseURL: "https://clone-68a7a.firebaseio.com",
    projectId: "clone-68a7a",
    storageBucket: "clone-68a7a.appspot.com",
    messagingSenderId: "13648975829",
    appId: "1:13648975829:web:b4df87ebca89cc07200f5c",
    measurementId: "G-6BVGJL953V"
  };


  const firebaseapp =   firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();


  export {db,auth};