// 난이도 1, 약수의 합

function solution(n) {
  var answer = 0;
  var num = 1

  var arr = new Array(n).fill(0)

  arr.map(() => {
    if (n % num === 0) answer += num
    num++
  })


  return answer;
}