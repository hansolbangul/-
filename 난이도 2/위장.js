// 난이도 2, 위장 
function solution(clothes) {
  let map = {}
  let answer = 1
  clothes.forEach(([name, type], index) => {
    map[type] = (map[type] || 1) + 1
  })

  for (let key in map) {
    answer *= map[key]
  }

  return answer - 1
}