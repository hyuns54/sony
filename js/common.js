$(".pop_up").hide();

$(".menu").click(function () {
  $(".pop_up").fadeIn(500);
})

$(".close").click(function () {
  $(".pop_up").fadeOut(500)
})

/* sub_product */

$(".prd1").click(function () {
  $(".product_img1").fadeIn().sibings().hide();
});
