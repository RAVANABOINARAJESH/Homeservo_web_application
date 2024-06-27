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
  
    open(URL="./vendorgetdetails.html","_blank");

});

let getDetailsButton1 = document.querySelector('#getDetailsButton1');
console.log(getDetailsButton1);
getDetailsButton1.addEventListener('click',()=>{
  
    open(URL="./vendorgetdetails.html","_blank");

});


let DisplayWorks = document.querySelector('#displayworks');
console.log(DisplayWorks);
DisplayWorks.addEventListener('click',()=>{
  
    open(URL="./vendorlistofworks.html","_blank");

});



let updateButton = document.querySelector('#updateButton');
console.log(updateButton);
updateButton.addEventListener('click',()=>{
  
    open(URL="./vendorupdate.html","_blank");

});

let createacount = document.querySelector('#createacount');
console.log(createacount);
createacount.addEventListener('click',()=>{
  
    open(URL="./vendorregister.html","_blank");

});


//DELETING THE VENDOR DETAILS

let deleteid=document.getElementById('deleteButton')
console.log(deleteid);

let vendorId=window.localStorage.getItem('vendorId')
console.log(vendorId);

deleteid.addEventListener('click',async(e)=>{

    e.preventDefault();


    if(vendorId){
        try{
            const response = await fetch(`http://localhost:8080/deletevendor?ven_id=${vendorId}`,
            {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                // body: JSON.stringify(customer),
            });
            console.log(response.status);

            if(response.status === 302){
                // window.localStorage.clear();
                
                window.localStorage.removeItem('vendorId')
                window.alert("vendor deleted successfully...! ");
                console.log("successfully deleted");
                function o() {
                  open(URL="./vendorlogin.html","_self")
                  // window.open("http://127.0.0.1:5501/vendor/vendorlogin.html")
               }
               o();
           }
           if(response.status === 404){
            // window.alert("error in deleting the vendor please try again later ....!");
            console.log("Vendor is not deleted");
          }
         }
         catch(error ){
            window.alert('Error Occured In Deletion Of Vendor',error);
         }
    }
    else{
        window.alert("Vendor id is not present Database")
        open(URL="./vendorlogin.html","_blank");
    }

})


//LOG OUT

document.getElementById('logoutButton').addEventListener("click",function(){
    if(vendorId){
    window.localStorage.removeItem('vendorId');
    window.alert("customer logout successfully");
    function o() {
        open(URL="./vendorlogin.html","_blank")
     }
     o();

    }
    else{
        window.alert("Id is not present in Database ,please try to login Again")
        open(URL="./vendorlogin.html","_blank");
    }
    
})



