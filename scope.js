function increment() {
    var a = 10;
    return function () {
        console.log(a);
        a += 1;
    };
}

var inc = increment();
inc();
inc();
inc();
inc();
inc();