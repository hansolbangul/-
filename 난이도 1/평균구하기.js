// 난이도 1, 평균구하기

function solution(arr) {
  var answer = 0;
  // arr.map(item => {answer += item})

  return arr.reduce((acc, cur) => acc += cur, 0) / arr.length;
}