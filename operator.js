// console.log("john" + "doe")
// // ==> CONCAT
// console.log("100" + 1);
// console.log(Number("100") + 1);
// console.log(parseInt("100") + 1);

// console.log(100 - "1");

// console.log("string" * "1");

// console.log(2 ** 3);



// % => modulos => returns the reminder 
// console.log(10 / 3);
// console.log(10 % 3);



// ++ INcrement
// pre - increment ==> ++num  ==>  instantly returns the updated value
// post - increment => num++ ==> updates the value, but doesnot return the updated value instantly
// -- Decrement
//     -- pre-decremnt
//     -- post-decrement

let a = 1;
// console.log(a, ++a, a++, a);///  integer.float, double ,string, boolean, array, object , list , set , map,

// DATA types
// - primitive
/* 
    Number,
    BigInt,
    Symbol
    String,
    Boolean,
    undefined,
    null
*/
// - non-primitive (reference data types) (collections)  
// pass by reference 
// - Object
// -- Array 



// ARRAY
//  Index  -> always starts with index 0

let fruit1 = "apple"
// let fruits = [<0th-index>,<01st-index>]
let fruits = [fruit1, "banana", 1, null, undefined, NaN, [1, 2, 3], { a: 1 }]

// console.log(fruits)
// console.log(fruits[2])
// console.log(fruits[1])
// console.log(typeof (fruits))
// console.log((fruits.length))
// console.log((fruit1.length))

let num1 = 1
let num2 = 1.11
let status = true
let num3;
let num4 = null;
// console.log(typeof (num1))
// console.log(typeof (num2))
// console.log(typeof (status))
// console.log(typeof (num3))
// console.log(typeof (num4))


// Objects 
let person = {
    // <attribute>:<value> 
    // <property>:<value> 
    // <key>:<value> 
    name: "John",
    age: 10,
    married: false,
    street: {
        block: 1
    }
}

// console.log(person)
// console.log(person.name)
// console.log(typeof (person))
// console.log(typeof (null))





//  TODO:  add number and string
//  TODO:  subtract  number and string
//  TODO:  mulitply  number and string



let name = "John"
let nick_name = name;
nick_name = "changed value"

console.log(name);
console.log(nick_name);

let number = 1;
let number2 = number
number2 = 100

console.log(number, number2);





let arr = [1, 2, 3]
// arr2 = <reference to the memory location>
arr2 = arr
// arr2 = [1,2,3] => [1,changed,3]
arr2[3] = "changed"

console.log({ arr });
console.log({ arr2 });


let obj = { a: 1, b: 2 }
let obj2 = obj
obj2.c = 3;
console.log({ obj });
console.log({ obj2 });

a = a + 1;
a += 1
// console.log(a);

let str = "random"
// str = str;
// str += "  string";
// console.log({str});


let str2 = "random"

// console.log(str == true)

console.log(1 == "1")
console.log(1 === "1")
console.log(NaN == NaN)
console.log(Number(NaN) == Number(NaN))

console.log(typeof (Number(NaN)));

// comparison operators
// logical operators


















