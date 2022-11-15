// 난이도 2, 영어 끝말잇기
function solution(n, words) {
  var answer = [0, 0];
  let visit = []
  for (let i = 0; i < words.length; i++) {
    const at = visit.at(-1)
    if (i === 0 || (!visit.includes(words[i]) && at[at.length - 1] === words[i][0])) {
      visit.push(words[i])
    } else {
      answer = [(i + 1) % n === 0 ? n : (i + 1) % n, Math.ceil((i + 1) / n)]
      break
    }
  }

  return answer;
}