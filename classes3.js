class Parent {
    constructor() {
        this.name = "Parent"
    }
    getMyNames() {
        return "this.name from parent"
    }
}
class Child extends Parent {
    constructor() {
        super()
        this.name = "Child"
    }
    getMyName() {
        return "this.name from child"
    }
}
var o = new Child()
console.log(o.getMyName())