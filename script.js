$(".explore-item").on("mouseenter", function () {
  $(this).find(".explore-img").css("opacity", "1");
});

$(".explore-item").on("mouseleave", function () {
  $(this).find(".explore-img").css("opacity", "0");
});
