import './index.scss'

window.onload = function () {
    var main = document.getElementsByClassName('main')[0]
    var item = document.getElementsByClassName('item')

    function init(item) {
        var list = item.getElementsByClassName('list')[0]
        var msg = item.getElementsByClassName('msg')[0]
        var editIcon = item.getElementsByClassName('edit-icon')[0]
        var text = item.getElementsByClassName('text')[0]
        var save = item.getElementsByClassName('save')[0]
        var cancle = item.getElementsByClassName('cancle')[0]


        editIcon.onclick = function () {
            list.style.top = -40 + 'px'
            text.value = msg.innerHTML
            console.log(list)
        }

        save.onclick = function () {
            list.style.top = 0 + 'px'
            msg.innerHTML = text.value
        }
        cancle.onclick = function () {
            list.style.top = 0 + 'px'

        }
    }

    for (var i = 0; i < item.length; i++) {
        init(item[i])
    }
}
