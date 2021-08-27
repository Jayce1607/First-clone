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
  navbar.classList.remove("active")
  
}


// slider
// var swiper = new Swiper(".home-slider",{
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2,
//     slideShadows: true,
//   },
//   loop:true,
//   autoplay:{
//     delay:3000,
//     disableOnInteraction:false,
//   }
// });
// end Slider
// theme
const toggleBtn=document.querySelector(".toggle-btn")
toggleBtn.addEventListener("click",function(){
  themeToggle.classList.toggle("active")
})
const themeToggle=document.querySelector(".theme-toggler")
const themelist=document.querySelectorAll(".theme-btn");
themelist.forEach(item=>item.addEventListener("click",function(e){
 console.log(e.target.getAttribute("style"))
 document.body.style.backgroundColor=e.target.getAttribute("style")

}))