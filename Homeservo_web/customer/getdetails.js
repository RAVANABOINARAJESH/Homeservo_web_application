 //DISPLAY THE CUSTOMER DETAILS ON WEBPAGE

let getDetailsButton=document.getElementById('getDetailsButton')
console.log(getDetailsButton);

// getDetailsButton.addEventListener("click" , function(){

 async function a(){

    var customerId=window.localStorage.getItem('customerId')
    console.log(customerId);

    if(customerId){

    fetch(`http://localhost:8080/customer?cus_id=${customerId}`)
    .then(Response =>{
        if(Response.status===302){
            return Response.json();
        }
        else{
            window.alert("failed to fetch customer details")
        }
    })
    .then(data =>{   
        document.getElementById('customerid').textContent=data.data.id;
       document.getElementById("customerName").textContent=data.data.name;
       document.getElementById("customerEmail").textContent=data.data.email;
       document.getElementById("customerPhone").textContent=data.data.phone;
       document.getElementById("customerFamilyCount").textContent=data.data.familyCount;

    
    // let display=dropdown.classList.toggle("none")
    // if(display){
    //     dropdown.style.display="block"
    //     dropdown1.style.display="none"
    //     dropdown2.style.display="none"
    //     let display=data1.style.display="none"
    // }
    // else{
    //     dropdown.style.display="none"
    //     let display=data1.style.display="block"
    // }
       console.log("object fetched successfully")
    })
    .catch(error =>{
        window.alert("error fetching While Displaying customer details")
        console.log("error during fetching");
    })
}
else{
    window.alert("customer id not found in Database")
    open(URL="./customerlogin.html","_self");
}
 }
 a()

 let back = document.querySelector('#back');
console.log(back);
back.addEventListener('click',()=>{
  
    open(URL="./homepage.html","_self");

});
// })