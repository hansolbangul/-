// 난이도 2, 최댓값과 최솟값

function solution(s) {
  const arr = s.split(" ").map(Number);
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}
