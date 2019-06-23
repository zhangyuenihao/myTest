import './index.scss'

const dataArray = [{
    id: 1,
    img: '/images/carousel/1.png',
    text: '第1张图片'
}, {
    id: 2,
    img: '/images/carousel/2.png',
    text: '第2张图片'
}, {
    id: 3,
    img: '/images/carousel/3.png',
    text: '第3张图片'
}, {
    id: 4,
    img: '/images/carousel/4.png',
    text: '第4张图片'
}, {
    id: 5,
    img: '/images/carousel/11.jpg',
    text: '第5张图片'
}, {
    id: 6,
    img: '/images/carousel/12.jpg',
    text: '第6张图片'
}, {
    id: 7,
    img: '/images/carousel/13.jpg',
    text: '第7张图片'
}, {
    id: 8,
    img: '/images/carousel/14.jpg',
    text: '第8张图片'
}]
let oBtn = document.getElementsByClassName('btn')
let list = document.getElementsByClassName('list')[0]
let oItem = document.getElementsByClassName('item')
let onOff = false

function randerList(arr) {
    dataArray.forEach((item, index) => {
        list.innerHTML += '<li class="item"><img src="' + item.img + '" alt=""><span>' + item.text + '</span></li>'
    })
}

function bindEvent() {
    oBtn[0].onclick = function () {
        onOff = !onOff
        if (onOff) {
            this.innerText = '从小到大'
            dataArray.sort(function (a, b) {
                return parseInt(b.id) - parseInt(a.id)
            })
            dataArray.forEach((item, index) => {
                oItem[index].innerHTML = '<img src="' + item.img + '" alt=""><span>' + item.text + '</span>'
            })
        } else {
            dataArray.sort(function (a, b) {
                return parseInt(a.id) - parseInt(b.id)
            })
            f
            dataArray.forEach((item, index) => {
                oItem[index].innerHTML = '<img src="' + item.img + '" alt=""><span>' + item.text + '</span>'
            })
            this.innerText = '从大到小'
        }
    }
    oBtn[1].onclick = function () {
        /**
         * 打乱顺序随机排序循环数组，随机index，然后交换位置
         * @param arr
         * @returns {*}
         */
        function usort(arr) {
            let i = arr.length
            let t
            while (i) {
                let j = Math.floor(Math.random() * i--)
                t = arr[i]
                arr[i] = arr[j]
                arr[j] = t
            }
            return arr
        }

        usort(dataArray)
        console.log(dataArray)
        dataArray.forEach((item, index) => {
            oItem[index].innerHTML = '<img src="' + item.img + '" alt=""><span>' + item.text + '</span>'
        })
    }
}

function init() {
    randerList()
    bindEvent()
}

init()
