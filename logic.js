const web = document.body
const proLine = document.getElementsByClassName("pro-line")[0]
const proLineAlt = document.getElementsByClassName("pro-line-alt")[0]
const docEle = document.documentElement

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

/* Scroll event */
const setScroll = (e) => {

    let tH = docEle.scrollTop;
    let cP = docEle.scrollHeight - window.innerHeight
    let lW = tH / cP * 100

    proLine.style.width = lW + "%";
    proLineAlt.style.width = lW + "%";

    if (docEle.scrollTop != 0) {
        web.classList.add("alt")
    } else {
        web.classList.remove("alt")
    }

}

setScroll()

web.onscroll = setScroll

