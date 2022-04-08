class Myquere {
  stack1 = []
  stack2 = []

  add(v) {
    this.stack1.push(v)
  }

  delete() {
    let res;

    const stack1 = this.stack1
    const stack2 = this.stack2
    // 将栈一数据暂时存入stack2
    while (stack1.length) {
      const temp = stack1.pop()
      stack2.push(temp)
    }
    // stack出栈
    res = stack2.pop()
    // 数据还给stack1
    while (stack2.length) {
      const temp = stack2.pop()
      stack1.push(temp)
    }
    return res || null
  }

  get length() { 
    return stack1.length
  }
}

// 测试
const q = new Query
q.add(11)
q.add(11)
q.add(11)

console.log(q.length);
console.log(q.delete);
console.log(q.length);
