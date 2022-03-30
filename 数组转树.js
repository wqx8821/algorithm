// 多维数组转树
let o = {}
// function tree(arr) {
//   // 准备一个结果数组
//   let result = [];
//   arr.forEach(res => {
//     if(Array.isArray(res)) {
//       result.push({
//         children: tree(res)
//       })
//     } else {
//       result.push({value: res})
//     }
//   })
//   return o.children = result
// }

let arr = [1, [2, 3], [4, 5], 6, [7], 8];
const tree = (item) => {
  if (typeof item === 'number') {
    return { value: item }
  } else if (Array.isArray(item)) {
    return {
      children: item.map(res => tree(res))
    }
  }
}
console.log(tree(arr));

// tree(arr)
// console.log(o);