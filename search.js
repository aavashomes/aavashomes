function my1(){
    //var name = prompt('Enter the Place !');
    var nameValue = document.getElementById("uniqueID1").value;
    if(nameValue=="")
    {
    alert('Search is Empty !!');
    }
    else if(nameValue=='kalpana nagar') //If the name is 'Joe'
    {
    confirm("Here You are\nClick OK !");
      window.open("room.html");
    }
   else if(nameValue=='indrapuri') //If the name is 'Fred'
    {
        confirm("Here You are/nClick OK !");
      window.open("room.html");
    }
    else{
        alert("Not found in Database");
    }
    }

    function my(){
        //var name = prompt('Enter the Place !');
        var nameValue = document.getElementById("uniqueID").value;
        if(nameValue=='kalpana nagar') //If the name is 'Joe'
        {
        confirm("Here You are\nClick OK !");
          window.open("room.html");
        }
        if(nameValue=='Indrapuri' || nameValue=="indrapuri") //If the name is 'Fred'
        {
            confirm("Here You are/nClick OK !");
          window.open("room.html");
        }
        
        else{
            alert("Sorry ! Not found in Database");
        }
        }