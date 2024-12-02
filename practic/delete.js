import fs from "fs";

// From this .unlink you can delete the file
fs.unlink("./dummy.txt",(err,data) => {
    if(err) console.log(err);
    else console.log(data);

})