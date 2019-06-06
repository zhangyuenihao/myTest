import './index.scss'

window.onload = function () {
    const arrData = [
        {
            status: 0,
            msg: '很差'
        },
        {
            status: 1,
            msg: '较差'
        },
        {
            status: 2,
            msg: '还行'
        },
        {
            status: 3,
            msg: '推荐'
        },
        {
            status: 4,
            msg: '力荐'
        }
    ]
    const arrImg = ['/images/star/star1.png', '/images/star/star2.png', '/images/star/star3.png']

    let oStar = document.getElementsByClassName('star')
    let msg = document.getElementsByClassName('msg')[0]
    let num = -1
    let onOff = true

    function init(index) {
        for (let i = 0; i < oStar.length; i++) {
            oStar[i].style.backgroundImage = 'url(' + arrImg[0] + ')'
        }
        msg.innerHTML = arrData[index].msg
        for (let i = 0; i <= index; i++) {
            if (index < 2) {
                oStar[i].style.backgroundImage = 'url(' + arrImg[1] + ')'
            } else {
                oStar[i].style.backgroundImage = 'url(' + arrImg[2] + ')'
            }
        }
    }

    for (let i = 0; i < oStar.length; i++) {
        oStar[i].style.backgroundImage = 'url(' + arrImg[0] + ')'
        oStar[i].index = i

        oStar[i].onmouseover = function () {
            init(oStar[i].index)
        }
        oStar[i].onmouseout = function () {
            if (onOff) {
                for (let i = 0; i < oStar.length; i++) {
                    oStar[i].style.backgroundImage = 'url(' + arrImg[0] + ')'
                    msg.innerHTML = ' <div class="tip"></div>'
                }
            } else {
                return init(num)
            }

        }
        oStar[i].onclick = function () {
            onOff = false
            num = this.index
            init(oStar[i].index)
        }
    }
}
