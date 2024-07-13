function countdown() { //Gave function a name 
    var seconds= document.getElementById("seconds").value; //gave variable a method, id and return value 

    function tick(){ //Gave function a name 
        seconds=seconds-1; //command to reduce time 
        timer.innerhtml=seconds; //attaching method to variable 
        var time= setTimeout(tick, 1000); //provide name to variable and value 
        if(seconds == -1) { //parameters for if statement 
            alert("Time's up!");  
            clearTimeout(time); 
            timer.innerhtml="";
        }
    }
    tick(); //calling function 
}

let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots [i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}