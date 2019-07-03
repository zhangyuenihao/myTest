import './index.scss'
import $ from 'jquery'


$('.ad-small').mouseenter(function () {
    $('.mag').fadeIn()
    $('.ad-big').fadeIn()
})

$('.ad-small').mouseleave(function () {
    $('.mag').fadeOut()
    $('.ad-big').fadeOut()
})

$('.ad-small').mousemove(function (event) {
    let x = event.pageX - $(this).offset().left
    let y = event.pageY - $(this).offset().top
    let left = x - 175 / 2
    let top = y - 175 / 2
    let rate = 800 / 350
    if (left > 175) {
        left = 175
    } else if (left < 0) {
        left = 0
    }
    if (top > 175) {
        top = 175
    } else if (top < 0) {
        top = 0
    }
    $('.mag').css({
        'left': left,
        'top': top
    })
    $('.ad-big').css({
        'background-position': -left * rate + 'px ' + -top * rate + 'px'
    })

})
