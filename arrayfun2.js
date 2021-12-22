/*
map,reduce
*/

var arr = [1, 2, 3, 4, 5]
var sum = 0
var sum2 = 0
// for (var i = 0; i < arr.length; i++)
//     sum -= arr[i]
sum = arr.reduce(function (a, e) {
    return a - e;
})
sum2 = arr.reduceRight(function (a, e) {
    return a - e;
})

console.log(sum)
console.log(sum2)