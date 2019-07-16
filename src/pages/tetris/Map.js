/**
 * 地图类
 * @param n 纵向的length
 * @param m 横向的length
 * 放'9'是为了让方块不再运动
 * @constructor
 */
function Map(id, n, m) {
    this.arr = []
    this.bottomArr = []
    this.id = id
    this.n = n
    this.m = m
    this.init()
    this.maxtrix = this.arr
}

/**
 * 随机出现地图最后三行的数字
 * @param n
 * @param m
 */
Map.prototype.init = function () {
    for (let i = 0; i < this.n; i++) {
        let subArr = []
        for (let j = 0; j < this.m; j++) {
            subArr.push(0)
        }
        subArr.unshift('9')
        subArr.push('9')
        this.arr.push(subArr)
    }
    for (let i = 0; i < this.m; i++) {
        this.bottomArr.push('9')
    }
    this.arr.push(this.bottomArr)
    this.last = [
        this.arr[this.arr.length - 2],
        this.arr[this.arr.length - 3],
        this.arr[this.arr.length - 4]
    ]
    this.last.forEach(item => {
        for (let i = 0; i < this.m; i++) {
            let number = parseInt(Math.random() * 7)
            item.splice(i + 1, 1, number)
        }
    })
}
/**
 * 渲染地图到table
 */
Map.prototype.render = function () {
    for (let row = 0; row < this.n; row++) {
        for (let col = 0; col < this.m; col++) {
            if (this.maxtrix[row][col + 1] != 0) {
                this.id.tds[row][col].className = 'block' + this.maxtrix[row][col + 1]
            }
        }
    }
}
/**
 * 检查地图是否满行
 *
 */
Map.prototype.check = function () {
    this.scores = 0
    this.scoresArr = [0, 1, 3, 6, 10]
    for (let row = 0; row < this.n; row++) {
        let subArr = []
        for (let j = 0; j < this.m; j++) {
            subArr.push(0)
        }
        subArr.unshift('9')
        subArr.push('9')
        //如果地图整行没有0，那么消行
        if (this.maxtrix[row].indexOf(0) == -1) {
            this.scores++
            this.maxtrix.splice(row, 1)
            this.maxtrix.unshift(subArr)
        }
    }
}
export {Map}

