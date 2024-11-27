

const readline = require('readline');
const fs = require('fs');

fs.readFile('./files/start.txt', 'utf-8', (error1, data1) => {
    console.log(data1)
    fs.readFile(`./files/input.txt`, `utf-8`, (error2, data2) => {   // ${data}
        console.log(data2);
        fs.readFile('./file/append.txt', 'utf-8', (error3, data3) => {
            console.log(data3);
            fs.writeFile('./file/output.txt', `${data2}\n\n${data3}\n\nData3\n\nDate created ${new Date()}`, () => {
                console.log("File written successfully");

            })

        })
    })
})

console.log('Reading file...');