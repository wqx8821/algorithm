// 插入排序

// 自定义方法挂载到原型链
Array.prototype.insertionSort = function () {
  for (let j = 1; j < this.length; j++) {
    const temp = this[j]
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1]
      } else {
        break
      }
      j--;
    }
    this[j] = temp
  }
}

let arr = [2, 3, 5, 4, 1]
arr.insertionSort()
