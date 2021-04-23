var words = $("#lemon").first().text().split(/\s+/);
var text = words.join("</span> <span>");
$("#lemon").first().html("<span>" + text + "</span>");
$("span").on("click", function () {
    $(this).css("background-color", "yellowgreen");
});
$("#lemon")
    .on("mouseenter", function () {
        $(this).css({
            "background-color": "greenyellow",
        });
    })
    .on("mouseleave", function () {
        var styles = {
            backgroundColor: "white",
        };
        $(this).css(styles);
    });
$(".recipe1").click(function () {
    $(".p1").slideToggle();
});
$(".recipe2").click(function () {
    $(".p2").slideToggle();
});
$(".recipe1")
    .on("mouseenter", function () {
        $(this).css({
            "color": "green",
        });
    })
    .on("mouseleave", function () {
        $(this).css({
            "color": "yellowgreen",
        });
    });

$(".recipe2")
    .on("mouseenter", function () {
        $(this).css({
            "color": "brown",
        });
    })
    .on("mouseleave", function () {
        $(this).css({
            "color": "wheat",
        });
    });

$("#milktea")
    .on("mouseenter", function () {
        $(this).css({
            "background-color": "wheat",
        });
    })
    .on("mouseleave", function () {
        var styles = {
            backgroundColor: "white",
        };
        $(this).css(styles);
    });

$(".recipe3")
    .on("mouseenter", function () {
        $(this).css({
            "color": "coral",
        });
    })
    .on("mouseleave", function () {
        $(this).css({
            "color": "orange",
        });
    });
$(".recipe3").click(function () {
    $(".p3").slideToggle();
});

$("#fruitsalad")
    .on("mouseenter", function () {
        $(this).css({
            "background-color": "orange",
        });
    })
    .on("mouseleave", function () {
        var styles = {
            backgroundColor: "white",
        };
        $(this).css(styles);
    });
