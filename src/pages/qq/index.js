import './index.scss'

window.onload = function () {
    var item = document.getElementsByClassName('item')
    var title = document.getElementsByClassName('title')
    var itemList = document.getElementsByClassName('item-list')
    var user = null
    var arrUser = []
    var num = 0
    var num2 = 0
    var oldtitle = null
    var olduser = null

    for (var i = 0; i < title.length; i++) {
        title[i].index = i
        title[i].onclick = function () {
            oldtitle = title[num]
            oldtitle.className = 'title'
            itemList[num].style.display = 'none'
            this.className += ' active'
            itemList[this.index_bak].style.display = 'block'
            num = this.index_bak
        }
    }
    for (var i = 0; i < item.length; i++) {
        user = item[i].getElementsByClassName('user')
        for (var j = 0; j < user.length; j++) {
            arrUser.push(user[j])
        }
    }

    for (var i = 0; i < arrUser.length; i++) {
        arrUser[i].index = i
        arrUser[i].onclick = function () {
            olduser = arrUser[num2]
            olduser.className = 'user'
            this.className += ' active'
            num2 = this.index_bak
        }
    }
}
