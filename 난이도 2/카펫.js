// 난이도 2, 카펫

function solution(brown, yellow) {
  var answer = [];
  const sum = brown + yellow

  for (let i = Math.floor(sum / 2); i > 0; i--) {
    if (sum % i === 0) {
      const div = sum / i

      if (div > 2 && i * 2 + (div - 2) * 2 === brown) {
        answer.push(...[i, div])
        break
      }
    }
  }
  return answer;
}

solution(10, 2)
solution(8, 1)
solution(24, 24)