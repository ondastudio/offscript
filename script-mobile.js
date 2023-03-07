// Sent body to overflow hidden on first click of hamburger icon

$(".menu_link").on("click", toggleScrolling);
function toggleScrolling() {
  $("html").toggleClass("no-scroll");
}

$(".navbar_link").on("click", function () {
  $(".menu_link").click();
});
