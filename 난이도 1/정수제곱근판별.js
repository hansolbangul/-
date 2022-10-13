// 난이도 1, 정수 제곱근 판별

function solution(n) {

  var answer = -1

  for (var i = 1; i <= n; i++) {
    if (i * i === n) {
      answer = i + 1
      break
    } else if (i * i > n * n) {
      break
    }
  }

  return answer === -1 ? answer : answer * answer

}