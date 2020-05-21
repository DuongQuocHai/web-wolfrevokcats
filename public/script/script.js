var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("center-slide");
    var box = document.getElementsByClassName("box-qa");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < box.length; i++) {
        box[i].className = box[i].className.replace(" box-qa-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    box[slideIndex - 1].className += " box-qa-active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

var btnShowMenu = document.getElementById('btn-show-menu');
btnShowMenu.addEventListener('click', showmenu);

function showmenu() {
    var x = document.getElementById('sub-menu');
    if (x.className === "sub-menu") {

        x.className += " sub-menu-active ";
    } else {
        x.className = "sub-menu";
    }
    if (btnShowMenu.className === "burger") {
        btnShowMenu.className += " xmenu";
    } else {
        btnShowMenu.className = "burger";
    }
}