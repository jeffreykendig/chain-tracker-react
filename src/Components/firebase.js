import { firebase } from '@firebase/app';
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyDecLVjvsZcEUJTNw3jXLzCOZonlxH5SbU",
    authDomain: "chain-tracker-1036d.firebaseapp.com",
    projectId: "chain-tracker-1036d",
    storageBucket: "chain-tracker-1036d.appspot.com",
    messagingSenderId: "313512369493",
    appId: "1:313512369493:web:1a4db5f767b5c4013de3dc",
    measurementId: "G-78M357F39X"
  };

//   let App;
// // Initialize Firebase
// if (!firebase.apps.length) {
//     App = firebase.initializeApp(firebaseConfig);
// }else {
//     App = firebase.app(); // if already initialized, use that one
//  }

const App = (!firebase.apps.length) ? firebase.initializeApp(firebaseConfig) : firebase.app();

 export const auth = App.auth(); 
 export default App; 