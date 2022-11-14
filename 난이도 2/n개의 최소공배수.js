// 난이도 2, n개의 최소공배수
function solution(arr) {
  // while문을 종료시킬 flag
  let flag = false
  let n = 0
  while(!flag){
    n++
    // arr의 최소 공배수를 구하려면 어떠한 수 Num 을 모든 arr의 index로 나눌때 0이 되는 가장 작은 수를 구하면 된다.
    for(let i = 1; i<arr.length; i++){
      if(arr[0] * n % arr[i] === 0){
        flag = true
      } else {
        // 하나라도 0이 안된다면 그것은 최소공배수가 아니다.
        // 그러므로 다시 flag를 false로 변경 후 break를 해준다.
        flag = false
        break
      }
    }
  }

  return n * arr[0];
}

console.log(solution([2,6,8,14]));
console.log(solution([1,2,3]));

// 문제 설명
// 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 
// 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다.
// n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

// 제한 사항
// arr은 길이 1이상, 15이하인 배열입니다.
// arr의 원소는 100 이하인 자연수입니다.
// 입출력 예
// arr	result
// [2,6,8,14]	168
// [1,2,3]	6