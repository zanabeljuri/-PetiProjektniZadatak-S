
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR2sHqprE7bJct0crpWQffXhVItGBjhGc",
  authDomain: "si-peti.firebaseapp.com",
  databaseURL: "https://si-peti-default-rtdb.firebaseio.com",
  projectId: "si-peti",
  storageBucket: "si-peti.appspot.com",
  messagingSenderId: "238105489507",
  appId: "1:238105489507:web:4db9516b50ab24abbec856",
  measurementId: "G-YJEXPD5SSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  const auth= getAuth();

  var firstName=document.getElementById("firstname");
  var lastName=document.getElementById("lastname");
  var email=document.getElementById("email");
  var pass=document.getElementById("pass");

window.signup=function(e){
    e.preventDefault();
    var obj={
        firstName: firstName.value,
        lastName: lastName.value,
        email:email.value,
        pass: pass.value,
    }

    createUserWithEmailAndPassword (auth, obj.email,obj.pass)
    .then(function(success){
        alert("Sign up successful")
    })
    .catch(function(err){
        alert("error"+err)
    })
    console.log(obj);
};