const menu=document.querySelector("#menu-bars");
let navbar=document.querySelector(".navbar");
// menu.addEventListener("click",function(e){
//   navbar.style. clipPath="";
// })
menu.addEventListener("click",function(e){
  e.target.classList.toggle("fa-times");
  navbar.classList.toggle("active")
})

window.onscroll=()=>{
  menu.classList.remove("fa-times")
  ive")
}
