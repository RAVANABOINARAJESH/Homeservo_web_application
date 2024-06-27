let email = document.getElementById('email');
let password = document.getElementById('password');
let btn = document.getElementById('button');



function passwordval(){
    const password1=document.getElementById('password')
    const passwordval=document.getElementById('password').value
    let passwordreg=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/    
    if(passwordreg.test(passwordval)){
        return true;
    }
    else{
        return false;
    }
    }
     //REGULAR FUNCTIONS FOR EMAIL TESTING
    function emailValidate(){
        const email = document.getElementById("email")
        const emailVal = document.getElementById("email").value
        let emailReg = /^[a-zA-z0-9.`~!#$%^&*'+/-?_={|}]+@[a-zA-Z0-9-]+.+(?:\.[a-zA-Z0-9-]+)*$/;
        if((emailReg.test(emailVal))){
            return true;
        }
        else{
            return false;
        }   
    }


let field=document.getElementsByClassName('field')
console.log(field)

let valid=document.getElementsByClassName('valid')
console.log(valid)
btn.addEventListener('click',async (e) => {
  e.preventDefault();
    // for integration to the backend database 

    if(email.value===''){
            field[0].style.display="block";
    
    }
    // else{
    //      if(emailValidate()===false){
    //         valid[0].style.display="block"
    //     }
    //     else{
    //         valid[0].style.display="none"
    //     }
    // }


     if(password.value===''){
         field[1].style.display="block";     
    }
    // else{
    //     if(passwordval()===false){
    //         valid[1].style.display="block"
    //     }
    //     else{
    //         valid[1].style.display="none"
    //     }
    // }

    fetch(`http://localhost:8080/customerlogin?email=${email.value}&password=${password.value}`)
    .then(Response =>Response.json())
    .then(data =>{
        if(data.status===302){
            var x=data.data;
            console.log(x);
            //store the customer id in local storage
            localStorage.setItem('customerId',x.id);
            localStorage.setItem('customeremail',x.email);
            localStorage.setItem('customerpassword' ,x.password);
            localStorage.setItem('customerphone' , x.phone);
            localStorage.setItem('customerfamilycount',x.familyCount);
            localStorage.setItem('customeraddress' , x.address);
            localStorage.setItem('customeraddressid',x.address.id);
            localStorage.setItem('customeraddressdno',x.address.dno);
            localStorage.setItem('customeraddressstreet',x.address.street);
            localStorage.setItem('customeraddresslandmark',x.address.landmark);
            localStorage.setItem('customeraddressdistrict',x.address.district);
            localStorage.setItem('customeraddressstate',x.address.state);
            localStorage.setItem('customeraddresspincode',x.address.pincode);
            localStorage.setItem('customeraddressworks',x.address.works);

              alert(" Customer Login successfully")
 
             open(URL="./homepage.html","_self");
             
             
        }
        else{
           window.alert("Login failed please verify the details")
        }
    })
    .catch(error =>{
        // window.alert("error during login")
        console.log("error during login");
    })
 
  
});