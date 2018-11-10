$(".card").on("webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd", (e) => {
    $(e.target).addClass("grow-finished"); // $(this).addClass(...) doesnt work for some reason
});