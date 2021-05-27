function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function footorGoBottom() {
  var correctTop =
    $(window).innerHeight() -
    $("footer").prev().outerHeight(true) -
    $("footer").prev().offset().top -
    $("footer").outerHeight(true);
  if (correctTop > 0) {
    $("footer").css({
      top: correctTop
    });
  }
}
footorGoBottom();
$(window).on("resize", footorGoBottom);
//modalwindow
