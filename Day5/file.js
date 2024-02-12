const fs = require('fs');

// Sync
// fs.writeFileSync('./text.txt', "Hey There");//Creates a file and Overwrites the file

// Async
// fs.writeFile('./test.txt', "File write function", (err) => {});

const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);