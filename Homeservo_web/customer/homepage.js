let maindropdown=document.getElementById('maindropdown')
console.log(maindropdown);
let drop12=document.getElementById('drop12')
console.log(drop12);

maindropdown.addEventListener('mouseenter' ,()=>{
    let display=maindropdown.classList.toggle("none")
    if(display){
        drop12.style.display="flex"
       
    }
    else{
        drop12.style.display="none"
        
    }

})

let getDetailsButton = document.querySelector('#getDetailsButton');
console.log(getDetailsButton);
getDetailsButton.addEventListener('click',()=>{
  
    open(URL="./getdetails.html","_blank");

});

let getDetailsButton1 = document.querySelector('#getDetailsButton1');
console.log(getDetailsButton1);
getDetailsButton1.addEventListener('click',()=>{
  
    open(URL="./getdetails.html","_blank");

});


let DisplayWorks = document.querySelector('#displayworks');
console.log(DisplayWorks);
DisplayWorks.addEventListener('click',()=>{
  
    open(URL="./listofworks.html","_blank");

});


let displayVendors = document.querySelector('#displayVendorsButton');
console.log(displayVendors);
displayVendors.addEventListener('click',()=>{
  
    open(URL="./listofvendors.html","_blank");

});


let uploadWork = document.querySelector('#uploadWork');
console.log(uploadWork);
uploadWork.addEventListener('click',()=>{
  
    open(URL="./customer_upload_work.html","_blank");

});


let updateButton = document.querySelector('#updateButton');
console.log(updateButton);
updateButton.addEventListener('click',()=>{
  
    open(URL="./customerupdate.html","_blank");

});

let createacount = document.querySelector('#createacount');
console.log(createacount);
createacount.addEventListener('click',()=>{
  
    open(URL="./customerregister.html","_blank");

});


//DELETE

let deleteid=document.getElementById('deleteButton')
console.log(deleteid);

let customerId=window.localStorage.getItem("customerId")
console.log(customerId);

deleteid.addEventListener("click" , async(e)=>{

    e.preventDefault();
   
    if(customerId){
    try {
        const response = await fetch(`http://localhost:8080/customer?cus_id=${customerId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        console.log(response.status);      
      if(response.status === 302){
        // window.localStorage.clear();
        window.localStorage.removeItem('customerId')
        window.alert("Customer deleted successfully...! ");
       
        function o() {
          open(URL="./customerlogin.html","_blank");
          window.open("http://127.0.0.1:5501/customer/customerlogin.html")
       }
       a();
      }
      if(response.status === 404){
        window.alert("Error in deleting the customer..!");
        console.log("not deleted");
      }
     }

      catch(error){
        console.log('Error Occured In Deleting Of Customer');
     }
}
else{
    window.alert("Customer id is not present in Database")
}
  })

  //LOGOUT

document.getElementById('logoutButton').addEventListener("click",function(){
  if(customerId){
    window.localStorage.removeItem('customerId');
    window.alert("customer logout successfully");
      open(URL="./customerlogin.html","_blank");
      window.open("http://127.0.0.1:5501/customer/customerlogin.html")
     }
    
    else{
      window.alert("Id is not present please login again")
    }
    
})




