//let a = 1;
//console.log(a, ++a, a++, a,a,a)
let arr = [1, 2, 3]
// arr2 = <reference to the memory location>
arr2 = arr
// arr2 = [1,2,3] => [1,changed,3]
arr2[3] = 4
let arr3= [...arr]
arr3.push("new again")

console.log({ arr });
console.log({ arr2 });
console.log({ arr3 });
