
var selectedFile; 

      function getfile() 
      { 
          var pic = document.getElementById("file1"); 
  
           // selected file is that file which user chosen by html form 
          selectedFile = pic.files[0]; 
  
           // make save button disabled for few seconds that has id='submit_link' 
          document.getElementById('submit_link').setAttribute('disabled', 'true'); 
          myfunction(); // call below written function 
      } 
      function myfunction() 
      { 
          // select unique name for everytime when image uploaded 
          // Date.now() is function that give current timestamp 
          var name="room"+Date.now(); 
  
          // make ref to your firebase storage and select images folder 
          var storageRef = firebase.storage().ref('/images/'+ name); 
  
          // put file to firebase  
          var uploadTask = storageRef.put(selectedFile); 
  
          // all working for progress bar that in html 
          // to indicate image uploading... report 
          uploadTask.on('state_changed', function(snapshot){ 
            var progress =  
             (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
              var uploader = document.getElementById('uploader'); 
              uploader.value=progress; 
              switch (snapshot.state) { 
                case firebase.storage.TaskState.PAUSED: 
                  console.log('Upload is paused'); 
                  break; 
                case firebase.storage.TaskState.RUNNING: 
                  console.log('Upload is running'); 
                  break; 
              } 
          }, function(error) {console.log(error); 
          }, function() { 
            
               // get the uploaded image url back 
               uploadTask.snapshot.ref.getDownloadURL().then( 
                function(downloadURL) { 
            
               // You get your url from here 
                console.log('File available at', downloadURL); 
  
              // print the image url  
               console.log(downloadURL); 
               var database = firebase.database();
               var name=document.getElementById("name").value;
var mob=document.getElementById("mob").value;
var email=document.getElementById("email").value;
var pass=document.getElementById("pass").value;
var rules=document.getElementById("rules").value;
               var data= firebase.database().ref('Booking/');
               data.child(mob).set({
                Name:name,
                Email:email,
                Mobile:mob,
             
                Address:pass,
                Rules:rules,
                Image:downloadURL,

                });
                //window.location.replace('index.html',true);
                console.log("INSERTED");
                alert("INSERTED");
                window.open("aavas_after.html",true);
    });
    
              document.getElementById('submit_link').removeAttribute('disabled'); 
              
            }); 
            //writedetails();
            
           // alert("INSERTED");

        }
//         function writedetails()
//         {
//             var database = firebase.database();
//             console.log(database);
//             var name=document.getElementById("name").value;
//             var mob=document.getElementById("mob").value;
//             var email=document.getElementById("email").value;
//           var pass=document.getElementById("pass").value;
//           var rules=document.getElementById("rules").value;

//   firebase.database().ref('Booking/').push().set({
//     Name:name,
//     Email:email,
//     Mobile:mob,
 
//     Address:pass,
//     Rules:rules
//     });
//     window.open("index.html",true);
//         }
