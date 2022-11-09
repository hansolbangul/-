// 난이도 2, 점프와 순간 이동
function solution(n) {
  var ans = 0;

  do {
    if (n % 2) {
      n--
      ans++
    } else {
      n = n / 2
    }
  } while (n > 1)

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  return ans + n;
}