

const numbers = [4,5,2,11,4,8,1];
// numbers.map(num => -num);
// numbers.filter((num) => num % 2 === 0);
// numbers.reduce((sumAll, num) => sumAll += num, 0);
numbers.reduce((max, num) => num > max ? num : max);