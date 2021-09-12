const fs = require('fs');
const path = require('path')


// fs.mkdir(path.join(__dirname,'test'),{},(err)=>{
//     if(err) {throw err};
//     console.log('File created bip')
// })

// fs.writeFile(path.join(__dirname,'test','hello.txt'),'Hello this is writing in file',(err)=>{
//     if(err) throw err;   
//     console.log('File created and written')
//     fs.appendFile(path.join(__dirname,'test','hello.txt'),'\n I love node',(err)=>{
//         if(err)throw err;
//         console.log("Appended to file")
//     })
// }) // Making files

// fs.readFile(path.join(__dirname,'test','hello.txt'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// }) // this now will not work cuz of changes in name

fs.rename(path.join(__dirname,'test','helloMeow.txt'),path.join(__dirname,'test','helloMeowww.txt'),(err)=>{if(err)throw err; console.log("renamed")})