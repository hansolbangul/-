// 숫자의 표현 -

function solution(n) {
  var answer = 0;
  var num = 1;
  do {
    if (n % num === 0) answer += 1;
    n -= num;
    num++;
  } while (n > 0);
  return answer;
}

solution(15);
