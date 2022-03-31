const web = document.body
const proLine = $("pro-line")
const proLineAlt = $(".pro-line-alt")
const docEle = document.documentElement
const sideBarClose = $("#side_bar_close")
const sideBarOpen = $("#side_bar_open")
const sideBox = $("#side_box")
const sideBarMask = $("#side_bar_mask")
const logoScreen = $("#logo_screen")
const navLink = document.getElementsByClassName("nav-link")
const animatX = document.getElementsByClassName("animat-x")[0]
const animatY = document.getElementsByClassName("animat-y")[0]

/* Remove Logo Screen */
setTimeout(() => {
    logoScreen.css("display", "none")
}, 700)

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
const getAniBottom = $(".ani-bottom")
getAniBottom.addClass("ani-bottom-x")
getAniBottom.removeClass("ani-bottom")

setTimeout(() => {
    let getAniBottomX = $(".ani-bottom-x")
    getAniBottomX.addClass("ani-bottom")
    getAniBottomX.removeClass("ani-bottom-x")
}, 700)

const getAniTop = $(".ani-top")
getAniTop.addClass("ani-top-x")
getAniTop.removeClass("ani-top")

setTimeout(() => {
    let getAniTopX = $(".ani-top-x")
    getAniTopX.addClass("ani-top")
    getAniTopX.removeClass("ani-top-x")
}, 700)

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

/* animatX.getElementsByClassName("animat-mask")[0].style.height = window.innerHeight + "px"
animatY.getElementsByClassName("animat-mask")[0].style.height = window.innerHeight + "px"
 */
web.onscroll = () => {

    setScroll()
    aniX()

}

const aniX = () => {
    let aniPos = animatX.getBoundingClientRect().y
    let tH = aniPos;
    let cP = 3000 - window.innerHeight
    let lW = tH / cP * 100

    if (lW < 0 && lW > -50) {
        animatX.getElementsByClassName("animat-div")[0].style.width = (Math.abs(lW) * 3) + "%";
        animatX.getElementsByClassName("animat-div")[0].style.height = (Math.abs(lW) * 3) + "%";
    }
}

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

for (const link of navLink) {

    let winPath = window.location.href.split("#")

    if (winPath.length > 1) {

        if (link.getAttribute('href') === '#' + winPath[1]) {
            link.classList.add("active-link")
        } else {
            link.classList.remove("active-link")
        }

    } else {
        docEle.scrollTop = 0
    }

    link.onclick = (e) => {
        for (const link of navLink) {
            link.classList.remove("active-link")
        }
        link.classList.add("active-link")
    }

}
