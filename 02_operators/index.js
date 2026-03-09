// OPERATORS

// operators perform operations (transformation of data)

// mathematical 

console.log("1 + 1 =", 1 + 1);
console.log("1 - 1 =", 1 - 1);
console.log("4 * 4 =", 4 * 4);
console.log("21 / 3 =", 12 / 3);
// % -> modulo -> ddivide and find remainder
console.log("11 % 5 =", 11 % 5);
console.log("4 ** 4  =", 4 ** 4);
console.log("4 ** 4  =", Math.pow(4, 4));

// conditional
console.log("10 > 5 =", 10 > 5);
console.log("10 < 5 =", 10 < 5);
console.log("10 >= 5 =", 10 >= 5);
console.log("10 <= 5 =", 10 <= 5);

console.log("1 + 1 == 2 ", 1 + 1 == 2);
// == checks value
console.log("1 + 1 == '2' ", 1 + 1 == '2');
// === checks value AND type
console.log("1 + 1 === '2' ", 1 + 1 === '2');

// ! -> NOT operator (flips a boolean)
console.log("1 + 1 != 2 ", 1 + 1 != 2);

// boolean

console.log(true || false); // || -> OR -> checks to see if EITHER is true
console.log("10 > 5 || 10 > 11 =", 10 > 5 || 10 > 11);

console.log(true && false); // && -> AND -> checks to see if BOTH are true
console.log("10 > 5 && 10 > 11 =", 10 > 5 && 10 > 11);

// assignment

let a = 1;
a = 2;
console.log("a =", a);

console.log("a = a + 1;");

a = a + 1;
console.log(a);
a += 1;
console.log("a += 1;");

console.log(a);
a++;
console.log("a++");

console.log(a);

console.log("a--");
a--;
console.log(a);

a -= 2;
console.log("a -= 2;");

console.log(a);

a = a - 2;
console.log("a = a - 2;");

console.log(a);


let b = 12;

console.log("b", b, "b++",b++);
console.log("b", b++);


let c = 24;

console.log("c", c, "++c", ++c);


// type inference/coercion

console.log("1 + 2 =", 1 + 2);
console.log("1 + '2' =", 1 + '2');
console.log("3 * 4 =", 3 * 4);
console.log("3 * '4' =", 3 * '4');
console.log("'3' * '4' =", '3' * '4');

console.log("true + true =", true + true);
// if something cannot be cooerced to a number it becomes a NaN (Not a Number)
console.log("3 * 'jordan' =", 3 * 'jordan');

// typeof

console.log("typeof 1 =", typeof 1);
console.log("typeof true =", typeof true);
console.log("typeof 'jordan' =", typeof 'jordan');
console.log("typeof null =", typeof null);
console.log("typeof undefined =", typeof undefined);
console.log("typeof NaN =", typeof NaN);


console.log("parseInt('1') =", parseInt('1'));
console.log("parseInt('one') =", parseInt('one'));

let userInput = "12";
let sillyInput = "bloop";

console.log(parseInt(userInput) * parseInt(sillyInput));
