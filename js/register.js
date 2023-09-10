import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

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
// Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
//   });

function checkLogin() {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    
    if (isLogin === true) {
        window.location.href = "index.html";
    }
}


function register(){
    let register_form = document.getElementById('register-form');

    register_form.addEventListener('submit', function (e) {
        e.preventDefault();
        // lấy input
        let email = document.querySelector('.email-input').value;
        let password = document.querySelector('.password-input').value;
        let repassword = document.querySelector('.repassword-input').value;

        if ( password != repassword ) {
            alert(' Mật khẩu và xác nhận mật khẩu không trùng khớp');
            return 0;
        }

        
        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const type = userCredential.operationType;
            console.log(type);
            const user = userCredential.user;
            console.log(user);
            alert("Sign up successfully !!!");
            
            
            localStorage.setItem("isLogin", JSON.stringify(true));
            window.location.href = "index.html";


            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            alert(errorCode);
            // ..
        });

        // let user_data = localStorage.getItem('user_data')

        // if ( user_data ) {
        //     user_data = JSON.parse(user_data)

        //     for( let user of user_data ) {
        //         if ( user.user_email == email ) {
        //             alert('Email này đã được sử dụng bởi tài khoản khác')
        //             return 0;
        //         }
        //     }

        //     if ( password != repassword ) {
        //         alert(' Mật khẩu và xác nhận mật khẩu không trùng khớp');
        //         return 0;
        //     } else {

        //         user_data.push(
        //             {
        //                 user_email: email,
        //                 password: password,
        //             }
        //         )

        //         localStorage.setItem('user_data', JSON.stringify(user_data))
        //         alert('Đăng ký tài khoản thành công, bạn sẽ được chuyển đến trang đăng nhập')
        //         window.location.href = './login.html'
        //     }
        // } else {
        //     if ( password != repassword ) {
        //         alert(' Mật khẩu và xác nhận mật khẩu không trùng khớp');
        //         return 0;
        //     } else {
        //         let user_data_new = [
        //             {
        //                 user_email: email,
        //                 password: password,
        //             }
        //         ]

        //         localStorage.setItem('user_data', JSON.stringify(user_data_new))
        //         alert('Đăng ký tài khoản thành công, bạn sẽ được chuyển đến trang đăng nhập')
        //         window.location.href = './login.html'
        //     }
        // }
    })

}
window.onload = function () {
    register();
  };
checkLogin();