const readline = require('readline');
const fs = require('fs');

// Reading and writing to a file

let textIn = fs.readFileSync('./files/input.txt','utf-8');  //utf-8 is encoding 
console.log(textIn)

let content = `Data read from input.txt: ${textIn}. \nDate created ${new Date()}`
fs.writeFileSync('./files/output.txt',content);

