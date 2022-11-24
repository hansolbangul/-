// 난이도 2, 피로도 
function solution(k, dungeons) {
  var answer = [];
  const visited = Array.from({ length: dungeons.length }, () => 0)

  const dfs = (sub, cnt) => {
    answer.push(cnt)
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && sub >= dungeons[i][0]) {
        visited[i] = 1
        dfs(sub - dungeons[i][1], cnt + 1)
        visited[i] = 0
      }
    }
  }

  dfs(k, 0)

  return Math.max(...answer);
}

// 틀린 점수 3개 틀림..

// function solution(k, dungeons) {
//   var answer = 0;
//   const sort = dungeons.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))

//   for (let i = 0; i < sort.length; i++) {
//     if (k >= sort[i][0]) {
//       k -= sort[i][1]
//       answer++
//     }
//   }

//   return answer;
// }
