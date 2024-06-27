 let btn=document.getElementById('btn')
 console.log(btn);

 const password=document.getElementById('password')
 password.addEventListener('input',()=>{
    const passtext=document.getElementById('passtext');
    const passpattern=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/ 
    if(password.value.match(passpattern)){
        passtext.innerHTML="your password is valid";
        passtext.style.color="yellow";
    }
    else{
        passtext.innerHTML="your password must contain atleast 8 characters , one uppercase , one lowercase ,one number and one special character";
        passtext.style.color="red";
    }
 })

//updating customer

let cname= document.getElementById("cname");
let email= document.getElementById("email");
let phone= document.getElementById("phone");
let pass= document.getElementById("password");
let familyCount= document.getElementById("familycount");


btn.addEventListener("click", async (event) =>{
  event.preventDefault(); 
//   var customerId = localStorage.getItem('customerId');
var id=window.localStorage.getItem('customerId')
    
    const customer= {
     "id":id,
      "name": cname.value,
      "email": email.value,
      "phone": phone.value,
      "password": pass.value,
     "familyCount": familyCount.value
  
     }
    
    try{
     
      const response= await fetch('http://localhost:8080/customer', 
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      })
      if(response.status===302){
        console.log(JSON.stringify(customer));
        window.alert("customer updated successfully");
        window.close();
      }
      if(response.status===404){
        window.alert("Customer update un successfull")
      }
     
    }
    catch(error){
      window.alert("error");
    }
    
  
  });