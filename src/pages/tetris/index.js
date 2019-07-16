import './index.scss'
import {Block} from './Block'
import {Map} from './Map'
import {Prevision} from './prevision'

// 创建一个Table类
function Table(id, rowLength, colLength) {
    let table = document.getElementById(id)
    this.tds = []
    this.rLength = rowLength
    this.cLength = colLength
    for (let row = 0; row < this.rLength; row++) {
        let oTr = document.createElement('tr')
        table.appendChild(oTr)
        this.trs = []
        for (let col = 0; col < this.cLength; col++) {
            let oTd = document.createElement('td')
            oTr.appendChild(oTd)
            this.trs.push(oTd)
        }
        this.tds.push(this.trs)
    }
}

// 创建主要table
let table = new Table('main', 20, 12)
// 创建前置table
// 地图实例化，并渲染到主要table
let prevision = new Table('prevision', 4, 4)
let map = new Map(table, 20, 12)
map.render()
// 实例化一个前置块，并渲染到前置table
let pre = new Prevision(prevision)
// 实例一个块，把最先渲染的前置块渲染到主要table
let block = new Block(pre, table, map)
block.render()
// 产生一个新的预览图
pre = new Prevision(prevision)

// 添加事件
document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37:
            block.goLeft()
            break
        case 38:
            block.goChange()
            break
        case 39:
            block.goRight()
            break
        case 40:
            block.goDown()
            break
        case 32:
            while (block.goDown()) {

            }
            break
    }
}
let framesBox = document.getElementsByClassName('framesBox')[0]
let timeBox = document.getElementsByClassName('timeBox')[0]
let scoreBox = document.getElementsByClassName('scoreBox')[0]
let frames = 0
let t = 0
let score = 0
//先检测地图是否满行如果满行则清行
map.check()
score += map.scoresArr[map.scores]
let timer = setInterval(function () {
    frames++
    if (frames % 2 == 0) {
        t++
    }
    //每帧清屏
    for (let row = 0; row < table.rLength; row++) {
        for (let col = 0; col < table.cLength; col++) {
            table.tds[row][col].className = ''
        }
    }

    //如果不再往下走，固定住了，那么渲染到地图，产生一个新的block，产生新的预览图
    if (!block.goDown()) {
        block.renderMap()
        //如果满行则消行
        map.check()
        score += map.scoresArr[map.scores]
        block = new Block(pre, table, map)
        pre = new Prevision(prevision)
    }
    if (!block.gameOver()) {
        clearInterval(timer)
    }
    map.render()
    pre.render()
    block.render()
    framesBox.innerHTML = '帧编号:' + frames
    timeBox.innerHTML = '时间：' + t + '秒'
    scoreBox.innerHTML = '分数：' + score + '分'
}, 500)

