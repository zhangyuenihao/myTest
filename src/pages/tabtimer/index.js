import './index.scss'

window.onload = function () {
    const dataArray = [{
        title: '菜单一',
        img: ['/images/carousel/1.png', '/images/carousel/2.png', '/images/carousel/3.png'],
        info: ['图片1', '图片2', '图片3']
    }, {
        title: '菜单二',
        img: ['/images/carousel/11.jpg', '/images/carousel/12.jpg', '/images/carousel/13.jpg'],
        info: ['图片4', '图片5', '图片6']
    }]

    let nav = document.getElementsByClassName('nav')[0]
    let image = document.getElementsByClassName('image')[0]
    let navList = document.getElementsByClassName('nav-list')[0]
    let navArr = []
    let subArr = []
    let num = 0
    let n = 0
    let oldItem
    let oldSubitem
    let timer = null

    /**
     * 创建dom元素
     */
    function getElement(tag, cls) {
        let node = document.createElement(tag)
        node.className = cls
        return node
    }

    /**
     * 渲染导航栏
     */
    function renderList(data) {
        let fragment = document.createDocumentFragment()
        data.forEach((item, index) => {
            let navItem = getElement('span', 'nav-item')
            fragment.appendChild(navItem)
            navArr.push(navItem)
            navItem.innerText = item.title
        })
        nav.appendChild(fragment)
        oldItem = navArr[num]
        oldItem.classList.add('active')
        return navArr
    }

    /**
     * 渲染子菜单
     * @param data
     * @param index
     * @param k
     * @returns {Array}
     */

    function renderSublist(data, index, k) {
        let fragment = document.createDocumentFragment()
        data[index][k].forEach((item, index) => {
            let subItem = getElement('li', 'sub-item')
            fragment.appendChild(subItem)
            subArr.push(subItem)
            subItem.innerText = item
            image.src = dataArray[num].img[n]
        })
        navList.appendChild(fragment)
        oldSubitem = subArr[n]
        oldSubitem.classList.add('active')
        return subArr
    }

    /**
     * 添加事件
     */
    function bindEvent() {

        navArr.forEach((item, index) => {
            function bindNav() {
                n = 0
                oldItem.classList.remove('active')
                oldItem = navArr[num]
                navArr[num].classList.add('active')
                oldSubitem.classList.remove('active')
                subArr[n].classList.add('active')
                oldSubitem = subArr[n]
                subArr.forEach((item, index) => {
                    item.innerText = dataArray[num].info[index]
                    image.src = dataArray[num].img[n]
                })

            }

            function bindImg() {
                oldSubitem.classList.remove('active')
                subArr[n].classList.add('active')
                oldSubitem = subArr[n]
                image.src = dataArray[num].img[n]
            }

            clearInterval(timer)
            timer = setInterval(function () {
                n++
                if (n > subArr.length - 1) {
                    n = 0
                    num++
                    if (num > navArr.length - 1) {
                        num = 0
                    }
                    bindNav()
                }
                bindImg()
            }, 1000)
        })
    }

    function init() {
        let navArr = renderList(dataArray)
        let subArr = renderSublist(dataArray, num, 'info')
        bindEvent()
        image.onmouseover = function () {
            clearInterval(timer)
        }
        image.onmouseout = bindEvent


    }

    init()
}
