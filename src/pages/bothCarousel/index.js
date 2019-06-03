import './index.scss'

window.onload = function () {
    var pre = document.getElementsByClassName('pre')
    var next = document.getElementsByClassName('next')
    var img1 = document.getElementsByClassName('img-icon1')
    var img2 = document.getElementsByClassName('img-icon2')
    var text = document.getElementsByClassName('text')
    var info = document.getElementsByClassName('info')
    var num = 0
    var n = 0
    var arrimg1 = ['/images/carousel/11.jpg', '/images/carousel/12.jpg', '/images/carousel/13.jpg', '/images/carousel/14.jpg']
    var arrimg2 = ['/images/carousel/1.png', '/images/carousel/2.png', '/images/carousel/3.png']

    function init() {
        img1[0].src = arrimg1[num]
        img2[0].src = arrimg2[n]
        text[0].innerHTML = '第一组' + arrimg1.length + '张图片'
        text[1].innerHTML = '第二组' + arrimg2.length + '张图片'
        info[0].innerHTML = 1 + num + '/' + arrimg1.length
        info[1].innerHTML = 1 + n + '/' + arrimg2.length
    }

    init()

    img1[0].onclick = function () {
        num++
        if (num > arrimg1.length - 1) {
            num = 0
        }
        init()
    }

    img2[0].onclick = function () {
        n++
        if (n > arrimg2.length - 1) {
            n = 0
        }
        init()
    }

    pre[0].onclick = function () {
        num--
        n--
        if (num < 0) num = arrimg1.length - 1
        if (n < 0) n = arrimg2.length - 1
        init()
    }

    next[0].onclick = function () {
        num++
        n++
        if (num > arrimg1.length - 1) num = 0
        if (n > arrimg2.length - 1) n = 0
        init()
    }
}
