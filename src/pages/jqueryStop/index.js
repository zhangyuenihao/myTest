import './index.scss'
import $ from 'jquery'

const imgArr = ['/images/jqueryStop/show.png', '/images/jqueryStop/hide.png']
let state = 0
const w = $('.main').width()
const h = $('.main').height()

function rander() {
    $('.pop').find('.btn img').attr('src', imgArr[1])
}


function bindEvent() {
    $('.btn').click(function () {
        if ($('.pop').is(':animated')) {
            return
        }
        if (state == 0) {
            $('.pop').stop(false, true).find('.main').animate({
                height: '30px'
            }, 1000).animate({
                width: '25px'
            }, 1000, function () {
                $('.pop').find('img').attr('src', imgArr[0])
                state = 1
            })
        } else {
            $('.pop').stop(false, true).find('img').attr('src', imgArr[1])
                .parent().parent().find('.main').animate({
                width: w
            }, 1000).animate({
                height: h
            }, 1000, function () {
                state = 0
            })
        }

    })

}

function init() {
    rander()
    bindEvent()
}

init()

//语法结构    
/*$("#div").stop();//停止当前动画，继续下一个动画 
$("#div").stop(true);//清除元素的所有动画       
$("#div").stop(false, true);//让当前动画直接到达末状态 ，继续下一个动画
$("#div").stop(true, true);//清除元素的所有动画，让当前动画直接到达末状态*/
