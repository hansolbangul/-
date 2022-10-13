// 난이도 2, 올바른 괄호

function solution(s) {
  var count = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else {
      if (count === 0) {
        count--;
        break;
      } else {
        count--;
      }
    }
  }

  return count === 0;
}
