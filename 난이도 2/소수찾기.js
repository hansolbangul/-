// 난이도 2, 소수 찾기
function solution(numbers) {
  const routes = []
  let nums = numbers.split('')

  const decimal = (number) => {
    if (number <= 1) return false
    for (let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
      if (number % i === 0) {
        return false
      }
    }
    return true
  }

  const dfs = (arr, route) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const sum = route + arr[i]
        const cArr = [...arr]
        cArr.splice(i, 1)
        if (decimal(+sum) && !routes.includes(+sum)) routes.push(+sum)
        dfs(cArr, sum)
      }
    }
  }

  dfs(nums, '')

  return routes.length;
}

// console.time 으로 시간체크해보기

// function solution2(numbers) {
//   const routes = new Set()
//   // const routes = []
//   let nums = numbers.split('')

//   const decimal = (number) => {
//     if (number <= 1) return false
//     for (let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
//       if (number % i === 0) {
//         return false
//       }
//     }
//     return true
//   }

//   const dfs = (arr, route) => {
//     if (arr.length > 0) {
//       for (let i = 0; i < arr.length; i++) {
//         const sum = route + arr[i]
//         const cArr = [...arr]
//         cArr.splice(i, 1)
//         if (decimal(+sum)) routes.add(+sum)
//         dfs(cArr, sum)
//       }
//     }
//   }

//   dfs(nums, '')
//   return routes.size;
// }