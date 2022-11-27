// 난이도 2, 방문 길이
function solution(dirs) {
  let position = [0, 0]
  let move = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] }
  let route = new Set()


  for (let dir of dirs) {
    const [x, y] = [position[0] + move[dir][0], position[1] + move[dir][1]]
    if (x > 5 || x < -5 || y > 5 || y < -5) continue
    route.add('' + position[0] + position[1] + '' + x + y)
    route.add('' + x + y + '' + position[0] + position[1])
    position = [x, y]
  }

  return route.size / 2;
}