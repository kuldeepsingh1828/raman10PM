var c = 45;
function Parent(x, y) {
    this.a = x;
    this.b = y;
    this.method = () => {
        console.log('gi' + x + ' ' + y)
    }
}
var obj = new Parent(12, 78);
console.log(obj)
obj.method();