const web = document.body
const proLine = $("pro-line")
const proLineAlt = $(".pro-line-alt")
const docEle = document.documentElement
const sideBarClose = $("#side_bar_close")
const sideBarOpen = $("#side_bar_open")
const sideBox = $("#side_box")
const sideBarMask = $("#side_bar_mask")

/* set theme */
const goDark = () => {
    web.classList.add("theme-alt")
    $.cookie("USER_THEME", "dark")
}

const goLight = () => {
    web.classList.remove("theme-alt")
    $.cookie("USER_THEME", "light")
}

if ($.cookie("USER_THEME")) {
    if ($.cookie("USER_THEME") === 'dark') {
        goDark()
    } else {
        goLight()
    }
} else {
    goLight()
}

/* animation delay */
/* const getAniBottom = $(".ani-bottom")
getAniBottom.addClass("ani-bottom-x")
getAniBottom.removeClass("ani-bottom")

setTimeout(() => {
    let getAniBottomX = $(".ani-bottom-x")
    getAniBottomX.addClass("ani-bottom")
    getAniBottomX.addRemove("ani-bottom-x")
}, 700) */

/* Scroll event */
const setScroll = (e) => {

    let tH = docEle.scrollTop;
    let cP = docEle.scrollHeight - window.innerHeight
    let lW = tH / cP * 100

    proLine.css("width", lW + "%");
    proLineAlt.css("width", lW + "%");

    if (docEle.scrollTop != 0) {
        web.classList.add("alt")
    } else {
        web.classList.remove("alt")
    }

}

setScroll()

web.onscroll = setScroll

/* Side Bar Open And Close Event */

sideBarOpen.on('click', () => {
    sideBox.addClass('side-open')
})

sideBarClose.on('click', () => {
    sideBox.removeClass('side-open')
})

sideBarMask.on('click', () => {
    sideBox.removeClass('side-open')
})

/* make link active */
const navLink = document.getElementsByClassName("nav-link")

for (const link of navLink) {

    let winPath = window.location.href.split("#")

    if (winPath.length > 1) {

        if (link.getAttribute('href') === '#' + winPath[1]) {
            link.classList.add("active-link")
        } else {            
            link.classList.remove("active-link")
        }
    
    }

    link.onclick = (e) => {
        for (const link of navLink){
            link.classList.remove("active-link")
        }
        link.classList.add("active-link")
    }
}
