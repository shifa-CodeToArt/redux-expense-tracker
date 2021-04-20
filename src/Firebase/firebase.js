// This import loads the firebase namespace.
import firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAYZIqWsDGDP2uQq1_OfrlRTQMHMbOX55E",
  authDomain: "expensify-76972.firebaseapp.com",
  projectId: "expensify-76972",
  storageBucket: "expensify-76972.appspot.com",
  messagingSenderId: "134531568852",
  appId: "1:134531568852:web:bc18f5a84b7b690a3c1741",
  measurementId: "G-0NVND7LXBB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider =new firebase.auth.GoogleAuthProvider();
// export firebase and database
export {firebase,googleAuthProvider, database as default}



// to manage arrays in firebase

//add data
// firebase.database().ref('Expenses').push({
// Description:"Gas bill",
// Note : "Water bill August",
// Amount:20000,
// CreatedAt :3
// });

// read  data

// to display array

// firebase.database().ref('Expenses').once('value').then((snapshot)=>{

//     const expenses=[]
//     snapshot.forEach((Childsnapshot)=>{

//         expenses.push({
//           id:Childsnapshot.key,
//            ...Childsnapshot.val()
//       })
//     })
//     console.log(expenses)
// })

// subscribtion: register on chnages (to display a new array on changes made)
// firebase.database().ref('Expenses').on('value',(snapshot)=>{
//     const expenses=[]
//     snapshot.forEach((Childsnapshot)=>{
//         expenses.push({
//           id:Childsnapshot.key,
//            ...Childsnapshot.val()
//       })
//     })
//     console.log(expenses)
// })

// child_removed
// firebase.database().ref('Expenses').on('child_removed',(snapshot)=>{
//     console.log("Deleted".snapshot.key,snapshot.val())
// })

// // child_changed
// firebase.database().ref('Expenses').on("child_changed",(snapshot)=>{
//     console.log("Updated",snapshot.key,snapshot.val())
// })
// child_
// child_changed
// firebase.database().ref('Expenses').on("child_added",(snapshot)=>{
//     console.log("Added",snapshot.key,snapshot.val())
// })

// on update
// const onValueChange = firebase.database().ref().on('value',(snapshot)=>{
//  console.log(snapshot.val())
// })

//to update
//   firebase.database().ref('age').set(20).then(function() {
//     console.log('Synchronization succeeded');
//   })
//   .catch(function(error) {
//     console.log('Synchronization failed');
//   });

//to remove
//   firebase.database().ref('address').remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });

// setTimeout(()=>{
//     firebase.database().ref().update({ age:1 });
// },3000)

// setTimeout(()=>{
//     firebase.database().ref().off(onValueChange);
// },6000)

// setTimeout(()=>{
//     firebase.database().ref().update({ age:2 });
// },7000)

//   firebase.database().ref('address/city').set("Mumbai")
//   firebase.database().ref('phy/height').set("5'6")
//   firebase.database().ref('phy/weight').set("56")
