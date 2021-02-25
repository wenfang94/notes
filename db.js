// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdtKpj7Qfbiygmw50fRpbRyCHzi9mz1po",
    authDomain: "notes-b6f78.firebaseapp.com",
    databaseURL: "https://notes-b6f78.firebaseio.com",
    projectId: "notes-b6f78",
    storageBucket: "notes-b6f78.appspot.com",
    messagingSenderId: "128205505744",
    appId: "1:128205505744:web:b6a220f02ba02512a7cad5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();