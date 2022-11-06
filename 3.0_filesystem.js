const fs= require('fs');
//read file function
fs.readFile('4_file.txt','utf8',(err,data)=>{
console.log(err,data);
})
console.log('won')


//asyncronus hay 2sra phlay chlay ga no delay
//non blocking

//agr intentioally block krna hay then
const a=fs.readFileSync('4_file.txt');
console.log(a);
console.log('finished reading file');
//turn by turn chlay ga
//==========================================
//writefile data
//==========================================

fs.writeFile('4_file2.txt',"This data to be written in file",()=>{
	console.log("finished writen to file");
});
console.log("finished reading file");
//==========================================
//writefile data async
//==========================================
fs.writeFileSync('4_file2.txt',"This data to be written in file",()=>{
	console.log("finished writen to file");
});
console.log("finished writing file");