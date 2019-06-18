import './index.scss'

const imgArray = ['/images/clock/0.jpg', '/images/clock/1.jpg', '/images/clock/2.jpg',
    '/images/clock/3.jpg', '/images/clock/4.jpg', '/images/clock/5.jpg', '/images/clock/6.jpg',
    '/images/clock/7.jpg', '/images/clock/8.jpg', '/images/clock/9.jpg', '/images/clock/colon.jpg']

let op = document.getElementsByClassName('text')[0]
let timer = null
let oLi = document.getElementsByClassName('item')
timer = setInterval(fnTime, 1000)

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
                callback(obj)
            }
        }

    }, 100)
}

function fnTime() {
    let myTime = new Date()
    let oHours = myTime.getHours()
    let minutes = myTime.getMinutes()
    let sec = myTime.getSeconds()
    let newTime = new Date()
    let nextTime = newTime.getTime() + 1000
    newTime.setTime(nextTime)
    let oHours2 = newTime.getHours()
    let minutes2 = newTime.getMinutes()
    let sec2 = newTime.getSeconds()

    let str = toTwo(oHours) + '：' + toTwo(minutes) + '：' + toTwo(sec)
    let str2 = toTwo(oHours2) + '：' + toTwo(minutes2) + '：' + toTwo(sec2)
    op.innerHTML = str

    function toTwo(n) {
        return n < 10 ? '0' + n : '' + n
    }

    for (let i = 0; i < str.length; i++) {
        let oImg = oLi[i].getElementsByTagName('img')
        if (i == 2 || i == 5) {
            oImg[0].src = '/images/clock/colon.jpg'
            oImg[1].src = '/images/clock/colon.jpg'
        } else {
            oImg[0].src = '/images/clock/' + str.charAt(i) + '.jpg'
            oImg[1].src = '/images/clock/' + str2.charAt(i) + '.jpg'
        }
        if (str.charAt(i) !== str2.charAt(i)) {
            doMove(oLi[i], 'top', 30, -172, function () {
                oImg[0].src = '/images/clock/' + str2.charAt(i) + '.jpg'
                doMove(oLi[i], 'top', 172, 0)
            })

        }
    }

}

fnTime()

