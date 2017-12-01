// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-teal";
        navbar.className = navbar.className.replace(" w3-text-white", " w3-teal");
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-teal", " w3-text-white");
    }
    
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

$(function(){
            $('a[href^="#"]').on('click',function(event){
                event.preventDefault();
                var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
                //change this number to create the additional off set        
                var customoffset = 0;
                $('html, body').animate({scrollTop:target_offset - customoffset}, 500);
            });
            jParallax.start();
            $('footer').addAnimation('fadeInUp');
});