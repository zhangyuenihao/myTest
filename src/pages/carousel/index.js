import './index.scss'

window.onload = function () {
    var imgIcon = document.getElementsByClassName('img-icon')
    var pre = document.getElementsByClassName('pre')
    var next = document.getElementsByClassName('next')
    var circleList = document.getElementsByClassName('circle-list')
    var circle = circleList[0].getElementsByClassName('circle')
    var thumbnail = document.getElementsByClassName('thumbnail')
    var arrUrl = ['/images/carousel/11.jpg', '/images/carousel/12.jpg', '/images/carousel/13.jpg', '/images/carousel/14.jpg']
    var oldCircle = null
    var num = 0

    for (var i = 0; i < arrUrl.length; i++) {
        circleList[0].innerHTML += '<li class="circle"><div class="thumbnail"><img src="' + arrUrl[i] + '"class="thum - icon"></div></li>'

    }
    oldCircle = circle[num]

    function init(num) {
        imgIcon[0].src = arrUrl[num]
        oldCircle.className = 'circle'
        circle[num].className += ' active'
        oldCircle = circle[num]
    }

    init(num)

    pre[0].onclick = function () {
        num--
        if (num < 0) {
            num = arrUrl.length - 1
        }
        init(num)
    }

    next[0].onclick = function () {
        num++
        if (num > arrUrl.length - 1) {
            num = 0
        }
        init(num)
    }
    for (var i = 0; i < circle.length; i++) {
        circle[i].index = i
        circle[i].onclick = function () {
            num = this.index
            init(num)
        }
        circle[i].onmouseover = function () {
            num = this.index
            thumbnail[num].style.display = 'block'
        }
        circle[i].onmouseout = function () {
            num = this.index
            thumbnail[num].style.display = 'none'
        }
    }

}
