// 二分查找 循环

const binary = (nums, target) => {
    const length = nums.length;
    if(length === 0) return -1;
    
    let startIndex = 0;
    let endIndex = length - 1;
    
    // 判断中间值与目标值
    while(startIndex <= endIndex) {
      // 寻找中间值
      let midIndex = Math.floor((startIndex + endIndex) / 2);

      // 中间值大于目标值  就往前查找
      if(nums[midIndex] > target) {
        endIndex = midIndex - 1;
      // 中间值小于目标值  就往后查找
      } else if(nums[midIndex] < target) {
        startIndex = midIndex + 1;
      // 相等就返回对应的索引
      } else {
        return midIndex
      }
    }
}
const n2 = binary([1,2,3,4,5], 4)
console.log(n2);

// 二分查找递归