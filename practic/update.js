import  fs from "fs";

let addData = "\nBye"

//filename,content, arr fun
fs.appendFile("./suhail.txt",addData,(err,data)=> {
    if(err){
         console.log(err);
    } else {
        console.log("file has updateed");
    }
})


