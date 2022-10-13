// 난이도 2, 혼자 놀기의 달인

function solution(cards) {
  var arr = [];
  cards.map((_, index) => {
    var item = _;
    var temp = [item];
    for (var i = 0; i < cards.length; ) {
      if (!temp.some((item) => item === cards[item - 1]))
        temp.push(cards[item - 1]);
      if (cards[item - 1] === index + 1) {
        break;
      } else {
        item = cards[item - 1];
      }
    }
    if (
      !arr.some((item) => JSON.stringify(item) === JSON.stringify(temp.sort()))
    ) {
      arr.push(temp.sort());
    }
  });
  var length = arr.map((item) => item.length);
  var answer =
    length.splice(length.indexOf(Math.max(...length)), 1)[0] *
    length.splice(length.indexOf(Math.max(...length)), 1)[0];
  return arr.length > 1 ? answer : 0;
}
