let customer=document.getElementById('customer');
console.log(customer);

customer.addEventListener("click",()=>{
    let demo=document.getElementById('sub_nav1')
    console.log(demo)
    let display= demo.classList.toggle('true')
    if(display){
        demo.style.display="block"
    }
    else{
        demo.style.display="none"
    }
},false)

let vendor=document.getElementById('vendor')
console.log(vendor);

vendor.addEventListener('click',()=>{
    let demo1=document.getElementById('sub_nav2')
    console.log(demo1);
    let display=demo1.classList.toggle('true')
    if(display){
        demo1.style.display='block'
    }
    else{
        demo1.style.display='none'
    }
},false)

//code stars for service functin

let service=document.getElementById('service')
console.log(service)
service.addEventListener("click" ,()=>{
    let dropdown=document.querySelector('#drop-down')
    let display=dropdown.classList.toggle("none")
    if(display){
        dropdown.style.display="block"
    }
    else{
        dropdown.style.display="none"
    }
})

// let bgimage=document.getElementById('bg-image')
// console.log(bgimage);
// bgimage.addEventListener("mouseover",()=>{
//     let dropdown=document.querySelector('#drop-down')
//     let display=dropdown.classList.toggle("block")
//     if(display){
//         dropdown.style.display="none"
//     }
   
// })

