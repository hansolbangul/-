// 난이도 2, 혼자 놀기의 달인

function solution(cards) {
  var answer = [];
  cards.forEach((value, index) => {
    let i = value - 1
    if (value !== 0) {
      for (let count = 1; count <= cards.length;) {
        if (cards[i] === value) {
          cards[i] = 0
          answer.push(count)
          break
        } else {
          count++
          const temp = cards[i] - 1
          cards[i] = 0
          i = temp
        }
      }
    }
  })

  const sort = answer.sort((a, b) => b - a)
  return sort.length > 1 ? sort[0] * sort[1] : 0;
}
