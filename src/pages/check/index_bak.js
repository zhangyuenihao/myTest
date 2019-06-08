import './index.scss'

function getElement (tagName, clas) {
    const node = document.createElement(tagName)
    node.className = clas
    return node
}

window.onload = function () {
    let arrData = [
        {
            name: '私奔',
            singer: '梁博',
            add: '',
            collection: '',
            del: ''
        }, {
            name: '北京北京',
            singer: '梁博，黄勇',
            add: '',
            collection: '',
            del: ''
        }, {
            name: '我爱你中国',
            singer: '梁博',
            add: '',
            collection: '',
            del: ''
        }, {
            name: '花火',
            singer: '梁博'
        }, {
            name: '回来',
            singer: '梁博',
            add: '',
            collection: '',
            del: ''
        }, {
            name: '爱要有你才完美',
            singer: '梁博',
            add: '',
            collection: '',
            del: ''
        }
    ]
    let colorArr = ['#F7FFFF', '#ffffff']

    let list = document.getElementsByClassName('list')[0]
    let checkAll = document.getElementsByClassName('checkbox')[0]
    let oBtn = document.getElementsByClassName('btn')
    let allOnoff = false
    let num = 0

    function init (index) {
        let li = getElement('li', 'item')
        let checkBox = getElement('span', 'checkbox')
        let songName = getElement('span', 'song-name')
        let singer = getElement('span', 'singer')

        let onOff = false
        let oldColor = ''

        li.appendChild(checkBox)
        li.appendChild(songName)
        li.appendChild(singer)

        songName.innerHTML = arrData[index].name
        singer.innerHTML = arrData[index].singer
        if (index % 2) {
            li.style.backgroundColor = colorArr[1]
        } else {
            li.style.backgroundColor = colorArr[0]
        }
        oldColor = li.style.backgroundColor


        if (allOnoff) {
            onOff = true
        }
        update()

        function update() {
            if (onOff) {
                if (num < arrData.length - 1) {
                    num++
                    checkBox.classList.add('checked')
                    li.style.backgroundColor = '#EFEFEF'
                    if (num == arrData.length - 1) {
                        allOnoff = true
                        checkAll.classList.add('checked')
                    }
                }

            } else {
                if (num > -1) {
                    num--
                    checkBox.classList.remove('checked')
                    li.style.backgroundColor = oldColor
                    allOnoff = false
                    checkAll.classList.remove('checked')
                }
            }

        }

        li.onclick = function () {
            onOff = !onOff
            update()
        }
        /* console.log(li) */
        return li
    }

    for (let i = 0; i < arrData.length; i++) {
        list.appendChild(init(i))
    }
    checkAll.onclick = function () {
        allOnoff = !allOnoff
        if (allOnoff) {
            checkAll.classList.add('checked')
            for (let i = 0; i < arrData.length; i++) {
                init(i)
            }
            num = arrData.length - 1
        } else {
            checkAll.classList.remove('checked')
            for (let i = 0; i < arrData.length; i++) {
                init(i)
            }
            num = 0
        }
    }
}
