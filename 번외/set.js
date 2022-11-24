// set 사용하기.

// 문제
// 주어진 배열안에 내용들은 정렬되어있다.

const sol = (nums) => {
  // 집합을 하나 만든다.
  const set = new Set()

  for (let i = 0; i < nums.length; i++) {

    for (let j = 0; j < nums[i].length; j++) {
      set.add(nums[i][j])
    }
  }

  return Array.from(set).sort((a, b) => a - b)
}

console.log(sol([[1, 2], [1, 2]])) // 정답 : [1,2]
console.log(sol([[1, 2, 3, 3], [1, 2, 4]])) // 정답 : [1,2,3,4]
console.log(sol([[1, 2, 5, 5], [1, 2, 4, 5], [1, 4, 4, 5, 7]])) // 정답 : [1,2,3,4,5,7]