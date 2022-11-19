// 난이도 3, 여행경로
function solution(tickets) {
  let queue = []

  const dfs = (startTarget, sliceTickets, routeTickets) => {
    if (sliceTickets.length > 0) {

      sliceTickets.forEach(([start, end], index) => {
        if (startTarget === start) {
          dfs(end, [...sliceTickets.slice(0, index), ...sliceTickets.slice(index + 1)], [...routeTickets, startTarget])
        }
      })
    } else {
      queue.push([...routeTickets, startTarget])
    }
  }

  dfs("ICN", tickets, [])

  return queue.sort()[0];
}

// function solution(tickets) {
//   var answer = [], length = tickets.length;
//   let visited = Array.from({length: length}, () => 0)
  
//   const dfs = (v, target, routes) => {
//       if(v === length) {
//           answer.push(routes)
//       } else {
//           for(let i = 0; i < length; i++){
//               const [start, end] = tickets[i]
//               if(!visited[i] && target === start){
//                   visited[i] = 1
//                   dfs(v + 1, end, [...routes, end])
//                   visited[i] = 0
//               }
//           }
//       }
//   }
  
//   dfs(0, 'ICN' , ["ICN"])
  
//   return answer.sort()[0];
// }