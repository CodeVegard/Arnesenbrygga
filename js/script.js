// One of my goals is to insert the header and footer via JavaScript, so when I want to make changes to the header, I can simply change one header rather than all of them. 
// Found inspo here:
//https://www.tutorialspoint.com/how-to-add-a-new-element-to-html-dom-in-javascript
//https://stackoverflow.com/questions/584751/inserting-html-into-a-div

document.getElementById('header_dom').innerHTML = '<div class="logo_banner"><a href="index.html"><img src="images/brygga_logo_alt_inverted.PNG.png"alt="Arnesenbrygga Logo"class="header_logo"/></a><p class="site_name">ARNESENBRYGGA</p><div class="block"></div></div><label for="hamburger_menu" class="menubox"><i class="fas fa-bars" id="menu_icon"></i></label><input type="checkbox" name="hamburger_menu" id="hamburger_menu" /><nav id="navbar"><ul class="nav_ul"><li class="nav_li"><a href="index.html">Hjem</a></li><li class="nav_li"><a href="rorbua.html">Om Rorbua</a></li><li class="nav_li"><a href="baatogfiske.html">Båt og Fiske</a></li><li class="nav_li"><a href="selskapslokale.html">Selskapslokale</a></li><li class="nav_li"><a href="teambuilding.html">Teambuilding</a></li><li class="nav_li"><a href="booking.html">Booking</a></li></ul></nav>';

document.getElementById('footer_dom').innerHTML = '<div class="footer_contentbox"><div class="about"><h2 class="cs_header">Om Oss</h2><ul class="cs_ul"><li class="cs_li"><a href="aboutus.html">Om oss</a></li><li class="cs_li"><a href="kristiansund.html">Aktiviteter i Kr.Sund</a></li><li class="cs_li">Epost:<a href="mailto:post@arnesenbrygga.no">post@arnesenbrygga.no</a></li></ul></div><div class="some"><a class="some_icon" href="https://www.instagram.com/" title="instagram"><i class="fab fa-instagram-square"></i></a></div></div>';

//After playing around, I found that the header must be inserted before the navbar-script runs, or else it won't apply to the header.


// I wanted to have a sticky header on scroll, taking inspiration here:
// https://www.w3schools.com/howto/howto_js_navbar_sticky.asp 
// https://stackoverflow.com/questions/56071897/hide-when-scroll-down-appears-when-scroll-up
// https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset

const navbar = document.getElementById("navbar")

let width = window.screen.width;

let scrollDown = window.pageYOffset;
window.onscroll = function() {
  let noScroll = window.pageYOffset;
  if (scrollDown > noScroll) {
    navbar.style.position = "fixed";
    navbar.style.top = "0";
  } else {
    navbar.style.position = "fixed";
    navbar.style.top = "-60px";
  }
  scrollDown = noScroll;
  if (window.scrollY === 0){
    navbar.style.position = "absolute";
    navbar.style.top = "";
  }
  if (width <= 930){
    navbar.style.position = "absolute";
    navbar.style.top = "";
  }
}

// I also want the menu button on mobile to work like this, but it seems a little trickier. 
// I'll look into that if there's time for that. 

