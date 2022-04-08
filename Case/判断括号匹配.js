// 栈 方法一 抽离函数

let str = '{1{2(3)4(5[6])}}'

const isMatch = (left, right) => {
  if (left === '(' && right === ')') return true
  if (left === '{' && right === '}') return true
  if (left === '[' && right === ']') return true
  return false
}

function mathBracket(str) {
  if (str.length & 1) return false;
  const stack = [];
  const leftStr = '({['
  const rightStr = ')}]'

  for (let s of str) {
    if (leftStr.includes(s)) {
      stack.push(s)
    } else if (rightStr.includes(s)) {
      let top = stack[stack.length - 1]
      if (isMatch(top, s)) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0;
}

console.log(mathBracket(str));

// 栈 方法二 不抽离函数
var isValid = function(s) {
  if(s.length % 2 === 1) return false;

  let stack = [];
  for(let i = 0; i< s.length; i++) {
      let t = s[i]
      if(t == '(' || t == '{' || t == '[') {
          stack.push(t)
      } else {
          let top = stack[stack.length - 1];
          if(
              (top == '(' &&  t == ')') ||
              (top == '{' &&  t == '}') ||
              (top == '[' &&  t == ']') 
          ) {
              stack.pop(top)
          } else {
              return false
          }
      }
  }
  return !stack.length
};