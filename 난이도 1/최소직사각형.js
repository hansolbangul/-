// 난이도 1 최소 직사각형
function solution(sizes) {
  var answer = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

  for (let i = 0; i < sizes.length; i++) {
    const x = Math.max(...sizes[i])
    const y = Math.min(...sizes[i])

    if (x > answer[0]) answer[0] = x
    if (y > answer[1]) answer[1] = y
  }


  return answer[0] * answer[1];
}