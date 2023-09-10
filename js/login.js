import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

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
// let user_data = [
//     {
//         user_email: 'admin@gmail.com',
//         password: 'admin123'
//     }, {
//         user_email: 'user@gmail.com',
//         password: 'user123'
//     }
// ]

// localStorage.setItem('user_data', JSON.stringify(user_data));

function checkLogin() {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    
    if (isLogin === true) {
        window.location.href = "index.html";
    }
}


function login() {
    let login_form = document.getElementById('login-form');
    if ( login_form !== '' ) {
        login_form.addEventListener('submit', function (e) {

            e.preventDefault();
            // lấy input
            let email = document.querySelector('.email-input').value;
            let password = document.querySelector('.password-input').value;
            
            

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const type = userCredential.operationType;
                console.log(type)
                const user = userCredential.user;
                console.log(user);
                alert("Log in successfully !!!");
                
                localStorage.setItem("isLogin", JSON.stringify(true))
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                alert(errorCode);

            });


        })
}
}

window.onload = function () {
    login();
  };
checkLogin();