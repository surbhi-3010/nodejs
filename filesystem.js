const fs= require('fs');
// console.log(fs);

// async method
fs.readFile(__dirname+"/teacher.txt",'utf8',(error,data)=>{
    console.log(data);
})