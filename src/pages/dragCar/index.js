import './index.scss'
import $ from 'jquery'

require('webpack-jquery-ui')
require('webpack-jquery-ui/css')

const imgArray = ['/images/dragCar/1.jpg', '/images/dragCar/2.jpg', '/images/dragCar/3.jpg', '/images/dragCar/4.jpg', '/images/dragCar/5.jpg']
let len = imgArray.length - 1
let W = parseInt($('.line').width()) - parseInt($('.btn').width())
let range = W / len
let idx = 0

function randerList() {
    imgArray.forEach((item, index) => {
        $('.list').append(' <li class="item"><img src="' + item + '" alt=""></li>')
    })

}

function bindEvent() {
    //一句话就能让他可以拖拽
    $('.btn').draggable({
        // 里面的JSON参数，表示配置。
        // 配置在什么范围里面进行拖拽，这个parent表示
        'containment': 'parent',
        // 限制运动在x轴
        'axis': 'x',
        // 设置横向咯噔是150像素，纵向咯噔是1像素
        'grid': [range, 0],
        // 拖拽的时候有什么事情发生
        'drag': function (event, ui) {
            let left = ui.position.left
            console.log(left, range, idx)
            //备份老的idx
            let oldidx = idx
            //查询现在的idx
            idx = parseInt(left / range)
            console.log(idx)
            if (oldidx != idx) {
                $('.item').eq(oldidx).stop(true).fadeOut(50, function () {
                    $('.item').eq(idx).stop(true).fadeIn(50)
                })
            }
            $('.btn').css('left', range * idx+ 'px')

        }
    })
    $('.line').mousedown(function (event) {
        if (event.target.className == 'btn') {
            return
        }
        let oldidx = idx

        idx = parseInt(event.offsetX/ range)
        console.log(idx)
        if (oldidx != idx) {
            $('.item').eq(oldidx).stop(true).fadeOut(50, function () {
                $('.item').eq(idx).stop(true).fadeIn(50)
            })
        }
        $('.btn').css('left', range * idx + 'px')
    })
}

function init() {
    randerList()
    bindEvent()
}

init()
