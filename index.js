const numbers = [1,2,3,4,5];
// console.log(numbers.filter(n => n > 2));
// console.log(numbers.reduce((acum, current) => acum + current, 0));
// console.log(numbers.find(n => n ===3));

let [a, b, ...c] = numbers;
console.log(c);

[b, a] = [a,b];
console.log(a,b);

const otherNumbers = [10, 20, 30, ...numbers];
console.log(otherNumbers);