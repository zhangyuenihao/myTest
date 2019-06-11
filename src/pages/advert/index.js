import './index.scss'

window.onload = function () {
    const dataArray = [{
        text: ['连衣裙', '雪纺', 'T恤', '铅笔裤', '婚纱', '外套', '连体裤', '包包', '凉鞋', '单鞋', '太阳镜', '丝袜', '帆布鞋', '情侣装'],
        img: ['/images/carousel/1.png', '/images/carousel/2.png', '/images/carousel/3.png', '/images/carousel/4.png',
            '/images/carousel/11.jpg', '/images/carousel/12.jpg', '/images/carousel/13.jpg', '/images/carousel/14.jpg',
            '/images/selection/21.jpg', '/images/selection/22.jpg', '/images/selection/23.jpg', '/images/selection/24.jpg',
            '/images/selection/25.jpg', '/images/selection/26.jpg', '/images/selection/27.jpg']
    }]
    let oList = document.getElementsByClassName('list')
    let img = document.getElementsByTagName('img')[0]
    let domArr = []
    let oldItem
    let timer = null
    let timer2 = null
    let num = 0

    /**
     * 创建dom元素
     */
    function getElement(tag, cls) {
        let node = document.createElement(tag)
        node.className = cls
        return node
    }

    /**
     * 渲染页面
     */
    function randerList() {

        dataArray[0].text.forEach((item, index) => {
            let li = getElement('li', 'item')
            let fragmentl = document.createDocumentFragment()
            let fragmentr = document.createDocumentFragment()
            if (index < (dataArray[0].text.length - 1) / 2) {
                fragmentl.appendChild(li)
                oList[0].appendChild(fragmentl)
            } else {
                fragmentr.appendChild(li)
                oList[1].appendChild(fragmentr)
            }
            li.innerText = item
            domArr.push(li)
        })
        return domArr
    }

    function bindEvent() {
        function bindItem() {
            oldItem.classList.remove('active')
            oldItem = domArr[num]
            domArr[num].classList.add('active')
        }

        function set() {
            clearInterval(timer)
            timer = setInterval(function () {
                num++
                if (num > dataArray[0].text.length - 1) {
                    num = 0
                }
                img.src = dataArray[0].img[num]
                bindItem()
                console.log(num)
            }, 1000)
        }

        set()

        function reverseSet() {
            clearInterval(timer2)
            timer2 = setInterval(function () {
                num--
                if (num < 0) {
                    num = 0
                    clearInterval(timer2)
                    set()
                }
                img.src = dataArray[0].img[num]
                bindItem()
            }, 1000)
        }


        domArr.forEach((item, index) => {

            item.onmouseover = function () {
                num = index
                img.src = dataArray[0].img[num]
                bindItem()
                clearInterval(timer)
                clearInterval(timer2)
            }
            item.onmouseout = function () {
                num = index
                img.src = dataArray[0].img[num]
                bindItem()
                reverseSet()
            }
        })
    }

    function init() {
        let domArr = randerList()
        oldItem = domArr[num]
        oldItem.classList.add('active')
        img.src = dataArray[0].img[num]
        bindEvent()
    }

    init()
}
