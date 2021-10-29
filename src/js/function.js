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