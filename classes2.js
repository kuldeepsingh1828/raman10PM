class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        console.log("constructor 1 ")
    }

    getName() {
        return this.name;
    }
    
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    setName(name) {
        this.name = name;
    }
}
var o = new Person("kuldeep", 26);
console.log(o.getAge())
console.log(o.getName("something"))
console.log(o.getName())