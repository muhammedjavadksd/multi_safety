$(document).ready(function () {
    $(".language_state").hover(function () {
        $(".change_langfauage_drop").slideDown(100);
    })
    $(".language_state").mouseleave(function () {
        $(".change_langfauage_drop").slideUp(100);
    })
 

    $("#closeCanvas").click(function () {
        $(".bottom_header").hide();
    })
    $("#menuBtn").click(function () {
        $(".bottom_header").toggle();

    })


})

