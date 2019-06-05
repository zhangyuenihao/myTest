import './index.scss'

window.onload = function () {
    const dataArry = [
        {
            text: '解密：关于地球与人类的一千零一问',
            dayText: 200,
            weekText: 900,
            allText: 1300,
            imgUrl: '/images/list/31.png'
        }, {
            text: '经典传奇：探索全世界重大历史事件',
            dayText: 190,
            weekText: 800,
            allText: 1000,
            imgUrl: '/images/list/32.png'
        }, {
            text: '眼界：展现普通人的曲折命运与人生',
            dayText: 170,
            weekText: 700,
            allText: 1100,
            imgUrl: '/images/list/33.png'
        }, {
            text: '档案：惊人事件与传奇背景',
            dayText: 160,
            weekText: 600,
            allText: 800,
            imgUrl: '/images/list/34.png'
        }, {
            text: '解密：关于地球与人类的的范德萨发一千零一问',
            dayText: 150,
            weekText: 900,
            allText: 1200,
            imgUrl: '/images/list/35.png'
        }, {
            text: '世纪十最：30个震惊世界的top',
            dayText: 140,
            weekText: 500,
            allText: 700,
            imgUrl: '/images/list/36.png'
        }, {
            text: '身边的好人：警卫员解密好人秘密',
            dayText: 130,
            weekText: 1000,
            allText: 1500,
            imgUrl: '/images/list/37.png'
        }, {
            text: '新电影传奇：每一部电影都的传士大夫离开家奇',
            dayText: 120,
            weekText: 400,
            allText: 600,
            imgUrl: '/images/list/38.png'
        }, {
            text: '档案：解密档案中',
            dayText: 110,
            weekText: 200,
            allText: 400,
            imgUrl: '/images/list/39.png'
        }, {
            text: '纪实系列：讲述社会百态，透视事实人生',
            dayText: 10,
            weekText: 100,
            allText: 200,
            imgUrl: '/images/list/30.png'
        }, {
            text: '解密：关于地球与人类的一千零一问',
            dayText: 20,
            weekText: 30,
            allText: 50,
            imgUrl: '/images/list/31.png'
        }
    ]
    let oButton = document.getElementsByClassName('button')
    let itemList = document.getElementsByClassName('item-list')[0]
    let oItem = document.getElementsByClassName('item')
    let arr = []
    let oldItem
    let oldButton
    let arrBtn = ['dayText', 'weekText', 'allText']
    /**
     * 渲染初始页面
     * */

    function init() {
        for (let i = 0; i < 10; i++) {
            itemList.innerHTML += '<li class="item">\n' +
                '                <div class="introduce brief">\n' +
                '                    <span class="order">' + (1 + i) + '</span>\n' +
                '                    <p class="text"></p>\n' +
                '                </div>\n' +
                '                <div class="introduce detail">\n' +
                '                    <span class="order">' + (1 + i) + '</span>\n' +
                '                    <div class="img-warp">\n' +
                '                        <img src="" alt="">\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </li>'
        }
        oldItem = oItem[0]
        oldItem.classList.add('active')
        oldButton = oButton[0]
        oldButton.classList.add('active')
        arr = dataArry.sort(sortBy(arrBtn[0]))
        for (var i = 0; i < oItem.length; i++) {
            initItem(oItem[i], i)
        }
    }
    init()

    /**
     * 渲染点击button按钮
     */


    for (var i = 0; i < oButton.length; i++) {
        oButton[i].index = i
        oButton[i].onclick = function () {
            oldButton.classList.remove('active')
            this.classList.add('active')
            oldButton = this
            arr = dataArry.sort(sortBy(arrBtn[this.index]))
            for (var i = 0; i < oItem.length; i++) {
                initItem(oItem[i], i)
            }

        }
    }

    /**
     * 渲染页面
     * @param item
     * @param index
     */
    function initItem(item, index) {
        let brief = item.getElementsByClassName('brief')[0]
        let text = brief.getElementsByClassName('text')[0]
        let imgWarp = item.getElementsByClassName('img-warp')[0]
        let img = imgWarp.getElementsByTagName('img')[0]

        text.innerHTML = arr[index].text
        img.src = arr[index].imgUrl
        item.onclick = function () {
            oldItem.classList.remove('active')
            item.classList.add('active')
            oldItem = this
        }

    }

    /**
     * 根据传入的参数重新排列获取的数组
     * @param attr
     * @returns {function(*, *): number}
     */
    function sortBy(attr) {
        return function (a, b) {
            a = a[attr]
            b = b[attr]
            return b - a
        }
    }


}
