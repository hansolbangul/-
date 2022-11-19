// 난이도 2, 기능개발
function solution(progresses, speeds) {
  var answer = [];
  const works = progresses.map((item, index) => Math.ceil((100 - item) / speeds[index]))
  let speed = works[0]
  let count = 1
  for (let i = 1; i <= works.length; i++) {
    if (i === works.length) {
      answer.push(count)
    } else if (speed >= works[i]) {
      count++
    } else {
      speed = works[i]
      answer.push(count)
      count = 1
    }
  }
  return answer;
}