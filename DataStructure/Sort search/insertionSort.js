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


// 希尔排序
// 希尔排序时间复杂度是 O(n^(1.3-2))，空间复杂度为常数阶 O(1)。
// 希尔排序没有时间复杂度为 O(n(logn)) 的快速排序算法快 
// 因此对中等大小规模表现良好，但对规模非常大的数据排序不是最优选择


