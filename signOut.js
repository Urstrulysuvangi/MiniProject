

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

 //sign-out function
  function signOut(){
    auth.signOut();
   
    window.location="newSignIn.html"
  }