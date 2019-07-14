import './index.scss'

function Girl(n, dx, dy) {
    this.x = 0
    this.y = Math.random() * 500
    this.dx = dx
    this.dy = dy
    this.num = 0
    this.n = n
    this.init()
    girlArray.push(this)
}

Girl.prototype.init = function () {
    this.dom = document.createElement('div')
    document.body.appendChild(this.dom)
    this.dom.className = 'girl'
    this.dom.style.left = this.x + 'px'
    this.dom.style.top = this.y + 'px'
    this.posx = this.num * -79
    this.posy = this.n * -108
    this.dom.style.backgroundPosition = this.posx + 'px ' + this.posy + 'px'
}
Girl.prototype.update = function () {
    this.num++
    if (this.num > 7) {
        this.num = 0
    }
    if (this.n > 7) {
        this.n = 0
    }
    this.x += this.dx
    this.y += this.dy
    if (this.x > 800) {
        this.x = 800
        this.lose()
    }
}
Girl.prototype.render = function () {
    this.dom.style.left = this.x + 'px'
    this.dom.style.top = this.y + 'px'
    this.posx = this.num * -79
    this.posy = this.n * -108
    this.dom.style.backgroundPosition = this.posx + 'px ' + this.posy + 'px'
}
Girl.prototype.lose = function () {
    this.dom.parentNode.removeChild(this.dom)
    for (let i = girlArray.length; i >= 0; i--) {
        if (girlArray[i] == this) {
            girlArray.splice(i, 1)
            break
        }
    }
}
let girlArray = []
new Girl (2, 10, 0)
let frames = 0
let timer = setInterval(function () {
    frames++
    frames % 40 == 0 && new Girl( 2, 10, 0)
    for (let i = 0; i < girlArray.length; i++) {
        girlArray[i] && girlArray[i].update()
        girlArray[i] && girlArray[i].render()
    }
}, 100)
