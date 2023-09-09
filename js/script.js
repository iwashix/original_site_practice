// slick スライドショー
$(".slide").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
});

// catalog slick  thumbnail clickevent
$(".item_thumbnail").slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.thumbnail_text',
    arrows: false,
    fade: true,
    dots: true,
});
$(".thumbnail_text").slick({
    autoplay: false,
    infinite: true,
    arrows: true,
    prevArrow: '<div class="slick_prev"></div>',
    nextArrow: '<div class="slick_next"></div> ',
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.item_thumbnail',
});


// ハンバーガーメニュー　toggle_menu
$("#toggle_btn").on("click", function () {
    $("#toggle_menu").toggleClass("open");
});
// メニューのリンクをクリックした時
$("a[href^='#']").on("click", function () {
    $("#toggle_menu").removeClass("open");
});
// スムーススクロール
$(function () {
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 800, "swing");
        return false;
    });
});

// toggle_menu fadein
let fadeinbtn = $("#toggle_btn");
let fadeinmenu =$("#toggle_menu")
fadeinbtn.hide();

$(window).scroll(function() {
if ($(this).scrollTop() > 500) {
    fadeinbtn.fadeIn();
    fadeinmenu.fadeIn();
}else {
    fadeinbtn.fadeOut();
    fadeinmenu.fadeOut();
    $("#toggle_menu").removeClass("open");
}
});



