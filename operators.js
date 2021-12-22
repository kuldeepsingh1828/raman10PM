// //Arithmatics
// //+, -, *, , %, **
// var a = 10;
// var b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);


// //relational -- true/false
// //>,<, >=,<=,!=,==,===,!==
// var c = 10; //number
// var d = "10"; //string
// console.log(c > d);
// console.log(c < d);
// console.log(c <= d);
// console.log(c >= d);
// console.log(c != d);
// console.log(c == d);
// console.log(c === d);

// //logical
// //!,&&,||
// var e = true;
// var f = true;
// console.log(!e);
// console.log(e && f);
// console.log(e || f);

// //bitwise
// // &, |, << , >>, ^
// var g = 8;//1000
// var h = 4;//0100
// //1100
// console.log(g ^ h);
// var g = 10;//1010
// var h = 2; //0010
// //1000
// console.log(g ^ h);

// //assigments -- short hand operators
// //+=, -=, *=, /=, %=, **=
// var a = 20;
// var b = 2;
// console.log(a += b)
// console.log(a **= b)


// //increment and decrement
// //++, -- [postfix and prefix]



// // ...  [iterable objects]
var person =
{
    "name": "Ramandeep",
    "age": "26",
    "gender": "Female",
    "address": "India",
    "address2": "India",
    "address3": "India",
    "address4": "India",
    "address5": "India"
};
var { name, age, ...remain } = person; //rest operator
console.log(name);
console.log(age);
// console.log(gender);
console.log(remain);

//SPREAD
var array1 = [11, 43, 4];
var array2 = [13, 57, 89, ...array1]; //spread operators
console.log(array2);
