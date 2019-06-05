import './index.scss'

window.onload = function () {
    var oItem = document.getElementsByClassName('item')
    var image = document.getElementsByClassName('image')[0]
    var info = document.getElementsByClassName('info')[0]
    var oInfoitem = document.getElementsByClassName('info-item')
    var arrImg = ['/images/selection/icon-1.png', '/images/selection/icon-2.png', '/images/selection/icon-3.png', '/images/selection/icon-4.png']
    var arrText = ['最热团购', '商城特惠', '名品推荐', '缤纷活动']
    var arrInfo = [['雅诗兰黛修护膏', '雅诗兰黛花样唇膏', '倩碧卓越润肤乳'],
        ['雅诗兰黛修护膏', '雅诗兰黛花样唇膏', '倩碧卓越润肤乳', '第二页的'],
        ['雅诗兰黛修护膏', '雅诗兰黛花样唇膏', '倩碧卓越润肤乳', '第二页的', '第三页的'],
        ['雅诗兰黛修护膏', '雅诗兰黛花样唇膏', '倩碧卓越润肤乳', '第四页的']]
    var arrImg2 = [['/images/selection/21.jpg', '/images/selection/22.jpg', '/images/selection/23.jpg'],
        ['/images/selection/25.jpg', '/images/selection/22.jpg', '/images/selection/23.jpg', '/images/selection/24.jpg'],
        ['/images/selection/26.jpg', '/images/selection/22.jpg', '/images/selection/23.jpg', '/images/selection/24.jpg', '/images/selection/21.jpg'],
        ['/images/selection/24.jpg', '/images/selection/22.jpg', '/images/selection/23.jpg', '/images/selection/24.jpg']]
    var oldItem
    var oldInfoitem

    oldItem = oItem[0]
    oldItem.classList.add('active')


    function initItem(item, index) {
        var imgIcon = item.getElementsByTagName('img')[0]
        var text = item.getElementsByClassName('text')[0]
        imgIcon.src = arrImg[index]
        text.innerHTML = arrText[index]


        item.onclick = function () {
            initContent(index)
            oldItem.classList.remove('active')
            this.classList.add('active')
            oldItem = this
        }
    }

    function initContent(index) {
        image.src = arrImg2[index][0]
        info.innerHTML = ''
        for (var i = 0; i < arrInfo[index].length; i++) {
            info.innerHTML += '<li class="info-item">' + arrInfo[index][i] + '</li>'
        }
        oldInfoitem = oInfoitem[0]
        oldInfoitem.classList.add('active')
        for (var i = 0; i < oInfoitem.length; i++) {
            oInfoitem[i].onclick = (function (count) {

                return function () {
                    image.src = arrImg2[index][count]
                    oldInfoitem.classList.remove('active')
                    this.classList.add('active')
                    oldInfoitem = this
                }
            })(i)
        }
    }

    initContent(0)
    for (var i = 0; i < oItem.length; i++) {
        initItem(oItem[i], i)
    }
}
