import $ from "jquery";

export function mobileInit() {

    $(".header-burger").on("click", function() {
        $(".mobileMenu").addClass("opened");
        $("body").addClass("fixed");
    });

    $('.mobileMenu-header__toggle').on("click", function() {
        $(".mobileMenu").removeClass("opened");
        $("body").removeClass("fixed");
    });

}