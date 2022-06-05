import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAafVyX8D4tB23fxbjhgPwK9FgdCWxDQDk",
//     authDomain: "sample-b61b9.firebaseapp.com",
//     projectId: "sample-b61b9",
//     storageBucket: "sample-b61b9.appspot.com",
//     messagingSenderId: "828086644952",
//     appId: "1:828086644952:web:68c73373d08bec274127ad",
//     measurementId: "G-1FWHDB0KWZ"
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyD4Ih6Q2_vvX0SC1dzxs4kYvJA78YteTZM",
    authDomain: "olxproject-c8e12.firebaseapp.com",
    projectId: "olxproject-c8e12",
    storageBucket: "olxproject-c8e12.appspot.com",
    messagingSenderId: "288798864612",
    appId: "1:288798864612:web:dde772b512eb02f02de8f1",
    measurementId: "G-MH6LVN15N1"
  };

//   const firebaseConfig = {
//     apiKey: "AIzaSyBmTPmMUOjtyg5Jyo7q2Mc0oyVP2V1SGK4",
//     authDomain: "olx-clone-d54b6.firebaseapp.com",
//     projectId: "olx-clone-d54b6",
//     storageBucket: "olx-clone-d54b6.appspot.com",
//     messagingSenderId: "705914238498",
//     appId: "1:705914238498:web:6ba2171770f4184423fc7b",
//     measurementId: "G-13H899K861"
// };

  export default firebase.initializeApp(firebaseConfig)