// 난이도 2, 최솟값 만들기

function solution(A, B) {
  var answer = 0;

  const min = A.sort((a, b) => a - b);
  const max = B.sort((a, b) => b - a);

  min.map((item, index) => {
    answer += item * max[index];
  });

  return answer;
}
