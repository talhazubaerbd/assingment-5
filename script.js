const header= document.getElementById("navbar");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky" , window.scrollY> 0);
});
