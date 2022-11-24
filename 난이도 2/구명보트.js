// 난이도 2, 구명보트
function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a)
  for (let i = 0, j = people.length - 1; i <= j; i++, answer++) {
    if (people[i] + people[j] <= limit) {
      j--
    }
  }
  return answer;
}

// 틀린 풀이 - 시간 에러..
// function solution(people, limit) {
//   var answer = 0;
//   people.sort((a, b) => b - a)
//   while(people.length > 0){
//       const sub = limit - people.splice(0, 1)[0]
//       if(sub <= people.at(-1)) {
//              people.pop()
//       }
//       answer++
//   }
//   return answer;
// }