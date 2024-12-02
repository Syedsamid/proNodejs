import fs from "fs"

fs.rename("samid.txt", "suhail.txt", (err) => {
    if(err) console.log(err);
    else console.log("Rename hogaya bhai");
})