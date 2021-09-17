
const toggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

toggle.addEventListener("click", function() {
  if (siteNav.classList.contains("site-nav--open")) {
    siteNav.classList.remove("site-nav--open");
    toggle.classList.remove("open");
    siteNav.classList.add("site-nav---closed");
  } else {
    siteNav.classList.remove("site-nav--closed");
    toggle.classList.add("open");
    siteNav.classList.add("site-nav--open");
    
  }
});





/*$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  
})
1
$('.menu-toggle').click(function() {
2
  
3
  $('.site-nav').toggleClass('site-nav--open', 500);
4
  $(this).toggleClass('open');
5
  
6
})
*/