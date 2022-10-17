// 난이도 2, 다음 큰 숫자

function solution(n) {
  const num = n.toString(2).match(/1/g).length

  do {
    ++n
    if (n.toString(2).match(/1/g).length === num) {
      break
    }
  } while (true)

  return n;
}
