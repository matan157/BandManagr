// Javascript for Log In page

// returns random integer
// min = included, max = excluded
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

(function() {

    // array of background images
    var bgImages = [
        "bg-1.jpg",
        "bg-2.jpg",
        "bg-3.jpg"
    ];

    // random index for the array
    var rand = getRandomInt(0, bgImages.length);

    if ($("#login-page").length > 0) {
        $("body").css({
            "background": "linear-gradient(" + // linear gradient to create an overlay
                "rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)" + // black to black with a 45% opacity
                ")," +
                "url(../images/login/" + bgImages[rand] + ")",
            "background-size": "cover",
            "color": "white"
        });
    }
})();