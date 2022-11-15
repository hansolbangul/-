// 난이도 3, 야근 지수
function solution(n, works) {
  if (works.reduce((acc, cur) => acc + cur) <= n) return 0
  works = works.sort((a, b) => b - a)

  while (n) {
    const max = works[0]
    for (let i = 0; i < works.length; i++) {
      if (works[i] >= max) {
        works[i]--
        n--
      }
      if (n === 0) break
    }
  }

  return works.reduce((acc, cur) => acc + cur * cur, 0);
}