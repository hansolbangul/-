//난이도 1, 자리수 더하기

function solution(n) {
  return String(n).split('').reduce((acc, cur) => acc += Number(cur), 0)
}