// 归并排序

// 自定义方法挂载到原型链
Array.prototype.mergeSort = function () {
  // 递归拆分
  const rec= (arr) => {
    // 递归出口
    if(arr.length === 1) return arr;
    // 拆分数组
    const mid = Math.floor(arr.length)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)
    rec(left);
    rec(right)
  }
}

let arr = [2, 3, 5, 4, 1]
arr.mergeSort()
