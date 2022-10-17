// 난이도 2, 택배상자

function solution(order) {
  let temp = []
  let answer = 0;
  let index = 1

  for (answer; answer < order.length;) {
    if (index === order[answer]) {
      index++
      answer++
    } else if (index < order[answer]) {
      temp.push(index)
      index++
    } else if (index > order[answer]) {
      const pop = temp.pop()
      if (pop === order[answer]) {
        answer++
      } else {
        break
      }
    }

  }
  return answer;
}