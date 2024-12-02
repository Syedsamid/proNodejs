
import fs from "fs";

//* to create the folder
// fs.mkdir("java",(err) => {
//     if(err) console.log(err);
//     else console.log("folder is created");
// })

//* to delete the folder
fs.rmdir("java",(err)=> {
    if(err) console.log(err);
    else console.log("folder is deleted");
})