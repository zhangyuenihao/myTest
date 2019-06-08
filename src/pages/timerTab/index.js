import './index.scss'

window.onload = function () {
    const dataArray = [{
        title: '首页',
        subTitle: ['最近更新', ' 活动', '报名试听', '学员反馈']
    }, {
        title: '关于我们',
        subTitle: ['妙味讲师', ' 培训方式', '培训理念', '联系我们']
    }, {
        title: '作品',
        subTitle: ['般固', ' MATRIX', '留学e网', 'ECMall']
    }, {
        title: '博客',
        subTitle: ['js教程', ' 弹出层效果', '3D球面标签云', 'Window计算器']
    }]
    let list = document.getElementsByClassName('list')[0]
    let subList = document.getElementsByClassName('sub-list')[0]
    let oSubtitle = document.getElementsByClassName('sub-title')
    let btn = document.getElementsByClassName('btn')[0]
    let subWarp = document.getElementsByClassName('sub-warp')[0]
    let num = 0
    let oldItem

    /**
     * 创建元素
     */
    function getElement(tagName, className) {
        const node = document.createElement(tagName)
        node.className = className
        return node
    }

    function renderList(data) {
        const domArray = []

        data.forEach(item => {
            const li = getElement('li', 'item')
            const title = getElement('div', 'title')
            li.appendChild(title)
            list.appendChild(li)
            domArray.push(li)
            title.innerHTML = item.title
        })
        return domArray
    }

    function renderSublist(index, k) {
        dataArray[index][k].forEach(item => {
            const subItem = getElement('li', 'sub-item')
            const subTitle = getElement('span', 'sub-title')
            subItem.appendChild(subTitle)
            subList.appendChild(subItem)
            subTitle.innerHTML = item
        })
    }

    function bindEvent(domArray) {
        let timer = null
        domArray.forEach((item, index) => {
            function randerSubtitle(index) {
                dataArray[index].subTitle.forEach((item, index) => {
                    oSubtitle[index].innerHTML = item
                    subList.style.left = 40 * num + 'px'
                    btn.style.left = 40 + 120 * num + 'px'
                })
            }

            item.onmouseover = function () {
                num = index
                item.classList.add('active')
                if (oldItem) {
                    oldItem.classList.remove('active')
                }

                oldItem = item
                randerSubtitle(index)
                subWarp.style.display = 'block'
            }
            item.onmouseout = function () {
                clearInterval(timer)
                timer = setTimeout(function () {
                    subWarp.style.display = 'none'
                }, 1000)
            }
            subList.onmouseover = function () {
                clearInterval(timer)
            }
            subList.onmouseout = function () {
                clearInterval(timer)
                timer = setTimeout(function () {
                    subWarp.style.display = 'none'
                }, 1000)
            }
        })
    }


    function init() {
        const domArray = renderList(dataArray)
        renderSublist(num, 'subTitle')
        bindEvent(domArray)
    }

    init()
}
