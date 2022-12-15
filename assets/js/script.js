// -------- Preloader --------
const loader = document.querySelector(".loader");
window.addEventListener("load", anyFun);

function anyFun() {
  loader.classList.add("dispear");
}

// --------> Scrool Top <--------
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".go_top").fadeIn();
    } else {
      $(".go_top").fadeOut();
    }
  });
  $(".go_top").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 300);
  });
});


// ----- NAVBAR SCROLL ------

window.addEventListener("scroll", function () {
    var menu = this.document.querySelector(".main_menu");
    menu.classList.toggle("sticky-top", window.scrollY > 0);
});


var typed = new Typed("#strings",{
    strings: ["discover most suitable property"] ,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true

})

$('.partership_slider_main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
});
  


$('.slider_main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angles-left slide-prv-button"></i>',
    nextArrow: '<i class="fa-solid fa-angles-right slide-nxt-button"></i>',
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
});
  
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});




// ========================================================================
// ===================== login page js ====================================
// ========================================================================

let fNamejs = document.querySelector('#fName')
let fNameErrjs = document.querySelector('#fNameErr')

let buttonjs = document.querySelector('#buttons')

buttonjs.onclick = function(e){
  e.preventDefault ();
  if(fNamejs.value == ""){
    fNameErrjs.innerHTML = "what is first name !!"
    fNameErrjs.style = ("color: red;")
  }
}

// let fNamejs = document.querySelector("#fName")
// let fNameErrjs = document.querySelector("#fNameErr")  
// let lNamejs = document.querySelector("#lName")
// let lNameErrjs = document.querySelector("#lNameErr")        
// let Emailjs = document.querySelector("#Email")
// let EmailErrjs = document.querySelector("#EmailErr")               
// let Passwordjs = document.querySelector("#password")
// let PasswordErrjs = document.querySelector("#passwordErr")               
// let rPasswordjs = document.querySelector("#rpassword")
// let rPasswordErrjs = document.querySelector("#rpasswordErr")

// let buttonjs = document.querySelector("#button")
// buttonjs.onclick = function(e){
//     e.preventDefault ();
//     if(fNamejs.value == ""){
//         fNameErrjs.innerHTML = "What is your first Name !!"
//         fNameErrjs.style = ("color: red;")
//     }else if(lNamejs.value == ""){
//         lNameErrjs.innerHTML = "What is your last Name !!"
//         lNameErrjs.style =("color: red;")
//     }else if(Emailjs.value == ""){
//         EmailErrjs.innerHTML = "What is your Email !!"
//         EmailErrjs.style =("color: red;")
//     }else if(Passwordjs.value == ""){
//         PasswordErrjs.innerHTML = "Type a Strong Password !!"
//         PasswordErrjs.style =("color: red;")
//     }else{
//         confirm("your form is submited !!")
//         location.reload()
//     } 
// }

// $("#Email").change(function () {    
//   var inputvalues = $(this).val();    
//   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
//   if(!regex.test(inputvalues)){    
//   alert("invalid email id");    
//   return regex.test(inputvalues);    
//   }    
// });

// $("#rpassword").change(function (){
//   if(Passwordjs != rPasswordjs){
//   alert("password not match")
//   }
// })


// fNamejs.oninput= function(){
//     fNameErrjs.innerHTML = ""
// }
// lNamejs.oninput= function(){
//     lNameErrjs.innerHTML = ""
// }
// Emailjs.oninput= function(){
//     EmailErrjs.innerHTML = ""
// }
// Passwordjs.oninput= function(){
//     PasswordErrjs.innerHTML = ""
// }