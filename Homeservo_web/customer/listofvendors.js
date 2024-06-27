
//DISPLAY LIST OF VENDORS
let vendorDetails=document.getElementById('vendorDetails')
let listcontent1=document.getElementById('listcontent1')

let div2=document.createElement('div')
vendorDetails.appendChild(div2)

  async function a(){
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
          if(data.data.length!=0){      
          
           if(response.status == 302){
          
            window.alert("here is the list of vendors ")
            console.log(data)
           
            listcontent1.style.display="block"
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
           }
            else{
              window.alert("vendors are not Avaliable")
              // listcontent1.style.display="none"
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
        open(URL="./customerlogin.html","_self");
      }
  }
  a()


  let back = document.querySelector('#back');
console.log(back);
back.addEventListener('click',()=>{
  
    open(URL="./homepage.html","_self");

});
   
