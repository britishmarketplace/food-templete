// left sidebar menu
function openSideNav() {
    jQuery("#side-menu").addClass("open-side-nav");
    jQuery("#overlay").addClass("overlay");
}
function closeSideNav() {
    jQuery("#side-menu").removeClass("open-side-nav");
    jQuery("#overlay").removeClass("overlay");
}
function overlayHide() {
    jQuery("#side-menu").removeClass("open-side-nav");
    jQuery("#overlay").removeClass("overlay");
}


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