import file from "fs"

let userdata = "hello i an suhail";

// fileName,content,arr fun
file.writeFile("writing .txt",userdata, (error,sucess) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Bhai file ban gayii");
    }
});





// import fs from "fs"

// // let addContent = "Hello bhayya";

// // fileName, content, arr func

// // fs.writeFile("write.txt", addContent, (err, data)=>{
//     // if(err){
//     //     console.log(err);
        
//     // } else {
//     //     console.log("bade bhai, file bangayi");
//     // }
    
// // })

// // this code will overwrite your file and add new content to the existing file
// let newContent = "i'm studying full stack";

// fs.writeFile("./writing.txt", newContent, (err, data)=>{
//     if(err){
//         console.log(err);
        
//     } else {
//         console.log(data);
        
//     }
// })
