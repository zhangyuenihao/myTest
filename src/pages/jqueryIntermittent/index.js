import './index.scss'
import $ from 'jquery'

const dataArray = ['中国新闻网站传播力排行 教书育人典型事迹', '党风廉政建设和反腐斗争在路上 巡视工作', '社会主义核心价值观 大美中国 信用中国', '三严三实 党的群众路线 筑梦“一带一路”',
    '“新春·变化·乡愁”作品公示 网络视听节目', '唱响主旋律 图说中国人的生活 谢谢你', '中国大数据产业峰会暨中国电子商务创新发展峰会', '网络安全和信息化工作座谈会 两学一做',
    '治国理政进行时 网络媒体走转改 生态文明', '协调推进四个全面 深化改革 理论频道', '“十三五”规划 稳增长调结构转方式杭州行', '中国梦实践者 大国工匠 劳动托起中国梦',
    '治国理政进行时 网络媒体走转改 生态文明', '协调推进四个全面 深化改革 理论频道', '“十三五”规划 稳增长调结构转方式杭州行', '中国梦实践者 大国工匠 劳动托起中国梦']

let count = 0
let len = dataArray.length

function randerList() {
    dataArray.forEach((item, index) => {
        $('.list').append('<li class="item">' + item + '</li>')
    })
    for (let i = 0; i < (6 - len % 6); i++) {
        $('.list').append('<li class="item"></li>')
        len = len + i
    }
    $('.list').find('.item:lt(6)').clone().appendTo($('.list'))
    len = len + 6
}


function bindEvent() {
    let timer = null

    function preEvent() {
        if ($('.list').is(':animated')) {
            return
        }
        count++
        $('.list').animate({
            top: -60 * count + 'px'
        }, 500, function () {
            if (count == Math.ceil(len / 6) - 1) {
                count = 0
                $(this).css('top', 0)
            }
        })
    }

    function nextEvent() {
        if ($('.list').is(':animated')) {
            return
        }
        count--
        if (count < 0) {
            count = Math.ceil(len / 6) - 2
            $('.list').css('top', -60 * (Math.ceil(len / 6) - 1) + 'px')
        }
        $('.list').animate({
            top: -60 * count + 'px'
        }, 500)
    }

    $('.pre').click(preEvent)
    $('.next').click(nextEvent)
    timer = setInterval(preEvent, 500)
    $('.main').mouseenter(function () {
        clearInterval(timer)
    })
    $('.main').mouseleave(function () {
        timer = setInterval(preEvent, 500)
    })
}

function init() {
    randerList()

    bindEvent()
}

init()



