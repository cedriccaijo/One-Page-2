let imageEvent = [
    "https://i.ytimg.com/vi/GSqjHalntD8/maxresdefault.jpg",
    "http://cdn.osxdaily.com/wp-content/uploads/2018/06/macos-mojave-default-wallpaper-light.jpg",
    "https://cdn.appstorm.net/mac.appstorm.net/files/2012/06/placidwallpaper3379_1920x1080.jpg",
    "https://hdqwalls.com/download/mac-osx-sierra-lu-2560x1440.jpg",
]
$("#bouton a").click(function() {

    let index = 0
    if ($(this).data("index") !== undefined) {
        index = $(this).data("index")
    }
    let baliserImg = $(this)
    $(".row2").animate({
        opacity: "0"
    }, 1000, function() {
        $(".row2").css("background", "url(" + $(baliserImg).attr("src") + ")")
        $(baliserImg).css("opacity", "0")
        $(baliserImg).attr("src", imagesEvent[index])
        $(baliserImg).animate({
            opacity: "1"
        }, 1000)
    })
})