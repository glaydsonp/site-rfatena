$(".zoomImage").mouseover(function () {
    $(this).css("transform", "scale(1.2)");
    $(this).css("transition", "0.2s");
});
$(".zoomImage").mouseout(function () {
    $(this).css("transform", "scale(1.0)");
    $(this).css("transition", "0.2s");
});