// 난이도 1, 자연수 뒤집어 배열 만들기

function solution(n) {
  return (n + "").split("").reverse().map(Number);
}
