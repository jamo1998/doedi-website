$(document).ready(function() {

    $(".flower-section").hide();
    $(".vapes-section").hide();
    $(".coming-soon").hide();

    $("#flower-icon").click(function() {
        $(".vapes-section").hide();
        $(".coming-soon").hide();
        $(".flower-section").toggle();
    });

    $("#vapes-icon").click(function() {
        $(".flower-section").hide();
        $(".coming-soon").hide();
        $(".vapes-section").toggle();
    });

    $("#concentrates-icon").click(function() {
        $(".vapes-section").hide();
        $(".flower-section").hide();
        $(".coming-soon").toggle();
    });

    $("#edibles-icon").click(function() {
        $(".vapes-section").hide();
        $(".flower-section").hide();
        $(".coming-soon").toggle();
    });
    

});