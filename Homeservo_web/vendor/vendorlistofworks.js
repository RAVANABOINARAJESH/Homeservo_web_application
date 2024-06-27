
//LIST OF WORKS

let data1=document.getElementById('worksList')
let div1=document.createElement('div')
data1.appendChild(div1);

let listcontent=document.getElementById('listcontent')
console.log(listcontent)



// document.getElementById('displayWorksButton').addEventListener("click",async () =>{

    async function a(){

    div1.innerHTML="";
    data1.style.display="none"
    var vendorId=window.localStorage.getItem('vendorId')
    console.log(vendorId);
    if(vendorId){
    try{
        const response=await fetch(`http://localhost:8080/work/all?v_id=${vendorId}`,
        {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(customer),
        } );
        let data=await response.json()
        console.log(data);

        function a(){
            return data;
        }

        if(response.status===302){
            if(data.data.length!=0){
               
                listcontent.style.display="block"
                 alert("Here is the List of Works ")
                //  console.log(data.data.workType)
                  data1.style.display="block"
            
   // ***** Displaying the list of works for vendor ***********************

              for(let i=0;i<data.data.length;i++){
                console.log(data.data[i].workType)
                
                div1.innerHTML+=`
                <table border="2px solid" id="vendortable">
                <tr>
                
                <th class="vendorhead">WORK NAME</th>
                <th class="vendorhead">ADDRESS</th>              
                <th class="vendorhead">START DATE  </th>
                <th class="vendorhead">END DATE</th>
                <th class="vendorhead" >GET YOUR SERVICE COST</th>
                <tr>
               
                <td><strong>${data.data[i].workType}</strong></td>
                <td id="vendoraddress">
                 ${data.data[i].address.dno},
                  ${data.data[i].address.street},
                  ${data.data[i].address.district},
                 ${data.data[i].address.landmark},
                 ${data.data[i].address.state},
                  ${data.data[i].address.pincode}
                  </td>
                  <td>
                  <div class="startdate"> Start Date</div>
                  <div class="started"> Started</div>
                  </td>
                  
                  <td>
                  <div class="enddate"> End Date</div>
                  <div class="ended"> Ended</div>
                  </td>
                  <td>
                  <div class="savecost"> Savecost </div>
                  <div class="saved"> Saved </div>
                  </td>
                  </tr>
                 </tr>    
                </table> `;
                 }
               console.log(response)
            }
            else{
                
                 window.alert("There is no list of Works Available here")
                data1.style.display="none"
                listcontent.style.display="none"
            }

        }
        
        //STARTING  AND ENDING DATE OF WORK

        for(let j=0;j<data.data.length;j++){
          let startdate=document.getElementsByClassName('startdate')[j]
            console.log(startdate);
            let enddate=document.getElementsByClassName('enddate')[j]
            console.log(enddate);
            let started=document.getElementsByClassName('started')[j]
            console.log(started);
            let ended=document.getElementsByClassName('ended')[j]
            console.log(ended);
            let saved=document.getElementsByClassName('saved')[j]
            console.log(saved);
            
            var vendorId=window.localStorage.getItem('vendorId')
            console.log(vendorId);
            

            if(data.data[j].startDate!=null){
                started.style.backgroundColor="red";
                started.style.cursor = 'not-allowed';
                started.style.display="block"
                startdate.style.display="none"
                // startdate.style.cursor="none";
                
            }
            if(data.data[j].startDate==null){
                startdate.style.backgroundColor="blue";
               
            }
            // console.log(data.data[j]);

            //STARTING OF WORK

            if(data.data[j].startDate==null){

                startdate.addEventListener('click',async()=>{
                console.log(data.data[j].id);

                try{
                    const response=await fetch(`http://localhost:8080/workstart?work_id=${data.data[j].id}&vendor_id=${localStorage.getItem('vendorId')}`,
                    {
                        method:"PUT",
                        headers:{
                            "Content-Type": "application/json",
                        }
                    } );
                    console.log(response.status)
                    console.log(startdate)
                    if(response.status==201){
                        if(data.data[j].startDate==null){
                            localStorage.setItem('vendorId',vendorId)
                            alert("Remember The work id "+data.data[j].id+" You Have Successfully Started This Work");
                            started.style.backgroundColor="red";
                            started.style.display="block"
                            startdate.style.display="none"
                          }
                        if(data.data[j].startDate!=null){
                            
                            alert("This work is Already Started ");
                            startdate.style.backgroundColor="red";
                            startdate.style.cursor = 'not-allowed';
                        }

                    }
                    else{
                        alert("something went wrong please start the work");
                    }
                }
                catch(error){
                    alert("error occur in starting of date")
                }          
             })
            }

             // ENDING OF WORK

            if(data.data[j].endDate!=null){
                ended.style.backgroundColor="red";
                ended.style.cursor = 'not-allowed';
                ended.style.display="block"
                enddate.style.display="none"
                // enddate.style.backgroundColor="red";
                // enddate.style.cursor="none";
                ended.style.cursor = 'not-allowed';
            }
            if(data.data[j].endDate==null){
                enddate.style.backgroundColor="blue";
            }
            
            if(data.data[j].endDate==null &&data.data[j].startDate!=null){

             enddate.addEventListener('click',async()=>{
                // if(data.data[j].endDate==null &&data.data[j].startDate!=null){
                console.log(data.data[j].id);

                try{
                    const response=await fetch(`http://localhost:8080/workend?work_id=${data.data[j].id}&vendor_id=${localStorage.getItem('vendorId')}`,
                    {
                        method:"PUT",
                        headers:{
                            "Content-Type": "application/json",
                        }
                    } );
                    console.log(response.status)
                    console.log(startdate)
                    if(response.status==201){
                        if(data.data[j].endDate!=null){
                            console.log(("you have Already ended this work"))
                            alert("This Work is already Ended ");
                            enddate.style.backgroundColor="red";
                            enddate.style.cursor = 'not-allowed';
                            
                        }
                        if(data.data[j].endDate==null){
                            alert("you have successfully ended this work");
                            ended.style.backgroundColor="red";
                            ended.style.display="block"
                            enddate.style.display="none"
                         }                    
                    }
                    else{
                        alert("something went wrong please start the work");
                    }

                }
                catch(error){
                    alert("error occur in ending of date")
                }
            // }
            // else{
            //     window.alert("please start the work the you can end")
            // }
             })
            
            }

      // ******************SAVING OF COST *****************

             let savecost=document.getElementsByClassName('savecost')[j]
            console.log(savecost);

            let costid = null;

            if( data.data[j].cost != null){
              costid = data.data[j].cost.id;
              saved.style.display="block"
              savecost.style.backgroundColor="red";
            }
            // if(data.data[j].endDate == null || costid != null){
            //     scost.style.display = 'none';
            //     scostb.style.display = 'none';
            //     scostbackround.style.display = 'none';
            //   }
             
             if(data.data[j].cost==null){
                savecost.style.backgroundColor="blue";
            }
            if(data.data[j].cost!=null){
               
                savecost.style.backgroundColor="red";
                
            }
            if(costid==null){
             savecost.addEventListener('click',async()=>{

                let t = 0;

                   if(data.data[j].vendor[0] != undefined){
                      t = data.data[j].vendor[0].id;
                  }
                 console.log(t);
            
                console.log(data.data[j].id)
             if((data.data[j].vendor.length != 0 ) && t == localStorage.getItem('vendorId')){

                try{
                    let savecost=await fetch(`http://localhost:8080/cost?w_id=${data.data[j].id}&v_id=${localStorage.getItem('vendorId')}`,
                    {
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json",
                        }
                    }  );
                    console.log(savecost.status)
                    if(savecost.status>=400){
                        window.alert("your cost is already saved")
                        savecost.style.backgroundColor="red";
                        savecost.style.cursor = 'not-allowed';
                        
                    }
                    if(savecost.status==201){
                        if(data.data[j].cost==null){
                        
                        window.alert(" cost is successfully saved by you  Remember work id "+ data.data[j].id)
                        saved.style.backgroundColor="red";
                        savecost.style.display="none"
                        saved.style.display="block"
                        }
                        
                    }
                    
                    
                }
                catch(error){
                    // window.alert("There was an error during saving of cost please check url properly")
                }
              }
              else{
                alert("Your id is not matching ");
              }
            
             })

            }
          }         
         }
         catch(error){
              console.log("error occured")
             alert("error occured")
         }
    }
    else{
        window.alert("Id is not present  please login Again")
    }

}
a();

let back = document.querySelector('#back');
console.log(back);
back.addEventListener('click',()=>{
  
    open(URL="./vendorhome.html","_self");

});
// })