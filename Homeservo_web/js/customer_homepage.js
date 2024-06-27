//GET DETAILS OF CUSTOMER

let getDetailsButton=document.getElementById('getDetailsButton')
console.log(getDetailsButton);
let dropdown=document.querySelector('#detailsContainer')
let dropdown1=document.querySelector('#listofworks')
let dropdown2=document.querySelector('#vendorDetails')

let listcontent=document.getElementById('listcontent')
let listcontent1=document.getElementById('listcontent1')
let data1=document.querySelector('#listofworks')
let div1=document.createElement('div')

 //DISPLAY THE CUSTOMER DETAILS ON WEBPAGE


 

let vendorDetails=document.getElementById('vendorDetails')

getDetailsButton.addEventListener("click" , function(){

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
       document.getElementById("customerName").textContent=data.data.name;
       document.getElementById("customerEmail").textContent=data.data.email;
       document.getElementById("customerPhone").textContent=data.data.phone;
       document.getElementById("customerFamilyCount").textContent=data.data.familyCount;

    
    let display=dropdown.classList.toggle("none")
    if(display){
        dropdown.style.display="block"
        dropdown1.style.display="none"
        dropdown2.style.display="none"
        let display=data1.style.display="none"
    }
    else{
        dropdown.style.display="none"
        let display=data1.style.display="block"
    }
       console.log("object fetched successfully")
    })
    .catch(error =>{
        window.alert("error fetching While Displaying customer details")
        console.log("error during fetching");
    })
}
else{
    window.alert("customer id not found in Database")
}

})




//UPDATE

document.getElementById('updateButton').addEventListener("click",function(){
  var customerId=window.localStorage.getItem('customerId')
  if(customerId){
    function o() {
        window.open("http://127.0.0.1:5501/customer/customerupdate.html","_blank")
     }
     setTimeout(() => {
        o();
     }, 200)
    }
    else{
      window.alert("customer id not found in Database")
    }
})




//DISPLAY ALL WORKS


data1.appendChild(div1);


// let displayworks = document.querySelector('#displayworks');
// // console.log(home);
// displayworks.addEventListener('click',()=>{
  
//     open(URL="./listofirks.html","_self");

// });


document.getElementById('displayworks').addEventListener('click',async(e)=>{
  var customerId=window.localStorage.getItem('customerId')
  if(customerId){
  
  div1.innerHTML="";

  try{

    const response=await fetch(`http://localhost:8080/customerlogin?email=${localStorage.getItem('customeremail')}&password=${localStorage.getItem('customerpassword')}`,
    {
    method :"GET",
    headers :{
      "Content-Type": "application/json",
    },
      // body: JSON.stringify(response),
    } );
    listcontent.style.display="none"
    if(response.status===302){
      alert("Here is the list of works");
      // console.log(response.json())
  
    let data=await response.json();
    console.log(data);
    // console.log(data.data.works);

    let display=dropdown.classList.toggle("none")
    if(display){
        dropdown.style.display="none"
        dropdown1.style.display="block"
        dropdown2.style.display="none"
        listcontent.style.display="block"
        listcontent1.style.display="none"
        data1.style.display="block"
    }
    else{
        dropdown1.style.display="none"
        listcontent.style.display="none"
        listcontent1.style.display="none"
        
    }
   
    for( let i=0;i<data.data.works.length;i++){
     
      let totalamount=0;
      if(data.data.works[i].cost!=null){
        totalamount=data.data.works[i].cost.totalAmount
      }
      let mode='not done';
      if(data.data.works[i].cost!=null){
        if(data.data.works[i].cost.mode!=null){
          mode=data.data.works[i].cost.mode;
        }
      }
      div1.innerHTML+=`
      <table border="2px solid" id="table" cellPadding="5px">      
      <tr>
      <th>WORK NAME</th>
      <th>ADDRESS</th>     
      <th>START DATE</th>
      <th>END DATE</th>
      <th>TOTAL AMOUNT</th>
      <th>PAYMENT MODE  </th>
      <th>PAYMENT  </th>
      <th>PAYMENT STATUS  </th>
     
      </tr>
      <tr>
      <td class="contentcolor"><strong>${data.data.works[i].workType}</strong></td>
      <td class="contentcolor">
       ${data.data.works[i].address.dno},
        ${data.data.works[i].address.street},
        ${data.data.works[i].address.district},
       ${data.data.works[i].address.landmark},
       ${data.data.works[i].address.state},
        ${data.data.works[i].address.pincode}
        </td>
        <td><div class="startdate"><strong>${data.data.works[i].startDate}</strong></div></td>
        <td><div class="enddate"> <strong>${data.data.works[i].endDate}</strong></div></td>
        <td><div > <strong>${totalamount}<br>${mode}</strong></div></td>
        <td>
        <div > 
        <strong>
        <input list="mode" class="inp1"/>
        <datalist  id="mode">
        <option value="Paytm">Paytm</option>
        <option value="Phone Pay">Phone Pay</option>
        <option value="Google Pay">Google Pay</option>
        <option value="Cash And Delivery">Cash And Delivery</option>
        <option value="Netbanking">Netbanking</option>
        <option value="Creditcard">Creditcard</option>
        <option value="Deditcard">Deditcard</option>
        </datalist>
        </strong>
        </div>
        </td>
        <td>
        <div class='paymode'>PAY</div>
        <div class='paymode1'>PAID </div>
        </td>
        <td >
         <div class='success'>Succesfull</div>
         <div class='success1'>Pending</div>
        </td>

        
       </tr>    
      </table> `;
      
      }

      for(let j=0; j<data.data.works.length; j++){
        let paymode = document.getElementsByClassName('paymode')[j];
        console.log(paymode);
        let paymode1 = document.getElementsByClassName('paymode1')[j];
        console.log(paymode);
        let success=document.getElementsByClassName('success')[j]
        console.log(success);
        let success1=document.getElementsByClassName('success1')[j]
        console.log(success);
        if(data.data.works[j].startDate == null&& data.data.works[j].startDate == null){
          // window.alert("you canot pay the amount")
          paymode.style.display="block"
          paymode1.style.display="none"
        }

       if(data.data.works[j].startDate != null&& data.data.works[j].startDate != null){
        if(data.data.works[j].cost.mode != null){
          paymode1.style.display="block"
          paymode.style.display="none"
          paymode1.style.backgroundColor="red";
          success.style.display="block"  
          success1.style.display="none"  
          paymode.style.cursor="none"
          
        }
        if(data.data.works[j].cost.mode == null){
          paymode1.style.display="none"
          paymode.style.display="block"
          success.style.display="none"  
          success1.style.display="block"        
          paymode.style.cursor="pointer"
          
        }
      }
      // else{
      //   window.alert("you canot pay the amount")
      // }
        paymode.addEventListener('click',async ()=>{
          let inp1 = document.getElementsByClassName('inp1')[j];
          console.log(data.data.works[j].cost.id);

          let payment = {
            'mode' : inp1.value,
            'id' : data.data.works[j].cost.id,
          }
          
          if(data.data.works[j].cost.mode == null  ){
            if(inp1.value!=null){
            try{
              const pay = await fetch(`http://localhost:8080/cost?c_id=${localStorage.getItem('customerId')}`,{
                method : 'PUT',
                headers : {
                  "Content-Type":"application/json",
                },
                body : JSON.stringify(payment),
              });
              
              let data2 = await pay.json();
              console.log(data2);
              if(data2.status == 201){    
                alert('Payment completed sucessfull ')
                paymode.style.backgroundColor="green";
                success.style.display="none"  
                success1.style.display="block"  
                
              }
              else{
                alert("payment failed")
              }
              // console.log(data2.status);
            }
            catch(error){
              alert("error While  paying the cost")
            }
          }else{
            alert('Please select the type of mode');
          }
          }
          else{
            alert('Payment is Already Completed');
            success.style.display="block"
            
          }
          

        })
      }
     
     }
     else{
        alert(" There is no works Avilable");    
     }  
  }
  catch(error){
    // alert('error occured while fetching')
    console.log("Url is not correct")
  }
  }
  else{
    window.alert("customer id not found in Database")
  }
});
      





//DISPLAY LIST OF VENDORS

let div2=document.createElement('div')
vendorDetails.appendChild(div2)

document.getElementById('displayVendorsButton').addEventListener("click",async(e)=>{
  var customerId=window.localStorage.getItem('customerId')
  if(customerId){
  
  div2.innerHTML="";
  
    var customerId=window.localStorage.getItem('customerId')
    console.log(customerId);
    
        try {
            const response = await fetch(`http://localhost:8080/vendorall?cus_id=${customerId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            //   body: JSON.stringify(customer),
            });

            console.log(response.status);
            let data= await response.json()  
            console.log(data)           
          
          if(response.status == 302){
          
            window.alert("here is the list of vendors ")
            console.log(data)
            
           
            let display=dropdown1.classList.toggle("none")
            if(display){
               
                dropdown.style.display="none"
                dropdown1.style.display="none"
                dropdown2.style.display="block"
                listcontent.style.display="none"
                listcontent1.style.display="block"
                
            }
            else{
                dropdown1.style.display="none"
                listcontent.style.display="none"
                dropdown1.style.display="none"
                listcontent1.style.display="block"
                
            }
            if(data.data.length!=0||data.data.address==null){
              for(let i=0;i<=data.data.length+1;i++){
                
                div2.innerHTML+=`
                <table border="2px solid" id="table1" cellPadding="3px" borderRadius="10px">      
                <tr>
                <th class="headcolor">SI NO</th> 
                <th class="headcolor">DETAILS</th>              
                <th class="headcolor">ROLE</th>
                 </tr>    
                 <tr>
                 <td>${i}</td>
                 <td>
                 <table id="innertable" cellpadding="5px" >
                <tr>
                <td><strong>NAME :</strong></td>
                <td>${data.data[i].name}</td>
                </tr>
                <tr>
                <td><strong>EMAIL :</strong></td>
                <td>${data.data[i].email}</td>
                </tr>
                <tr>
                <td><strong>PHONE :</strong></td>
                <td>${data.data[i].phone}</td>
                </tr>
                
                <tr>
                <td> <strong>COST/DAY :</strong></td>
                <td>${data.data[i].costPerDay}</td>
                </tr>

                </table>
                
                 
                 </td>
                 <td>
                 
                 <strong>${data.data[i].role}</strong>
                 
                 </td>
                 </tr>
                </table> `;
              }
              
            }  
            else{
              window.alert("vendors are not Avaliable")
            }  
                        
          }
          if(response.status === 404){
            window.alert("error in while displaying of vendors ....!");
            console.log("not deleted");
          }
         }
          catch(error){
            console.log(("error while displaying of vendor details"))
         }
      }
      else{
        window.alert("customer id not found in Database")
      }
    
   
})





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
          window.open("http://127.0.0.1:5501/customer/customerlogin.html")
       }
       setTimeout(() => {
          o();
       }, 200)
      }
      if(response.status === 404){
        window.alert("Error in deleting the customer..!");
        console.log("not deleted");
      }
     }

      catch(error){
        window.alert('Error Occured In Deleting Of Customer');
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
    function o() {
        window.open("http://127.0.0.1:5501/customer/customerlogin.html")
     }
     setTimeout(() => {
        o();
     }, 400)
    }
    else{
      window.alert("Id is not present please login again")
    }
    
})


//CUSTOMER UPLOADING OF WORK

document.getElementById("uploadWork").addEventListener("click",function(){
  var customerId=window.localStorage.getItem('customerId')
  if(customerId){
    function o() {
        window.open("http://127.0.0.1:5501/customer/customer_upload_work.html")
     }
     setTimeout(() => {
        o();
     }, 200)
    }
    else{
      window.alert("Id is not present please login Then Upload")
    }

})

