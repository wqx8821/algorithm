# 堆
一个完全二叉树
js不存在堆的数据结构——使用数组模拟
————可快速获得第n个 最大最小值
## 最小堆的实现

插入（O(logK)）： 尾部插入，然后上移直到插入值小于或等于堆顶元素（最小堆）
删除堆顶（O(logK)）： 尾部元素替换堆顶，然后下移直到子节点大于等于这个新堆顶（直接删除堆顶会破坏堆的结构）
获取堆顶： 返回数组的头部
获取堆的的大小： 返回数组的长度

```
// 最小类堆 （堆是一个完全二叉树，且只有最小和最大堆）
class MinHeap {
  constructor() {
    this.heap = []
  }
  // 获取父节点下标的方法
  getParentIndex(i) {
    // 获取父节点的公式 (i-1) / 2
    return (i-1) >> 1
  }
  // 获取左侧下标的方法
  getLeftIndex(i) {
    // 获取左侧的公式 i * 2 + 1
    return i * 2 + 1
  }
  // 获取右侧下标的方法
  getRightIndex(i) {
    // 获取右侧的公式 i * 2 + 2
    return i * 2 + 2
  }
  // 交换的方法封装
  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }
  // 上移操作的封装
  shiftUp(index) {
    // 递归出口
    if(index == 0) return;
    // 父节点下标
    const parentIndex = this.getParentIndex(index)
    // 当前值大于父节点就交换
    if(this.heap[index] < this.heap[parentIndex]) {
      // 封装一个交换的方法
      this.swap(parentIndex, index);
      // 递归判断
      this.shiftUp(parentIndex)
    }
  }
  // 插入操作 将值插入堆的底部 然后上移：与父节点交换直到父节点小于等于插入的值
  // 大小为k的堆 复杂度O(log K)
  inset(value) {
    // 将值插入堆的底部
    this.heap.push(value)
    // 封装一个上移的方法
    this.shiftUp(this.heap.length - 1)
  }

  shiftDown(index) {
    // 获取左右节点
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    // 当前节点大于 左侧节点 就交换
    if(this.heap[leftIndex]< this.heap[index]) {
      this.swap(leftIndex, index);
      // 递归找寻自己合适的位置
      this.shiftDown(leftIndex);
    }
    // 当前节点大于 右侧节点 就交换
    if(this.heap[rightIndex]< this.heap[index]) {
      this.swap(rightIndex, index);
      // 递归找寻自己合适的位置
      this.shiftDown(rightIndex);
    }
  }
  // 删除堆顶
  pop() {
    this.heap[0] = this.heap.pop();
    // 下移操作
    this.shiftDown(0);
  }

  // 获取堆顶
  peek() {
    return this.heap[0]
  }
  // 获取堆的大小
  size() {
    return this.heap.length
  }
}

const h = new MinHeap();

h.inset(3)
h.inset(5)
h.inset(1)
h.pop()
```
