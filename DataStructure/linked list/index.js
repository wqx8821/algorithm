// 对象模拟 链表

const n1 = {
  value: 1,
  next: n2
}
const n2 = {
  value: 1,
  next: n3,
  prev: n1
}
const n3 = {
  value: 1,
  prev: n2

}

// 链表遍历
// 声明变量 指向链表头部
let p = n1
while (p) {
  console.log(p.value);
  P = p.next
}

// 插入链表
const n4 = {value: 4}
n2.next = n4
n4.next = n3

// 删除链表 (删除新插入的元素)
n2.next = n3

