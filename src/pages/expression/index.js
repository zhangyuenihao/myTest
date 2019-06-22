import './index.scss'

const dataArray = [{
    img: ['/images/expression/1.png', '/images/expression/2.png', '/images/expression/3.png',
        '/images/expression/4.png', '/images/expression/5.png', '/images/expression/6.png',
        '/images/expression/7.png', '/images/expression/8.png', '/images/expression/9.png',
        '/images/expression/10.png', '/images/expression/11.png'],
    clickImg: '/images/expression/12.png'
}]
let btn = document.getElementsByTagName('button')[0]
let btning = document.getElementsByClassName('btning')[0]
let score = document.getElementsByClassName('score')[0]
let lose = document.getElementsByClassName('lose')[0]
let oItem = document.getElementsByClassName('item')
let list = document.getElementsByClassName('list')[0]
let main = document.getElementsByClassName('main')[0]
let n = 0
let scorecount = 0
let losecount = 0
let s = 5

function getStyle(obj, attr) {
    if (getComputedStyle) {
        return window.getComputedStyle(obj)[attr]
    } else {
        return obj.currentStyle[attr]
    }
}

function doMove(obj, attr, dir, target, pos, callback) {
    dir = parseFloat(getStyle(obj, attr)) < target ? dir : -dir
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        let speed = parseFloat(getStyle(obj, attr)) + dir

        if (speed > target && dir > 0 || speed < target & dir < 0) {
            speed = target
        }
        // debugger

        obj.style[attr] = speed + 'px'

        if (speed < target) {
            obj.onclick = function () {
                this.innerHTML = '<img src="' + dataArray[0].clickImg + '" alt="">'
                shake(obj, 'left', pos, function (obj) {
                    obj.style.display = 'none'
                    randerList(n)
                    if (scorecount % 10 == 0) {
                        s++
                    }
                })
                scorecount++
                score.innerHTML = '得分：' + scorecount + '分'
                n++
                clearInterval(obj.timer)
                if (callback) {
                    callback(obj)
                }
            }
        } else if (speed == target) {
            losecount++
            lose.innerHTML = '得分：' + losecount + '分'
            shake(main, 'top', 0, function (obj) {
                s++
            })
            n++
            randerList(n)
            clearInterval(obj.timer)
            if (callback) {
                callback(obj)
            }
        }

    }, 100)
}


function shake(obj, attr, pos, callback) {
    let arr = []
    let num = 0
    for (let i = 10; i > 0; i -= 2) {
        arr.push(i, -i)
    }
    clearInterval(obj.timer2)

    obj.timer2 = setInterval(function () {
        obj.style[attr] = pos + arr[num] + 'px'
        num++
        if (num === arr.length) {
            clearInterval(obj.timer2)
            if (callback) {
                callback(obj)
            }
        }
    }, 30)
}

function randerList(n) {
    let pos = parseInt(Math.random() * 776)
    let num = parseInt(Math.random() * dataArray[0].img.length)
    list.innerHTML += ' <li class="item"><img src="' + dataArray[0].img[num] + '" alt=""></li>'
    oItem[n].style.left = pos + 'px'
    doMove(oItem[n], 'top', s, 424, pos, function (obj) {
    })
}

function bindEvent() {
    btn.onclick = function () {
        btn.style.display = 'none'
        btning.style.display = 'inline-block'
        randerList(n)
    }
}

function init() {
    bindEvent()
}

init()
