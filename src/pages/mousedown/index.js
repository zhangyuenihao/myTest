import './index.scss'

window.onload = function () {
    const dataArray = [{
        itemTitle: '',
        text: 'Mac翻新产品iPod翻新产品',
        time: '',
        img: '/images/mousedown/41.jpg'
    }, {
        itemTitle: '翻新笔记本',
        text: 'RMB 5,788起最多降低了35%',
        time: '',
        img: '/images/mousedown/42.jpg'
    }, {
        itemTitle: '翻新台式机',
        text: 'RMB 7,698起最多降低了46%',
        time: '',
        img: '/images/mousedown/43.jpg'
    }, {
        itemTitle: '',
        text: 'Mac 完全解析',
        time: '4:49',
        img: '/images/mousedown/44.jpg'
    }, {
        itemTitle: '',
        text: '无线网络基础',
        time: '3:00',
        img: '/images/mousedown/45.jpg'
    }, {
        itemTitle: '',
        text: '从PC到Mac： 基本知识',
        time: '6:57',
        img: '/images/mousedown/46.jpg'
    }, {
        itemTitle: '',
        text: '转移到Mac',
        time: '',
        img: '/images/mousedown/47.jpg'
    }, {
        itemTitle: '翻新iPod',
        text: 'RMB 348起最多降低了43%',
        time: '',
        img: '/images/mousedown/48.jpg'
    }]
    let oBtn = document.getElementsByClassName('btn-warp')
    let content = document.getElementsByClassName('content')[0]
    let list = document.getElementsByClassName('list')[0]

    /**
     * 获取dom元素
     * @param tag
     * @param cls
     * @returns {HTMLElement}
     */
    function getElements(tag, cls) {
        let node = document.createElement(tag)
        node.className = cls
        return node
    }

    /**
     * 实现向后添加兄弟元素方法
     * @param data
     */
    function insertAfter(newNode, curNode) {
        curNode.parentNode.insertBefore(newNode, curNode.nextElementSibling)
    }

    function randerlist(data) {
        let fragment = document.createDocumentFragment()
        data.forEach(item => {
            let li = getElements('li', 'item')
            let itemTitle = getElements('h3', 'item-title')
            let detail = getElements('div', 'detail')
            let textWarp = getElements('div', 'text-warp')
            let text = getElements('div', 'text')
            let time = getElements('span', 'time')
            let imgWarp = getElements('div', 'img-warp')
            let image = getElements('img', 'image')
            li.appendChild(itemTitle)
            insertAfter(detail, itemTitle)
            detail.appendChild(textWarp)
            insertAfter(imgWarp, textWarp)
            textWarp.appendChild(text)
            insertAfter(time, text)
            imgWarp.appendChild(image)
            fragment.appendChild(li)

            if (item.itemTitle) {
                itemTitle.innerText = item.itemTitle
            }
            if (item.text) {
                text.innerText = item.text
            }
            if (item.time) {
                time.innerText = item.time
            }
            if (item.img) {
                image.src = item.img
            }
        })
        list.appendChild(fragment)
    }

    function bindEvent() {
        let timer = null
        let num = 0
        let timer2 = null
        oBtn[0].onmousedown = function () {
            oBtn[0].classList.add('active')
            clearInterval(timer)
            timer = setInterval(function () {
                let top = parseFloat(list.offsetTop)
                let height = parseFloat(list.offsetHeight)
                let height2 = parseFloat(content.offsetHeight)
                let value = height - height2
                if (Math.abs(top) < value) {
                    num--
                    list.style.top = num + 'px'

                }
            }, 10)
        }
        oBtn[0].onmouseup = function () {
            oBtn[0].classList.remove('active')
            clearInterval(timer)
        }
        oBtn[1].onmousedown = function () {
            oBtn[1].classList.add('active')
            clearInterval(timer2)
            timer2 = setInterval(function () {
                let top = parseFloat(list.offsetTop)
                if (top < 0) {
                    console.log(top)
                    num++
                    list.style.top = num + 'px'
                }
            }, 10

            )
        }
        oBtn[1].onmouseup = function () {
            oBtn[1].classList.remove('active')
            clearInterval(timer2)
        }
    }

    function init() {
        randerlist(dataArray)
        bindEvent()
    }

    init()

}
