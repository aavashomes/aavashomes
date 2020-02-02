var database = firebase.database();
/*
function userlogin(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  firebase
  .auth()
  .signInWithEmailAndPassword(email,password)
  .then( function(user){
    window.open("aavas_mark1.html");
    auth = user;
  })
  .catch(function(error){
    window.alert("Login Failed!", error);
  });
}


function handlesignup() {
  var email=document.getElementById("email").value;
var password=document.getElementById("pass").value;


  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  console.log("created");// [END createwithemail]
  
}
*/


function writeuser() {
  //var reg = /^([A-Za-z0-9_-.])+@([A-Za-z0-9_-.])+.([A-Za-z]{2,4})$/;
  var name=document.getElementById("name").value;
  var mob=document.getElementById("mob").value;
  var email=document.getElementById("email").value;
var pass=document.getElementById("pass").value;
if (name==null || name==""){  
  window.alert("Name can't be blank");  
  return false;  
}
else if(email==null || email=="")
{
  window.alert("Email can't be Blank");
  return false;
}
else if(mob.length!=10){  
  window.alert("Please enter valid mobile no.");  
  return false;  
  }  
 else if(pass.length<6){  
  window.alert("Password must be at least 6 characters long.");  
  return false;  
  }  
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
    alert("Enter valid e-mail address");
    return false;
  
}
  
 
var database = firebase.database();
console.log(database);

var data= firebase.database().ref('Signup/');
data.child(mob).set({
    Name:name,
    Email:email,
    Mobile:mob,
 
    password:pass,
    });
    window.localStorage.setItem("n1",name);
    window.localStorage.setItem("n2",email);
    window.open("aavas_after.html",true);
}

function checkuser() {
var name=document.getElementById("name1").value;
  var email1=document.getElementById("email1").value;
var pass=document.getElementById("pass1").value;
if(email1==null || email1=="")
{
  window.alert("Email can't be Blank");
  return false;
}
 else if(pass.length<6){  
  window.alert("Password must be at least 6 characters long.");  
  return false;  
  }  
   var atpos = email1.indexOf("@");
    var dotpos = email1.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email1.length) {
      alert("Enter valid e-mail address");
      return false;
    
  }
var database = firebase.database();
console.log(database);

var data= firebase.database().ref('Login/');
data.child(name).set({
  
    Email:email1,
    password:pass,
    });
  window.localStorage.setItem("n1",name);
        window.localStorage.setItem("n2",email);
    window.open("aavas_after.html",true);
}
function search()
{
var veh=document.getElementById("v").value;
console.log(veh);
if (veh=="MP064009")
{
  window.alert("Aditya Mandil \n 8269540908 \n kalpana nagar Bhopal(MP) ");
}
else
{
  swal("A Basic JS alert by a plug-in");
}
}

function logout(){
  localStorage.removeItem("n1");
    localStorage.removeItem("n2");
    window.open("index.html",true);
}

