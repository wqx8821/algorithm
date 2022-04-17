冒泡排序（双循环性能不好，不推荐使用）O(n²)
冒泡： 每次将相邻的与上一个比较，大于就交换，像气泡一样冒上去
```js
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
```
选择排序（双循环性能不好，不推荐使用）O(n²)
选择： 找到数组的最小值，选中并放入第一位，选择第二小值放入第二位（以此类推 n-1轮）
找最小值的方法： 假设第一个元素为最小值，依次与后续元素比较，比他小就交换(并以交换后的当作最小值继续比较，一轮下来就找到了最小值)，依此类推
```js
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
```

插入排序O(n²) 数据小的时候性能比上两个好些
从第二个数往前比，比它大就往后排，然后把自己插入合适的位置 依次类推

```js
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
```

归并排序O(logn) 性能较好(火狐浏览器sort采用该方法)
步骤：
  分： 把数组劈成两半，再递归把子数组劈成两半，直到分成一个个单独的数
  合： 把两个数合并为有序数组，再对有序数组进行合并，直到合并为一个数组
思路： 
  新建一个 空数组res 用来存储最终排序后的数组
  比较两个有序数组的头部，较小者出队 并推入res中
  如果两个数组还有值，就重复第二步




二分查找O(logn)





