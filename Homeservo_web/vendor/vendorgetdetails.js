

 //TO GET DETAILS OF VENDOR

let getDetailsButton=document.getElementById('getDetailsButton')
console.log(getDetailsButton);

// getDetailsButton.addEventListener('click',function(){
async function a(){
    let vendorId=window.localStorage.getItem('vendorId')
    console.log(vendorId);

    if(vendorId){

        fetch(`http://localhost:8080/vendor?id=${vendorId}`)
        .then( Response =>{
            if(Response.status===302){
                return Response.json();
                // console.log("hii");
                // window.alert("failed to fetch Vendor details")
            }
            else{
                window.alert("failed to fetch Vendor details")
            }
        })
        .then(data =>{
            console.log("hello")
            //DISPLAY THE VENDOR DETAILS ON WEBPAGE

            document.getElementById('vendorName').textContent=data.data.name;
            document.getElementById('vendorEmail').textContent=data.data.email;
            document.getElementById('vendorPhone').textContent=data.data.phone;
            document.getElementById('role').textContent=data.data.role;
            document.getElementById('costPerDay').textContent=data.data.costPerDay;

            let dropdown=document.querySelector('#detailsContainer')
            let display=dropdown.classList.toggle("none")
            if(display){
                dropdown.style.display="block"
                document.getElementById('worksList').style.display="none"
            }
            else{
                dropdown.style.display="none"
            }
               console.log("object fetched successfully")
            })
            .catch(error =>{
                
                console.log("error during fetching");
            })

    }
    else{
        window.alert("customer id not found in Database")
    }
// })
}
a();


 let back = document.querySelector('#back');
console.log(back);
back.addEventListener('click',()=>{
  
    open(URL="./vendorhome.html","_self");

});
// })