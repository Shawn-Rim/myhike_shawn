//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAsmLDZkt1HDtEIXEqPMacwGLN1W-I-9MM",
    authDomain: "comp1800-202410-demo-7d2b2.firebaseapp.com",
    projectId: "comp1800-202410-demo-7d2b2",
    storageBucket: "comp1800-202410-demo-7d2b2.appspot.com",
    messagingSenderId: "174913190584",
    appId: "1:174913190584:web:d5765d02cd2489038f524d",
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
