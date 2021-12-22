// function isChecked() {
//     var checkbox = document.getElementById('showpassword');
//     var password = document.getElementById('password');
//     var text = document.getElementById('text');
//     if (checkbox.checked) {
//         password.type = 'text';
//         text.innerText = 'Hide Password';
//     } else {
//         password.type = 'password';
//         text.innerText = 'Show Password';
//     }
// }

// //
// var query = document.querySelector('#showpassword');
// query.addEventListener('click', function (e) {
//     let type = 'password';
//     let text = 'Show Password';
//     if (query.checked) {
//         type = 'text'
//         text = 'Hide Password';
//     }
//     document.getElementById('password').type = type;
//     document.getElementById('text').innerText = text;
// })
// var keyup = (event) => {
//     alert('key up')
//     count++
//     if (count == 3) {
//         console.log(event.target)
//         event.target.removeEventListener('keyup', keyup);
//         event.target.removeEventListener('keyup', clicker);
//     }
// }
// var clicker =()=>{
//     alert('clickrr')
// }
// var count = 0
// let query = document.querySelectorAll('input');
// query.forEach((q) => {
//     q.addEventListener('keyup', keyup);
//     q.addEventListener('click', clicker);
// })
// const clickHandler = function (event) {
//     // this.stopPropagation();

//     alert('clicked on me');
//     console.log(this.id)
//     this.style.border = '1px dotted pink';
//     event.stopPropagation();

// }
// const divs = document.querySelectorAll('div');
// divs.forEach((div) => {
//     div.addEventListener('click', clickHandler)
// })
function validate() {
    var form = document.querySelector('form');
    const formdata = new FormData(form);
    // const entries = formdata.entries()
    const indexes = {
        'username': new RegExp('[a-zA-Z]{5,}'),
        'password': new RegExp('[0-9]{1,}[a-zA-Z]{1,}')       
    };
    for (const [index, element] of formdata.entries())
        console.log(indexes[index].test(element))
    return false;
}