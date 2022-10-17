// 난이도 3, 이중우선순위큐

function solution(operations) {
  var answer = [];

  operations.forEach((item) => {
    var arr = item.split(" ");
    if (arr[0] === "D" && answer.length > 0) {
      if (Number(arr[1]) > 0) {
        answer.splice(answer.indexOf(Math.max(...answer)), 1);
      } else {
        answer.splice(answer.indexOf(Math.min(...answer)), 1);
      }
    } else if (arr[0] === "I") {
      answer.push(Number(arr[1]));
    }
  });
  return answer.length > 0
    ? [Math.max(...answer), Math.min(...answer)]
    : [0, 0];
}
