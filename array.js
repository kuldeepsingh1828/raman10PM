//special object in js
var arr = [1, 2, 3, 4, 5]
var arr2 = [11, 12, 13, 14, 15, 16]
var obj = { "age": 26 }
var length = arr.length;
Object.prototype.even = function () {
    if (this['age'] == undefined)
        for (var i = 0; i < this.length; i++) {
            if (this[i] % 2 == 0) {
                console.log(this[i])
            }
        }
    else if (this['age'] % 2 == 0) {
        console.log(this['age'])
    }
}
delete arr.even;
arr.even();
arr2.even();
obj.even();










//associative vs indexed