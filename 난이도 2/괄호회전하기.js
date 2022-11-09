// 난이도 2, 괄호 회전하기
function solution(s) {
  var answer = 0;
  const mapping = { "{": "}", "(": ")", "[": "]" }
  const arr = s.split('')

  const stringTrue = (array) => {
    const queue = []
    let result = true
    for (let i = 0; i < array.length; i++) {
      if (array[i] === '{' || array[i] === '(' || array[i] === '[') {
        queue.push(array[i])
      } else {
        const pop = queue.pop()
        if (mapping[pop] !== array[i]) {
          result = false
          break
        }
      }
    }
    return result && queue.length === 0
  }

  for (let i = 0; i < arr.length; i++) {
    const result = stringTrue(arr)
    if (result) answer++

    arr.push(arr.shift())
  }
  return answer;
}
