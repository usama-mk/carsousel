import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCW8KRQdx2ZLPW3wmNHUIpXG1QgfGWfCyI",
    authDomain: "carousel-client.firebaseapp.com",
    databaseURL: "https://carousel-client.firebaseio.com",
    projectId: "carousel-client",
    storageBucket: "carousel-client.appspot.com",
    messagingSenderId: "380997395852",
    appId: "1:380997395852:web:ac88383e5d8199e27be2a9",
    measurementId: "G-T6CD1GENRX"
  };
  // Initialize Firebase
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const storage= firebase.storage();

  export{storage,db, firebase as default};