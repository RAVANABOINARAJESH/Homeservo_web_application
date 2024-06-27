let customer = document.getElementById('customer');
let vendor = document.getElementById('vendor');

console.log(customer);
console.log(vendor);

customer.addEventListener('click',()=>{
  let sub = document.getElementById('sub-nav1');
  let display = sub.classList.toggle('true');
  if(display){
    sub.style.display = "block";
  }
  else{
    sub.style.display = "none";
  }
},false);

vendor.addEventListener('click',()=>{
  
  let sub1 = document.getElementById('sub-nav2');
  let display = sub1.classList.toggle('true');
  if(display){
    sub1.style.display = "block";
  }
  else{
    sub1.style.display = "none";
  }
},false);



// Code Starts for service functionality
// let service = document.getElementById('service');
// let dropdown = document.getElementById('drop-down');


// service.addEventListener('click',()=>{
  
//   let display = dropdown.classList.toggle('none');
//     if(display){
//       dropdown.style.display = "block";
//     }
//     else{
//       dropdown.style.display = "none";
//     }
// });

// service.addEventListener('mouseleave',()=>{
//   let display = dropdown.classList.toggle('block');
  
//     if(display){
//       setTimeout(()=>{
//         dropdown.style.transitionDelay='2s';
//         console.log('hi');
//         dropdown.style.display = 'none';
//       },2000)
//     }
//     else{
//       dropdown.style.display = 'none';
      
//     }
// });

