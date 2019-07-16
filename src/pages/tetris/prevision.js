import {BlockType} from "./BlockType";

function Prevision(id) {
    this.id = id
    //获取所有的块样式有7种["L", "J", "O", "I", "Z", "S", "T"]
    this.arr = []
    for (var k in BlockType) {
        this.arr.push(k)
    }
    this.init()
    this.render()
}

/**
 * 随机产生一个前置块
 */
Prevision.prototype.init = function () {
    //随机获取其中一种样式
    this.type = this.arr[parseInt(Math.random() * (this.arr.length - 1))]
    //获取样式的所有矩阵
    this.allMaxtrix = BlockType[this.type]
    //随机获取样式的方向
    this.direction = parseInt(Math.random() * (this.allMaxtrix.length - 1))
    this.maxtrix = this.allMaxtrix[this.direction]
}
/**
 * 渲染前置块到前置table
 */
Prevision.prototype.render = function () {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            //每次先清空后渲染
            this.id.tds[row][col].className = ''
            if (this.maxtrix[row][col] != 0) {
                this.id.tds[row][col].className = 'block' + this.maxtrix[row][col]
            }
        }
    }
}
export {
    Prevision
}
