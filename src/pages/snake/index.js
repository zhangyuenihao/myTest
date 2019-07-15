import './index.scss'
//创建贪吃蛇的表格
let table = document.getElementsByTagName('table')[0]
let len = 30
let length = 20
let tds = []

for (let i = 0; i < len; i++) {
    let oTr = document.createElement('tr')
    table.appendChild(oTr)
    let trs = []
    for (let j = 0; j < length; j++) {
        let oTd = document.createElement('td')
        oTr.appendChild(oTd)
        trs.push(oTd)
    }
    tds.push(trs)
}

//创建蛇类

function Snake() {
    this.x = parseInt(Math.random() * len)
    this.y = parseInt(Math.random() * (length - 3)) + 2
    this.body = [{
        x: this.x,
        y: this.y
    }, {
        x: this.x,
        y: this.y - 1
    }, {
        x: this.x,
        y: this.y - 2
    }]
    this.direction = 'Right'
    this.init()
}

Snake.prototype.init = function () {
    this.body.forEach((item) => {
        tds[item.x][item.y].className = 'snakeBody'
    })
    tds[this.body[0].x][this.body[0].y].classList.add('snakeHead')
}
Snake.prototype.update = function () {
    //如果下一个td超出范围，则游戏结束不执行以下操作
    switch (this.direction) {
        case 'Right':
            if (this.body[0].y + 1 > length - 1) {
                this.goDie()
                return
            }
            this.snakeHeade = {
                x: this.body[0].x,
                y: this.body[0].y + 1
            }
            break
        case 'Up':
            if (this.body[0].x - 1 < 0) {
                this.goDie()
                return
            }
            this.snakeHeade = {
                x: this.body[0].x - 1,
                y: this.body[0].y
            }
            break
        case 'Left':
            if (this.body[0].y - 1 < 0) {
                this.goDie()
                return
            }
            this.snakeHeade = {
                x: this.body[0].x,
                y: this.body[0].y - 1
            }
            break
        case 'Down':
            if (this.body[0].x + 1 > (len - 1)) {
                this.goDie()
                return
            }
            this.snakeHeade = {
                x: this.body[0].x + 1,
                y: this.body[0].y
            }
            break
    }
    this.body.unshift(this.snakeHeade)

    if (tds[this.snakeHeade.x][this.snakeHeade.y].className == 'snakeBody') {
        // 如果碰到蛇身则游戏结束
        this.goDie()
    } else if (tds[this.snakeHeade.x][this.snakeHeade.y].className == 'food') {
        //如果碰到食物则尾巴不缩短，并食物的位置更新
        food.creatFood()
        s++
    } else {
        this.last = this.body.pop()
        tds[this.last.x][this.last.y].className = ''
    }
}
Snake.prototype.render = function () {
    this.init()

}
Snake.prototype.goDie = function () {
    clearInterval(timer)
    alert('游戏结束,您的分数为' + s)
}

//创建食物类
function Food() {
    this.creatFood()
}

Food.prototype.creatFood = function () {
    do {
        this.x = parseInt(Math.random() * (len - 1))
        this.y = parseInt(Math.random() * (length - 1))
    } while (tds[this.x][this.y].className != '')
    this.posiiton = {
        x: this.x,
        y: this.y
    }
    tds[this.posiiton.x][this.posiiton.y].className = 'food'
}

document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37:
            if (retroSnaker.direction === 'Right') {
                return
            }
            retroSnaker.direction = 'Left'
            break
        case 38:
            if (retroSnaker.direction === 'Down') {
                return
            }
            retroSnaker.direction = 'Up'
            break
        case 39:
            if (retroSnaker.direction === 'Left') {
                return
            }
            retroSnaker.direction = 'Right'
            break
        case 40:
            if (retroSnaker.direction === 'Up') {
                return
            }
            retroSnaker.direction = 'Down'
            break
    }
}
let retroSnaker = new Snake()
let food = new Food()
let time = document.getElementsByClassName('time')[0]
let score = document.getElementsByClassName('score')[0]
let frames = 0
let t = 0
let s = 0
let timer = setInterval(function () {
    frames++
    time.innerHTML = '时间：' + t + '秒'
    score.innerHTML = '分数：' + s
    if (frames % 2 == 0) {
        t++
    }
    retroSnaker.update()
    retroSnaker.render()
}, 500)

