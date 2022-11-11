// 난이도 1 콜라문제
function solution(a, b, n) {
  let answer = 0;
  let other = 0
  do {
    answer += parseInt(n / a) * b
    n = parseInt(n / a) * b + n % a
  } while (n >= a)

  return answer;
}