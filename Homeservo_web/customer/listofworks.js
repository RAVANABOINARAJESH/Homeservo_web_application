
//DISPLAY ALL WORKS

let data1=document.querySelector('#listofworks')
let div1=document.createElement('div')


data1.appendChild(div1);
async function a(){
//  ('click',async(e)=>{
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
    let data=await response.json();
    if(data.data.works.length!=0){
      if(response.status===302){
      alert("Here is the list of works");
      // console.log(response.json())
       console.log(data);
    // console.log(data.data.works);

   
    listcontent.style.display="block"
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
      <table border="2px solid" id="table" cellPadding="5px" >      
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
        <td><div > <strong>${totalamount} /-<br><br>${mode}</strong></div></td>
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
    }
     else{
        alert(" There is no works Avilable");   
        listcontent.style.display="none" 
     }  
  }
  catch(error){
    // alert('error occured while fetching')
    console.log("Url is not correct")
  }
  }
  else{
    window.alert("customer id not found in Database")
    open(URL="./customerlogin.html","_self");
  }
// });
}


a();

let back = document.querySelector('#back');
console.log(back);
back.addEventListener('click',()=>{
  
    open(URL="./homepage.html","_self");

});
  