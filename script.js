const header= document.getElementById("navbar");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky" , window.scrollY> 0);
});

document.getElementById('donate2').addEventListener('click', function(event){
    event.preventDefault();

    let addMonney = document.getElementById('amount2').value;
    console.log(addMonney)
}) 
document.getElementById('donate1').addEventListener('click', function(event){
    event.preventDefault();

    let addMonney = document.getElementById('amount1').value;
    console.log(addMonney)
}) 
document.getElementById('donate3').addEventListener('click', function(event){
    event.preventDefault();

    let addMonney = document.getElementById('amount3').value;
    console.log(addMonney)
}) 