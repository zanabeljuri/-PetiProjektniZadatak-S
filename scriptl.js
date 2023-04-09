// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
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
const analytics=getAnalytics(app);
const auth= getAuth();
  var email=document.getElementById("email");
  var pass=document.getElementById("pass");


window.login=function(e){
    e.preventDefault();
    var obj={
        email:email.value,
        pass: pass.value,
    }

    signInWithEmailAndPassword (auth, obj.email,obj.pass)
    .then(function(success){
        alert("Welcome on our website!");
        window.location.href="site.html";
    })
    .catch(function(err){
        window.location.replace("index.html");
        alert("error"+err)
    })
    console.log(obj);
};