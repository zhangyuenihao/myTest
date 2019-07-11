import './index.scss'
import $ from 'jquery'

let t1 = 60
let t2 = 100
let l1 = 2
let lock = true
let state = 1
let w = parseInt($('.btn').width())
let h = parseInt($('.btn').height())
$('.button').each(function () {
    $(this).attr({
        'data-top': $(this).offset().top - $('.buttons').offset().top,
        'data-left': $(this).offset().left - $('.buttons').offset().left
    })
})
$('.btn1').attr({
    'data-top1': parseInt($('.btn1').attr('data-top')) + t1,
    'data-top2': parseInt($('.btn1').attr('data-top')) + t1 + t2
})
$('.btn2').attr({
    'data-top2': parseInt($('.btn2').attr('data-top')) + t2
})
$('.btn4').attr({
    'data-left1': l1,
    'data-top2': parseInt($('.btn4').attr('data-top')) + t2
})
$(window).scroll(function () {
        let top = $(window).scrollTop()
        if (!lock) {
            return
        }
        if (top >= 100 && state == 1) {
            lock = false
            $('.button').each(function () {
                $(this).animate({
                    'left': $(this).attr('data-left1') ? $(this).attr('data-left1') : $(this).css('left'),
                    'top': $(this).attr('data-top1') ? $(this).attr('data-top1') : $(this).css('top')
                }, 400, function () {
                    $(this).animate({
                        'left': $(this).attr('data-left2') ? $(this).attr('data-left2') : $(this).css('left'),
                        'top': $(this).attr('data-top2') ? $(this).attr('data-top2') : $(this).css('top')
                    }, 400, function () {
                        lock = true
                        state = 2
                    })
                })
            })
        } else if (top >= 300 && state == 2) {
            lock = false
            $('.buttons').hide()
            $('.button').stop(true, true)
            $('.btn').show().css({
                'left': parseInt($('.buttons').css('left')) + parseInt($('.btn1').css('left')),
                'top': parseInt($('.buttons').css('top')) + parseInt($('.btn1').css('top'))
            }).animate({
                'left': '640px',
                'top': '640px',
                'width': w / 2,
                'height': h / 2
            }, 1000).animate({
                'top': '1082px'
            }, 400, function () {
                lock = true
                state = 3
            })
        } else if (top >= 1000 && state == 3) {
            lock = false
            $('.btn').animate({
                'left': '300px',
                'top': '1858px',
                'width': w / 8,
                'height': h / 8
            }, 1000, function () {
                lock = true
                state = 4
            })
        } else if (top < 1000 && state == 4) {
            lock = false
            $('.btn').animate({
                'left': '640px',
                'top': '1082px',
                'width': w / 2,
                'height': h / 2
            }, 1000, function () {
                lock = true
                state = 3
            })
        } else if (top < 300 && state == 3) {
            lock = false
            $('.btn').animate({
                'top': '640px'
            }, 400).animate({
                'left': parseInt($('.buttons').css('left')) + parseInt($('.btn1').css('left')),
                'top': parseInt($('.buttons').css('top')) + parseInt($('.btn1').css('top')),
                'width': w,
                'height': h
            }, 1000, function () {
                $('.btn').hide()
                $('.buttons').show()
                lock = true
                state = 2
            })

        } else if (top < 100&& state == 2 ) {
            lock = false
            $('.button').each(function () {
                $(this).animate({
                    'left': $(this).attr('data-left1') ? $(this).attr('data-left1') : $(this).attr('data-left'),
                    'top': $(this).attr('data-top1') ? $(this).attr('data-top1') : $(this).attr('data-top')
                }, 400, function () {
                    $(this).animate({
                        'left': $(this).attr('data-left'),
                        'top': $(this).attr('data-top')
                    }, 400, function () {
                        lock = true
                        state = 1
                    })
                })
            })
        }
        console.log(top,state)
    }
)
