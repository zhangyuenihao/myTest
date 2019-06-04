window.onload = function () {
    var oul = document.getElementsByTagName('ul')[0]
    var oLi = oul.getElementsByTagName('li')
    var p = document.getElementsByTagName('p')
    var arrNum = ['0', '0', '0', '0', '0']
    var arrPrice = ['12.5', '12', '15', '13', '20']
    var count = 0
    var total = 0
    var maxprice = 0
    var arr = [0]

    function init(li, index) {
        var btn = li.getElementsByTagName('input')
        var oStrong = li.getElementsByTagName('strong')[0]
        var span = li.getElementsByTagName('span')
        var num = 0
        var price = 0

        function rander() {
            arrNum[index] = num
            oStrong.innerHTML = arrNum[index]
            span[0].innerHTML = arrPrice[index] + '元'
            span[1].innerHTML = num * parseFloat(span[0].innerHTML) + '元'
            maxprice = arr.sort().reverse()[0]
            p[0].innerHTML = '商品合计共：' + count + '件，共花费了：' + total + '元'
            p[1].innerHTML = '其中最贵的商品单价是：' + maxprice + '元'
        }

        rander()
        btn[0].onclick = function () {
            num++
            count++
            total += parseFloat(span[0].innerHTML)
            price = parseFloat(span[0].innerHTML)
            arr.push(price)
            rander()
        }
        btn[1].onclick = function () {
            if (num > 0) {
                num--
                count--
                total -= parseFloat(span[0].innerHTML)
                price = parseFloat(span[0].innerHTML)
                if (arr.indexOf(price) !== -1) {
                    arr.splice(arr.indexOf(price), 1)
                }
                rander()
            }
        }
    }

    for (var i = 0; i < oLi.length; i++) {
        init(oLi[i], i)
    }

}