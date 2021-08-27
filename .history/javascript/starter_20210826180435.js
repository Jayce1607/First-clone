let menu=document.querySelector("#menu-bars")
let navbar=document.querySelector(".navbar")
// menu.addEventListener("click",function(e){
//   navbar.style. clipPath="";
// })
menu.onclick=()=>{
  menu.classList.toggle("fa-times")
}
