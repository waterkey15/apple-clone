import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyCpsJwjNGljnWIXgAwzolP8gYuZvXkJdyA",
    authDomain: "apple-clone-21f05.firebaseapp.com",
    projectId: "apple-clone-21f05",
    storageBucket: "apple-clone-21f05.appspot.com",
    messagingSenderId: "203145541690",
    appId: "1:203145541690:web:8bab3f700263fbfdb15d03",
    measurementId: "G-T4QQGWBH1X"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  

  export { auth, db };