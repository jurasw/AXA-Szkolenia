


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAaOe5lV4AFLSSyqGleUaaB9Xi7wPUCqRQ",
    authDomain: "axa-szkolenia.firebaseapp.com",
    databaseURL: "https://axa-szkolenia.firebaseio.com",
    projectId: "axa-szkolenia",
    storageBucket: "axa-szkolenia.appspot.com",
    messagingSenderId: "548908670504",
    appId: "1:548908670504:web:a3396a5c898430b25b1f1d",
    measurementId: "G-NGMEDJVBSW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();


  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
        
        
        function signUp(){
            
            var email = document.getElementById("email");
            var password = makeid(8);
            
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            alert("Signed Up");
        }
        
        
        
        function signIn(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.signInWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            
            
            
        }
        
        
        function signOut(){
            
            auth.signOut();
            alert("Signed Out");
            
        }
        
        
        
        auth.onAuthStateChanged(function(user){
            
            if(user){
                
                var email = user.email;
                alert("Active User " + email);
                
                //Take user to a different or home page
                window.location.href = 'https://jurasw.github.io/AXA-Szkolenia/users';
                //is signed in
                
            }else{
                
                alert("No Active User");
                //no user is signed in
            }
            
            
            
        });
        
    
    