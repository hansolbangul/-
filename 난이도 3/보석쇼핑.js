// 난이도 3, 보석 쇼핑
function solution(gems) {
  const cnt = new Set(gems).size;
  const gemMap = new Map();
  var answer = [1, gems.length];
  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);
    if (gemMap.size === cnt) {
      const cand = [gemMap.values().next().value + 1, i + 1];
      answer = answer[1] - answer[0] > cand[1] - cand[0] ? cand : answer;
    }
  })
  return answer;
}

// 효율성 박살

// function solution(gems) {
//   var answer = [];
//   const gem = new Set(gems)
//   let count = Number.MAX_SAFE_INTEGER

//   if (gem.size === gems.length) return [1, gems.length]
//   if (gem.size === 1) return [1, 1]

//   const getG = (index) => {
//     let route = new Set()
//     for (let i = index; i < gems.length; i++) {
//       route.add(gems[i])
//       if (i - index > count) break
//       else if (route.size === gem.size) {
//         if (count > i - index) {
//           count = i - index
//           answer = [index + 1, i + 1]
//         }
//         break
//       }
//     }
//   }
//   for (let i = 0, j = i + 1; i < gems.length - gem.size + 1; i++) {
//     getG(i)
//   }
//   return answer;
// }
