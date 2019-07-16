//俄罗斯块
import {Prevision} from "./prevision";

function Block(obj, id, map) {
    this.id = id
    this.map = map
    //让Block和obj的的矩形重合
    //获取矩形集合
    this.allMaxtrix = obj.allMaxtrix
    //矩形方向
    this.direction = obj.direction
    //矩形
    this.maxtrix = this.allMaxtrix[this.direction]
    //在主要table的位置
    this.row = 0
    this.col = 4
}

/**
 * 渲染block到主要table
 */
Block.prototype.render = function () {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (this.maxtrix[row][col] != 0) {
                this.id.tds[row + this.row][col + this.col].className = 'block' + this.maxtrix[row][col]
            }
        }
    }
}
/**
 * 判断游戏是否结束，一诞生就卡住了
 *
 */
Block.prototype.gameOver = function () {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (this.maxtrix[row][col] != 0 && this.map.maxtrix[row + this.row][col + 1 + this.col] != 0) {
                alert('GAME OVER!')
                return false
            }
        }
    }
    return true
}
/**
 * 块向下运动
 */
Block.prototype.goDown = function () {
    //判断向下运动有冲突则停止
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (this.maxtrix[row][col] != 0 && this.map.maxtrix[row + this.row + 1][col + 1 + this.col] != 0) {
                return false
            }
        }
    }
    this.row++
    //判断是否停止运动
    return true
}
/**
 * 块静止以后渲染map
 */
Block.prototype.renderMap = function () {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (this.maxtrix[row][col] != 0) {
                this.map.maxtrix[row + this.row][col + 1 + this.col] = this.maxtrix[row][col]
            }
        }
    }
}
/**
 * 向左运动
 *
 */
Block.prototype.goLeft = function () {
    //判断运动有冲突则停止
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (this.maxtrix[row][col] != 0 && this.map.maxtrix[row + this.row][col + 1 + this.col - 1] != 0) {
                return
            }
        }
    }
    this.col--
}
/**
 * 向右运动
 *
 */
Block.prototype.goRight = function () {
    //判断运动有冲突则停止
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (this.maxtrix[row][col] != 0 && this.map.maxtrix[row + this.row][col + 1 + this.col + 1] != 0) {
                return
            }
        }
    }
    this.col++
}
/**
 * 变形
 */
Block.prototype.goChange = function () {
    //备份老的方向如果变形不成功还用老的
    this.olddirection = this.direction
    this.direction++
    if (this.direction > this.allMaxtrix.length - 1) {
        this.direction = 0
    }
    //矩形
    this.maxtrix = this.allMaxtrix[this.direction]
    //设定左边有阻挡则不变形
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (this.maxtrix[row][col] != 0 && this.map.maxtrix[row + this.row][col + 1 + this.col] != 0) {
                this.direction = this.olddirection
                this.maxtrix = this.allMaxtrix[this.direction]
                return
            }
        }
    }
}
export {Block}
