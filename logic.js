const web = document.body
const proLine = document.getElementsByClassName("pro-line")[0]
const proLineAlt = document.getElementsByClassName("pro-line-alt")[0]
const docEle = document.documentElement

web.onscroll = (e) => {

    let tH = docEle.scrollTop;
    let cP = docEle.scrollHeight - window.innerHeight
    let lW = tH/cP * 100
    
    proLine.style.width = lW + "%";
    proLineAlt.style.width = lW + "%";

    if (docEle.scrollTop != 0) {
        web.classList.add("alt")
    } else {
        web.classList.remove("alt")
    }
    
}

const dark = () => {
    web.classList.add("theme-alt")
}
