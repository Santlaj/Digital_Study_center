const firebaseConfig = {
  apiKey: "AIzaSyBGw6JFRJFJxktLV51UDdrSIHVO2aDMNJY",
  authDomain: "digitalstudycenter-sasaram.firebaseapp.com",
  projectId: "digitalstudycenter-sasaram",
  
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();