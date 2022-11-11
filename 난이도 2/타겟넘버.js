// 난이도 2, 타겟넘버 DFS
function solution(numbers, target) {
  var answer = 0;

  const dfs = (count, sum) => {
    if (count === numbers.length) {
      if (sum === target) {
        answer++
      }
      return
    }

    dfs(count + 1, sum - numbers[count])
    dfs(count + 1, sum + numbers[count])
  }

  dfs(0, 0)

  return answer;
}

solution([1, 1, 1, 1, 1], 3)
solution([4, 1, 2, 1], 4)