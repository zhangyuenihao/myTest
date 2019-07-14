import './index.scss'

var W = document.documentElement.clientWidth;
var H = document.documentElement.clientHeight;
window.onresize = function () {
    W = document.documentElement.clientWidth;
    H = document.documentElement.clientHeight;
}
let w = 88
let bgm = document.getElementById('bgm')
let bom = document.getElementById('bom')

//球类
function Balloon() {
    //球出现的位置
    this.x = Math.random() * (W - w)
    this.y = 0
    //1-9分
    this.score = parseInt(Math.random() * 8) + 1
    //增量,分数越多运动越快
    this.dy = this.score
    balloonArray.push(this)
    this.init()
}

Balloon.prototype.init = function () {
    this.dom = document.createElement('div')
    //上树
    document.body.appendChild(this.dom)
    this.dom.className = 'balloon'
    this.dom.style.left = this.x + 'px'
    this.dom.style.bottom = this.y + 'px'
    this.posx = (this.score - 1) % 4 * -95
    this.posy = Math.floor((this.score - 1) / 4) * -120
    this.dom.style.backgroundPosition = this.posx + 'px ' + this.posy + 'px'

    let _this = this
    this.dom.onmousedown = function () {
        bom.src = '/images/balloon/c.wav'
        _this.bomb()
        totalScore += _this.score
    }
}
Balloon.prototype.update = function () {
    this.y += this.dy
    if (this.y > H) {
        bom.src = '/images/balloon/b.wav'
        this.bomb()
    }
}
Balloon.prototype.render = function () {
    this.dom.style.bottom = this.y + 'px'
}
Balloon.prototype.bomb = function () {

    this.dom.style.display = 'none'
    bom.load()
    bom.play()//没有就播放 
    this.dom.parentNode.removeChild(this.dom)
    for (let i = balloonArray.length - 1; i >= 0; i--) {
        if (balloonArray[i] == this) {
            balloonArray.splice(i, 1)
            //只有一个自己找到就不需要找了
            break
        }

    }
}
let balloonArray = []
let frames = 0
let second = 60
let totalScore = 0
let Tframes = document.getElementsByClassName('t-frames')[0]
let Tscore = document.getElementsByClassName('t-score')[0]
let Ttime = document.getElementsByClassName('t-time')[0]


let timer = setInterval(function () {
    frames++
    Tframes.innerHTML = '帧数: ' + frames
    Tscore.innerHTML = '分数: ' + totalScore
    Ttime.innerHTML = '时间还剩: ' + second
    for (let i = 0; i < balloonArray.length; i++) {
        balloonArray[i] && balloonArray[i].update()
        balloonArray[i] && balloonArray[i].render()
    }
    if (frames % 30 == 0) {
        new Balloon()
    }
    if (frames % 50 == 0) {
        second--
    }

    if (second < 0) {
        clearInterval(timer)
        alert('游戏结束！您的分数为：' + totalScore)
    }


}, 20)
