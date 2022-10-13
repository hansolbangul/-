// 난이도 1, 문자열 내의 p, y 개수

function solution(s) {

  const y = s.toLocaleLowerCase().split('y').length - 1
  const p = s.toLocaleLowerCase().split('p').length - 1

  return y === p;
}