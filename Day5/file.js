const fs = require('fs');

//Write
// Sync
// fs.writeFileSync('./text.txt', "Hey There");//Creates a file and Overwrites the file

// Async
// fs.writeFile('./test.txt', "File write function", (err) => {});

//Read
//Sync
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

//Async
// fs.readFile("./contacts.txt", "utf-8", (err, result)=> {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });

//Appending
//Sync
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", "\n Ka ho ka hal ba aaj k "+Date.now());

//Copy
// fs.cpSync('./test.txt', './copy.txt');

//Delete
// fs.unlinkSync('./text.txt');

// console.log(fs.statSync("./test.txt"));

// fs.mkdirSync('my-docs');
fs.mkdirSync('my-docs/a/b', {recursive: true});