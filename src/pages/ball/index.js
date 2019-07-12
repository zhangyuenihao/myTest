import './index.scss'

let warp = document.getElementsByClassName('warp')[0]
let w = warp.clientWidth
let h = warp.clientHeight
console.log(w, h)

function Ball(x, y, r, color) {
    this.x = x
    this.y = y
    this.r = r
    this.color = color || 'blue'
    this.init()
    this.dx = parseInt(Math.random() * -20) + 10
    this.dy = parseInt(Math.random() * -20) + 10
    ballArr.push(this)
}

// 初始化
Ball.prototype.init = function () {
    // 创建dom对象
    this.dom = document.createElement('p')
    // 上树
    warp.appendChild(this.dom)
    this.dom.style.left = this.x - this.r + 'px'
    this.dom.style.top = this.y - this.r + 'px'
    this.dom.style.backgroundColor = this.color
    this.dom.style.width = this.r * 2 + 'px'
    this.dom.style.height = this.r * 2 + 'px'
}
// 更新
Ball.prototype.update = function () {
    this.x += this.dx
    this.y += this.dy
    if (this.x > w - this.r) {
        this.x = w - this.r
        this.dx = -this.dx
    } else if (this.x < this.r) {
        this.x = this.r
        this.dx = -this.dx
    }
    if (this.y > h - this.r) {
        this.y = h - this.r
        this.dy = -this.dy
    } else if (this.y < this.r) {
        this.y = this.r
        this.dy = -this.dy
    }
}
// 渲染
Ball.prototype.render = function () {
    this.dom.style.left = this.x - this.r + 'px'
    this.dom.style.top = this.y - this.r + 'px'
}


let ballArr = []
new Ball(300, 400, 10, 'red')
new Ball(100, 100, 20, 'yellow')
new Ball(200, 80, 30, 'purple')
new Ball(200, 80, 5)
setInterval(function () {
    for (let i = 0; i < ballArr.length; i++) {
        ballArr[i].update()
        ballArr[i].render()
    }
}, 20)
