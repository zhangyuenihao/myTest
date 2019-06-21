import './index.scss'

const dataArray = [{
    iNew: 'June 19,2019 14:59:00',
    image: '/images/countDown/product1.jpg',
    bgImg: '/images/countDown/product-bg.jpg',
    info: '抗裂砂浆熬了电视剧历史记录开工建设路附近胜利大街科技管理会计萨克龙卷风楼上的看见看见',
    uPrice: '599.00'
}, {
    iNew: 'June 19,2019 14:59:00',
    image: '/images/countDown/product2.jpg',
    bgImg: '/images/countDown/product-bg.jpg',
    info: '抗裂砂浆熬了电视剧历史记录开工建设路附近胜利大街科技管理会计萨克龙卷风楼上的看见看见',
    uPrice: '3299.00'
}, {
    iNew: 'June 19,2019 15:37:0',
    image: '/images/countDown/product3.jpg',
    bgImg: '/images/countDown/product-bg.jpg',
    info: '抗裂砂浆熬了电视剧历史记录开工建设路附近胜利大街科技管理会计萨克龙卷风楼上的看见看见',
    uPrice: '1.00'
}, {
    iNew: 'June 19,2019 17:37:0',
    image: '/images/countDown/product4.jpg',
    bgImg: '/images/countDown/product-bg.jpg',
    info: '抗裂砂浆熬了电视剧历史记录开工建设路附近胜利大街科技管理会计萨克龙卷风楼上的看见看见',
    uPrice: '168.00'
}]
let list = document.getElementsByClassName('list')[0]
let oItem = list.getElementsByClassName('item')
let lowerList = document.getElementsByClassName('lower-list')[0]
let totalPrice = document.getElementsByClassName('total-price')[0]

function getStyle(obj, attr) {
    if (getComputedStyle) {
        return window.getComputedStyle(obj)[attr]
    } else {
        return obj.currentStyle[attr]
    }
}

function doMove(obj, attr, unit, dir, target, callback) {
    dir = parseFloat(getStyle(obj, attr)) < target ? dir : -dir
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        let speed = parseFloat(getStyle(obj, attr)) + dir
        if ((speed > target && dir > 0) || (speed < target & dir < 0)) {
            speed = target
            clearInterval(obj.timer)
            if (callback) {
                callback(obj)
            }
        }
        obj.style[attr] = speed + unit
    }, 100)
}

function shake(obj, attr, pos, num, callback) {
    let arr = []
    let shakeTimer = null

    for (let i = 10; i >= 0; i -= 2) {
        arr.push(i, -i)
    }
    clearInterval(shakeTimer)
    shakeTimer = setInterval(function () {
        obj.style[attr] = pos + arr[num] + 'px'
        num++

        if (num == arr.length) {

            clearInterval(shakeTimer)


            if (callback) {
                callback(obj)
            }
        }
    }, 100)

}


function renderList() {
    dataArray.forEach((item, index) => {
        list.innerHTML += '<li class="item">\n' +
            '                <div class="item-main">\n' +
            '                    <div class="btn-warp">\n' +
            '                        <input type="text" value="' + item.iNew + '">\n' +
            '                        <input type="btn" value="确定">\n' +
            '                    </div>\n' +
            '                    <p class="text">剩余00天00时00分00秒</p>\n' +
            '                    <div class="image">\n' +
            '                        <img src="' + item.image + '" alt="">\n' +
            '                    </div>\n' +
            '\n' +
            '                    <p class="info">' + item.info + '</p>\n' +
            '                    <div class="price-warp">\n' +
            '                        <em>抢购价：</em>\n' +
            '                        <span class="unit-price">￥' + item.uPrice + '</span>\n' +
            '                    </div>\n' +
            '                  </div>\n' +
            '                </li>'

    })
}


function bindEvent() {
    function goTwo(n) {
        return n < 10 ? '0' + n : '' + n
    }

    for (let i = 0; i < oItem.length; i++) {
        let itemMain = oItem[i].getElementsByClassName('item-main')[0]
        let btn = oItem[i].getElementsByTagName('input')[1]
        let text = oItem[i].getElementsByClassName('text')[0]
        let pos = parseInt(getStyle(oItem[i], 'left'))
        let num = 0
        let timer = null


        btn.onclick = function () {
             clearInterval(timer)
            function fnTime() {
                let iNew = new Date(dataArray[i].iNew)
                let iNow = new Date()
                let t
                t = Math.floor((iNew - iNow) / 1000)
                if (t < 0) {
                    t = 0
                }
                let str = '剩余' + goTwo(Math.floor(t / 86400)) + '天' + goTwo(Math.floor(t % 86400 / 3600)) + '时' + goTwo(Math.floor(t % 86400 % 3600 / 60)) + '分' + goTwo(t % 60) + '秒'
                text.innerHTML = str
                if (t <= 0) {
                    clearInterval(timer)
                    shake(itemMain, 'left', pos, num, function (obj) {
                        oItem[i].style.backgroundImage = ' url(' + dataArray[i].bgImg + ')'
                        doMove(obj, 'top', 'px', 40, 420, function (obj) {
                            doMove(obj, 'opacity', '', 0.3, 0)
                            lowerList.innerHTML += '<li class="lower-item">\n' +
                                '                    <span class="name">' + dataArray[i].info + '</span>\n' +
                                '                    <span class="price">' + dataArray[i].uPrice + '</span>\n' +
                                '                    <span class="img-warp">\n' +
                                '                       <img src="' + dataArray[i].image + '" alt="图片" class="pimg">\n' +
                                '                   </span>\n' +
                                '                </li>'
                            totalPrice.innerHTML = parseFloat(dataArray[i].uPrice) + parseFloat(totalPrice.innerHTML) + '.00'
                        })


                    })
                }
            }

            timer = setInterval(fnTime, 1000)
        }
    }
}

function init() {
    renderList()
    bindEvent()

}

init()
