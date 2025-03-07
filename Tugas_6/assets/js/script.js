$(document).ready(function () {
    $(".menu").click(function (event) {
        event.preventDefault();
        let page = $(this).attr("href");

        $("#main-content").fadeOut(200, function () {
            $("#main-content").load(page, function () {
                $("#main-content").fadeIn(200);
            });
        });
    });
});