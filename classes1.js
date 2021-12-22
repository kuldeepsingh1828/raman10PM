
class A {
    a = 10;
    some() {
        console.log("function called : " + this.a)
    }
}
var obj = new A();
console.log(obj.some())