// left sidebar menu
let menuButton = document.querySelector("#menuButton");
let closeButton = document.querySelector("#close-menu");
let overlayButton = document.querySelector("#overlay");
let sideMenu = document.querySelector("#side-menu");
menuButton.addEventListener("click", () => {
    sideMenu.classList.add("open-side-nav");
    overlayButton.classList.add("overlay")
});
closeButton.addEventListener("click", () => {
    sideMenu.classList.remove("open-side-nav");
    overlayButton.classList.remove("overlay")
});
overlayButton.addEventListener("click", () => {
    overlayButton.classList.remove("overlay")
    sideMenu.classList.remove("open-side-nav");
})


// tab js
var myRadios = document.getElementsByName('tabs2');
var setCheck;
var x = 0;
for(x = 0; x < myRadios.length; x++){
    myRadios[x].onclick = function(){
        if(setCheck != this){
            setCheck = this;
        }else{
            this.checked = false;
            setCheck = null;
        }
    };
}



// dropdown js
let dropBtn = document.querySelector('#drop-btn');
let dropBox = document.querySelector('#drop-box');

dropBtn.addEventListener("click", () => {
    dropBox.classList.toggle("active");
});

// offer slider js
var swiper = new Swiper(".offer-slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        425: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 4.5,
        },
        1200: {
            slidesPerView: 5.5
        },
    },
});

// offer slider js
var swiper = new Swiper(".meal-slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        425: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 4.5,
        },
        1200: {
            slidesPerView: 5.5
        },
    },
});

// food menu slier

var swiper = new Swiper(".foodMenu-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        425: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 4.5,
        },
        768: {
            slidesPerView: 6.5,
        },
        1024: {
            slidesPerView: 8,
        },
        1200: {
            slidesPerView: 10
        },
    },
});

// food menu onScrool js
var navbar = document.getElementById("foodNavbar");
var sticky = navbar.offsetTop;
window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}