let email = document.getElementById('email');
let password = document.getElementById('password');
let btn = document.getElementById('button');

//PASSWORD VALIDATION

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
 //REGULAR FUNCTIONS FOR EMAIL VALIDATION

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

btn.addEventListener("click",async (e)=>{
    e.preventDefault();

    if(email.value===''){
        field[0].style.display="block"
    }
    // else{
    //     if(emailValidate()===false){
    //         valid[0].style.display="block"
    //     }
    //     else{
    //         valid[0].style.display="none"
    //     }
    // }


    if(password.value===''){
        field[1].style.display="block";     
   }
//    else{
//        if(passwordval()===false){
//            valid[1].style.display="block"
//        }
//        else{
//            valid[1].style.display="none"
//        }
//    }


   fetch(`http://localhost:8080/vendorlogin?email=${email.value}&password=${password.value}`)
   .then(response =>response.json())
   .then(data =>{
        if(data.status==302){
            var vendorId=data.data.id;
            var vendorName=data.data.vendorName;

            //SAVE THE VENDOR ID IN LOCAL STORAGE
            localStorage.setItem('vendorId',vendorId);
            localStorage.setItem('vendorName',vendorName);
            window.alert("vendor login successfully");
            // console.log(response.data.address)
            function o() {
                open(URL="./vendorhome.html","_blank");
                // window.open("http://127.0.0.1:5501/vendor/vendor_homepage.html")
             }
             o();
            
        }
        else{
            window.alert("Login failed please verify the details")
        }
   })
   .catch(error =>{
    // window.alert("error during login");
    console.log("error during login");
   })




})