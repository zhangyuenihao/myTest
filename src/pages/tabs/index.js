import './index.scss'

const dataArray = [
    {
        adImg: '/images/carousel/4.png',
        imgText: '大立科技死定了',
        image: ['/images/carousel/1.png', '/images/carousel/2.png', '/images/carousel/3.png', '/images/carousel/4.png',
            '/images/carousel/11.jpg', '/images/carousel/12.jpg', '/images/carousel/13.jpg', '/images/carousel/14.jpg']
    }, {
        adImg: '/images/carousel/14.jpg',
        imgText: '结合公开',
        image: ['/images/carousel/11.jpg', '/images/carousel/12.jpg', '/images/carousel/13.jpg']
    }
]

let navItem = document.getElementsByClassName('nav-item')
let adImg = document.getElementsByClassName('ad-img')[0]
let imgText = document.getElementsByClassName('img-text')[0]
let list = document.getElementsByClassName('list')[0]
let OBtn = document.getElementsByClassName('btn')
let circleList = document.getElementsByClassName('circle-list')[0]
let num = 0
let n = 0
let oldNavitem = null
let oldCircle = null
let arrList = []
let circleArr = []

function getElement(tag, cls) {
    let node = document.createElement(tag)
    node.className = cls
    return node

}

function getStyle(obj, attr) {
    if (getComputedStyle) {
        return window.getComputedStyle(obj)[attr]
    } else {
        return obj.currentStyle[attr]
    }
}

function doMove(obj, attr, dir, target, callback) {
    dir = parseFloat(getStyle(obj, attr)) < target ? dir : -dir
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        let speed = parseFloat(getStyle(obj, attr)) + dir

        if (speed > target && dir > 0 || speed < target & dir < 0) {
            speed = target
        }
        obj.style[attr] = speed + 'px'
        if (speed == target) {
            clearInterval(obj.timer)
            if (callback) {
                callback()
            }
        }

    }, 100)
}

function randerImg(num) {
    let fragment = document.createDocumentFragment()
    list.innerHTML = ''
    arrList = []
    dataArray[num].image.forEach((item, index) => {
        let li = getElement('li', 'item')
        let image = getElement('img', 'image')
        li.appendChild(image)
        fragment.appendChild(li)
        arrList.push(li)
        image.src = item
        li.style.left = 180 * index + 'px'
    })
    list.appendChild(fragment)
    return arrList
}

function randerCircle(arr) {
    let n = 0
    let arr2 = []
    circleList.innerHTML = ''
    circleArr = []
    arr.forEach((item, index) => {
        if (index % 3 == 0) {
            n++
            arr2.push(n)
        }
    })

    arr2.forEach((item, index) => {
        let li = getElement('li', 'circle-item')

        circleList.appendChild(li)
        circleArr.push(li)
    })
    return circleArr
}

function bindEvent() {
    function bindnav() {
        for (let i = 0; i < navItem.length; i++) {
            navItem[i].index = i
            navItem[i].onclick = function () {
                num = this.index
                if (oldNavitem.classList.contains('active')) {
                    oldNavitem.classList.remove('active')
                }
                navItem[i].classList.add('active')
                oldNavitem = navItem[i]
                adImg.src = dataArray[num].adImg
                imgText.innerText = dataArray[num].imgText
                randerImg(num)
                randerCircle(dataArray[num].image)
                console.log(circleArr)
                oldCircle = circleArr[n]
                oldCircle.classList.add('active')
            }
        }
    }

    bindnav()

    function bindCircle() {

        OBtn[0].onclick = function () {
            n--
            if (n < 0) {
                n = 0
            }
            oldCircle.classList.remove('active')
            circleArr[n].classList.add('active')
            oldCircle = circleArr[n]
            doMove(list, 'left', 40, -540 * n)
        }
        OBtn[1].onclick = function () {
            n++
            if (n > circleArr.length - 1) {
                n = circleArr.length - 1
            }
            oldCircle.classList.remove('active')
            circleArr[n].classList.add('active')
            oldCircle = circleArr[n]
            doMove(list, 'left', 40, -540 * n)
        }
    }

    bindCircle()

}

function init() {

    oldNavitem = navItem[num]
    oldNavitem.classList.add('active')
    arrList = randerImg(num)
    circleArr = randerCircle(dataArray[num].image)
    adImg.src = dataArray[num].adImg
    oldCircle = circleArr[n]
    oldCircle.classList.add('active')
    imgText.innerText = dataArray[num].imgText
    bindEvent()
}

init()
