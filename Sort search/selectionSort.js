// 选择排序
// 自定义方法挂载到原型链
Array.prototype.selectionSort = function () {
  for (let i=0; i<this.length; i++) {
    let indexMin = i;
    for (let j=i; j<this.length; j++) {
      if(arr[indexMin]>arr[j]) {
        indexMin = j;
      }
    }
    [arr[indexMin], arr[i]] = [arr[i], arr[indexMin]]
  }
  return arr;
}

let arr = [4,3,5,2]
arr.selectionSort()