import './index.scss'

const dataArray = [{
    img: '',
    name: '默认字体',
    cls: 'default'
}, {
    img: '/images/expression/1.png',
    name: '微微一笑很倾城',
    cls: 'custom'
}, {
    img: '/images/expression/5.png',
    name: '骄傲吧少年',
    cls: 'custom2'
}, {
    img: '/images/expression/12.png',
    name: '悲伤逆流成河',
    cls: 'custom3'
}, {
    img: '/images/expression/8.png',
    name: '烈焰红唇',
    cls: 'custom4'
}]
let text = document.getElementsByClassName('text')[0]
let select = document.getElementsByClassName('select')[0]
let oItem = document.getElementsByClassName('item')
let list = document.getElementsByClassName('list')[0]
let info = document.getElementsByClassName('info')[0]
let btn = document.getElementsByTagName('button')[0]
let onOff = false
let num = 0
let n = 0

function randerList () {
    dataArray.forEach((item, index) => {
        list.innerHTML += '<li class="item"> </li>'
        let arr = item.name.split('')
        arr.forEach((ite, idx) => {
            oItem[index].innerHTML += '<span class="expre ' + item.cls + '">' + ite + '</span>'
            let cls = oItem[index].getElementsByClassName(item.cls)
            cls[idx].style.backgroundImage = 'url("' + item.img + '")'
        })
    })
}

function bindEvent () {
    select.onclick = function () {
        onOff = !onOff
        if (onOff) {
            list.style.display = 'block'
        } else {
            list.style.display = 'none'
        }
    }
    for (let i = 0; i < oItem.length; i++) {
        oItem[i].index = i
        oItem[i].onclick = function () {
            list.style.display = 'none'
            select.innerHTML = dataArray[this.index].name
            num = this.index
            return num
        }
    }
    btn.onclick = function () {
        let str = info.value
        let strArray = str.split('')
        info.value = ''
        strArray.forEach((item, index) => {
            text.innerHTML += '<span class="expre ' + dataArray[num].cls + '">' + item + '</span>'
            let cls = text.getElementsByClassName('expre')
            cls[n].style.backgroundImage = 'url("' + dataArray[num].img + '")'
            n++
        })
    }
}

function init() {
    randerList()
    bindEvent()
}

init()
