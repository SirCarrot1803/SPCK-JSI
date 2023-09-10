import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getAuth, signOut  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtefn3ZeOz7hgoINSzZnBoHrXFTCNBhGI",
    authDomain: "fir-lesson-6.firebaseapp.com",
    projectId: "fir-lesson-6",
    storageBucket: "--redacted--",
    messagingSenderId: "656901962642",
    appId: "--redacted--"
};

const app = initializeApp(firebaseConfig);

// function checkLogin() {
//   const isLogin = JSON.parse(localStorage.getItem("isLogin"));
//   if (isLogin === true) {
//   window.location.href = "index.html";
//   }
// }
let Sign_out = document.getElementById('sign-out');
Sign_out.addEventListener('click',function (e) {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Signed Out');
      window.location.href = 'Log in.html';
      handleLogout();
      // localStorage.setItem("isLogin",false);
      // checkLogin();
    }).catch((error) => {
      // An error happened.
      console.error('Sign Out Error', error);

    });


} )

function handleLogout() {
  const isLogin = false
  localStorage.setItem("isLogin", JSON.stringify(isLogin)) || [];

}



// function handleLogout() {
//   localStorage.removeItem("isLogin");
//   window.location.href = "login.html";
// }
function checkLogin() {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  console.log(isLogin);
  if (isLogin === false) {
    window.location.href = "Log in.html";
  }
}
checkLogin();



