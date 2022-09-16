//lets create asynchronous function getPinDetails
async function getPinDetails(){
      try {
          //Lets read the input data as pincode from the user 
          let code=document.getElementById("num").value;
          // console.log(code);
          //Check if the pincode is valid or not greater than 6 or lesser than 6
          if(code.length>6||code.length<6) {
              alert("Please enter only 6 digit pincode")
          }
  
          //clear the input field with data as null 
          // document.getElementById("state").innerHTML="";
          // document.getElementById("district").innerHTML="";
          // document.getElementById("area").innerHTML="";
  
  
  
          //Get the Data from an API 
          let response=await fetch(`https://api.postalpincode.in/pincode/${code}`);
          let data=await response.json();
          // console.log(data[0].PostOffice[0].State);
          // console.log(data[0].PostOffice[0].District);
          // console.log(data[0].PostOffice[0].Name);
  
          if(data[0].PostOffice[0]==null){
              alert("Please enter a valid code");
          }else{
  
              //Data 
              document.getElementById("state").value=data[0].PostOffice[0].State;//state data in state input field
              document.getElementById("district").value=data[0].PostOffice[0].District;//district data in district input field
              document.getElementById("area").value=data[0].PostOffice[0].Name;//name data in area input field
              document.getElementById("country").value=data[0].PostOffice[0].Country;//country data in area input field
          }
          
          document.getElementById("num").value="";//making input value to empty
      } catch (error) {
          alert("Please enter a valid code")
      }
  }
  