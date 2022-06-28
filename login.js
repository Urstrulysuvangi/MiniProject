var firebaseConfig = {
  apiKey: "AIzaSyC46iYye464Hs501qsPFURCZK18UJ2chfM",
  authDomain: "campus-barta.firebaseapp.com",
  projectId: "campus-barta",
  storageBucket: "campus-barta.appspot.com",
  messagingSenderId: "120072317350",
  appId: "1:120072317350:web:6fdb7af63b0521a7650767",
  measurementId: "G-EPND04QLVS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();

  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
  }

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      // alert("Active user "+email);
      window.location = 'example.html';
    }
    // else{
    //   alert("No Active user Found")
    // }
  })
