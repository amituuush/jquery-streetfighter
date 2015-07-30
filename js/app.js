$( document ).ready(function() {
    $(".img2").hide();
    $(".img3").hide();
    $(".img4").hide();

    $(".img1").mouseenter(function() {
    	$(".img1").hide();
    	$(".img2").show();
    });

    $(".img2").mouseleave(function() {
    	$(".img2").hide();
    	$(".img1").show();
    });

    $(".img2").mousedown(function() {
    	$(".img2").hide();
    	$(".img3").show();
        $(".img4").show();
    });

    $(".img3").mouseup(function() {
    	$(".img3").hide();
        $(".img4").hide();
    	$(".img2").show();
    });

    




















});