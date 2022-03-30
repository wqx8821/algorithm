// 冒泡排序
// 自定义方法挂载到原型链
Array.prototype.bubbleSort= function () {
  for (let i=0; i<this.length - 1; i++) {
    for (let j=0; j<this.length - 1 - i; j++) {
      // 判断相邻的大小 决定是否需要交换
      if(this[j] > this[j+1]) {
        [this[j], this[j+1]] = [this[j+1], this[j]]
      }
    }
  }
}

let arr = [2,3,5,4]
arr.bubbleSort()