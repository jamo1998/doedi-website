$(document).ready(function() {

    $(".flower-section").hide();
    $(".vapes-section").hide();
    $(".coming-soon").hide();
    $(".edibles-section").hide();
    

    $("#flower-icon").click(function() {
        $(".edibles-section").hide();
        $(".tinctures").hide();
        $(".vapes-section").hide();
        $(".coming-soon").hide();
        $(".flower-section").toggle();
    });

    $("#vapes-icon").click(function() {
        $(".edibles-section").hide();
        $(".tinctures").hide();
        $(".flower-section").hide();
        $(".coming-soon").hide();
        $(".vapes-section").toggle();
    });

    $("#concentrates-icon").click(function() {
        $(".edibles-section").hide();
        $(".tinctures").hide();
        $(".flower-section").hide();
        $(".vapes-section").hide();
        $(".coming-soon").toggle();
    });

    $("#edibles-icon").click(function() {
        $(".coming-soon").hide();
        $(".tinctures").hide();
        $(".vapes-section").hide();
        $(".flower-section").hide();
        $(".edibles-section").toggle();
    });

    $("#tinctures-icon").click(function() {
        $(".edibles-section").hide();
        $(".vapes-section").hide();
        $(".flower-section").hide();
        $(".coming-soon").toggle();
    });
    

});