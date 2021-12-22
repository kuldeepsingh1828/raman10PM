function outside() {
    //lexcical scope
    var x = 10
    return function inside() {
        console.log(x)
        x++
    }
}
var increment  = outside();
increment();
increment();
increment();