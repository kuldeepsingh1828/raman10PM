takeme();
setTimeout(function () {
    takeme2()
}, 0);


function takeme() {
    console.log("take me function");
}
var takeme2 = function () {
    console.log("take me2 function");
}

