// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var navbar = document.getElementsByClassName("navbar")[0];
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "#666"; // Color when scrolled
  } else {
    navbar.style.backgroundColor = "#333"; // Original color : Dark Grey
  }
}
