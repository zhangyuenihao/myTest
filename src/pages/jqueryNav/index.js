import './index.scss'
import $ from 'jquery'

let startLeft = $('.cur').offset().left - $('.list').offset().left
$('.bg').css({
    'width': $('.cur').innerWidth(),
    'left': startLeft
})

$('.list .item').mouseenter(function () {
    let left = $(this).offset().left - $('.list').offset().left
    let width = $(this).innerWidth()

    $('.bg').stop(true).delay(100).animate({
        'left': left,
        'width': width
    }, 500)
})

$('.list .item').mouseleave(function () {
    let left = startLeft
    let width = $(this).innerWidth()

    $('.bg').stop(true).delay(100).animate({
        'left': left,
        'width': width
    }, 500)
})
