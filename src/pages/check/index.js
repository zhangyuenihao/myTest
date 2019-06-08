import './index.scss'

const data = [
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

function getElement(tagName, clas) {
    const node = document.createElement(tagName)
    node.className = clas
    return node
}

function toggleSelect() {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
        return -1
    }
    this.classList.add('active')
    return 1
}

/**
 * 渲染dom 元素
 * @param data
 */
function renderList(data) {
    const domArray = []
    const warp = document.getElementById('list')
    const oFragmeng = document.createDocumentFragment()
    const statusArray = ['odd', 'evv']

    data.forEach((item, index) => {
        const li = getElement('li', `item ${statusArray[index % 2]}`)
        const checkBox = getElement('span', 'checkbox')
        const songName = getElement('span', 'song-name')
        const singer = getElement('span', 'singer')
        songName.innerText = item.name
        singer.innerText = item.singer
        li.appendChild(checkBox)
        li.appendChild(songName)
        li.appendChild(singer)
        oFragmeng.appendChild(li)
        domArray.push(li)
    })
    warp.appendChild(oFragmeng)

    return domArray
}

function bindEvent(domArray) {
    let selectedCount = 0
    const totalCount = domArray.length
    const selectAllBtn = document.getElementById('selectAll')


    /**
     *
     * @param flag 是否全选
     */
    function toggleSelectBtn(flag) {
        flag ? this.classList.remove('active') : this.classList.add('active')
    }

    domArray.forEach(item => {
        item.onclick = function () {
            selectedCount += toggleSelect.call(item)
            toggleSelectBtn.call(selectAllBtn, selectedCount < totalCount)
        }
    })
    selectAllBtn.onclick = function () {
        const isSelect = selectAllBtn.classList.contains('active')
        domArray.forEach(item => {
            if (isSelect) {
                item.classList.remove('active')
            } else {
                item.classList.add('active')
            }
        })
        toggleSelectBtn.call(selectAllBtn, isSelect)
        selectedCount = isSelect ? 0 : totalCount
    }
}

function init() {
    // 渲染列表
    const domArray = renderList(data)
    bindEvent(domArray)
}

init()
