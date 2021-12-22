
var fun = () => {
    console.log('Something in single line1.');
}

fun();

var fun = x => { // single input or parameter
    console.log('Something in single line2. with variable ' + x);
}

fun();

var fun = () =>  // return something in a single line 
    'Something in single line3. with variable ';

console.log(fun());

var fun = x =>  // return something in a single line 
    'Something in single line4. with variable ' + x;

console.log(fun());


function sum(a, b) {
    return a + b;
}

var sum = (a, b) => a + b;

console.log(sum(2, 2));

/*
*/





