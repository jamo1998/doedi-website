$(document).ready(function() {

    $(".flower-section").hide();
    $(".vapes-section").hide();
    $(".coming-soon").hide();

    $("#flower-icon").click(function() {
        $(".tinctures").hide();
        $(".vapes-section").hide();
        $(".coming-soon").hide();
        $(".flower-section").toggle();
    });

    $("#vapes-icon").click(function() {
        $(".tinctures").hide();
        $(".flower-section").hide();
        $(".coming-soon").hide();
        $(".vapes-section").toggle();
    });

    $("#concentrates-icon").click(function() {
        $(".tinctures").hide();
        $(".vapes-section").hide();
        $(".flower-section").hide();
        $(".coming-soon").toggle();
    });

    $("#edibles-icon").click(function() {
        $(".tinctures").hide();
        $(".vapes-section").hide();
        $(".flower-section").hide();
        $(".coming-soon").toggle();
    });

    $("#tinctures-icon").click(function() {
        $(".edibles-section").hide();
        $(".vapes-section").hide();
        $(".flower-section").hide();
        $(".coming-soon").toggle();
    });
    

});