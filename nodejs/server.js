const fs = require('fs');

// operations on the files
// 1. Write into a file -- [create a file]
// 2. Read From a file
// 3. update a file
// 4. delete a file

const data = "I want to add this data in the file....";

fs.writeFile('names/filedata.txt', data, (err) => {
    err ? console.log("No Data Written") : console.log("File Created and Write is succeful")
});

// fs.appendFile('filedata12.txt', data, (err) => {
//     err ? console.log("No Data Written") : console.log("File Created and Write is succeful")
// });

// fs.readFile('filedata.txt', (err, data) => {
//     err ? console.log("Error in reading the file") : console.log(data.toString())
// })

// fs.unlink('filedata12.txt', (err) => {
//     err ? console.log("Error in reading the file") : console.log("deleted...")
// });


//FOLDER METHODS
// fs.mkdir('names', (err) => {
//     err ? console.log("Error in folder creation") : console.log("Folder created...")
// })

// fs.rmdir('names', (err) => {
//     err ? console.log("Error in folder deletion") : console.log("Folder deleted...")
// })

