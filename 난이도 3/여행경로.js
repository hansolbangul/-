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