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
   else {
       passtext.innerHTML="your password must contain atleast 8 characters , one uppercase , one lowercase ,one number and one special character";
       passtext.style.color="red";
   }
})


//UPDATING VENDOR

let vname=document.getElementById('vname');
let email=document.getElementById('email');
let phone= document.getElementById("phone");
let pass= document.getElementById("password");
let role=document.getElementById('role');
let costperday=document.getElementById('costperday');

btn.addEventListener("click",async (e)=>{
    e.preventDefault();
    //TO GET THE VENDOR IF FROM THE LOCAL STORAGE

    var vendorId=window.localStorage.getItem('vendorId',vendorId);
    const vendor ={
        "id":vendorId,
        "name":vname.value,
        "email":email.value,
        "phone":phone.value,
        "password":pass.value,
        "role":role.value,
        "costPerDay":costperday.value

    }
    try{
        const response =await fetch('http://localhost:8080/vendor',
        {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vendor),
        })
        if(response.status===302){
            console.log(JSON.stringify(vendor));
            window.alert("Vendor updated successfully");
            window.close();
        }
        if(response.status===404){
            window.alert("update is un successfull")
          }
    }
    catch(error){
        window.alert("error");
      }

})


