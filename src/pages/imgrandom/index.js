import './index.scss'

const dataArray = [{
    img: ['/images/list/31.png', '/images/list/39.png']
}, {
    img: ['/images/list/32.png', '/images/list/30.png']
}, {
    img: ['/images/list/33.png', '/images/list/31.png']
}, {
    img: ['/images/list/34.png', '/images/list/32.png']
}, {
    img: ['/images/list/35.png', '/images/list/33.png']
}, {
    img: ['/images/list/36.png', '/images/list/34.png']
}, {
    img: ['/images/list/37.png', '/images/list/35.png']
}, {
    img: ['/images/list/38.png', '/images/list/36.png']
}]

let list = document.getElementsByClassName('list')[0]
let oImg = document.getElementsByClassName('img-warp')

function randerList() {
    dataArray.forEach((item, index) => {
        list.innerHTML += ' <li class="item">\n' +
            '            <div class="img-warp">\n' +
            '                <img src="' + item.img[0] + '" alt=""><img src="' + item.img[1] + '" alt="">\n' +
            '            </div>\n' +
            '        </li>'
    })
}

function getStyle(obj, attr) {
    if (getComputedStyle) {
        return window.getComputedStyle(obj)[attr]
    } else {
        return obj.currentStyle[attr]
    }
}

function doMove(obj, attr, dir, target, callback) {
    dir = parseFloat(getStyle(obj, attr)) < target ? dir : -dir
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        let speed = parseFloat(getStyle(obj, attr)) + dir

        if (speed > target && dir > 0 || speed < target & dir < 0) {
            speed = target
        }
        obj.style[attr] = speed + 'px'
        if (speed == target) {
            clearInterval(obj.timer)
            if (callback) {
                callback()
            }
        }

    }, 100)
}

function bindEvent() {
    for (let i = 0; i < oImg.length; i++) {
        let num = Math.random()

        if (num < 0.5 && parseInt(getStyle(oImg[i], 'top')) == 0) {
            doMove(oImg[i], 'top', 10, -100)
        } else {
            if (parseInt(getStyle(oImg[i], 'top')) == -100) {
                doMove(oImg[i], 'top', 10, 0)
            }
        }
    }
}
function init() {
    randerList()

    setInterval(bindEvent, 3000)
}

init()
