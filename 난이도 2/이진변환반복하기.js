// 이진 변환 반복하기

function solution(s) {
  var answer = [0, 0];
  do {
    answer[0]++;
    var one = s.match(/1/g).length;
    answer[1] += s.length - one;
    s = one.toString(2);
  } while (one !== 1);
  return answer;
}
