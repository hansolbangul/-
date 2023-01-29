const fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

console.log(a / b)