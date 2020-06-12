const arr1 = ['A', 'B', 'C'];
const arr2 = [...arr1, 'D', 'E'];
console.log(arr2); // ['A', 'B', 'C', 'D', 'E']

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1, d: 4, e: 5 };
console.log(obj2); // {a: 1, b: 2, c: 3, d: 4, e: 5}

const foo = 65536;
const obj = { foo, bar: 4096 }
console.log(obj);