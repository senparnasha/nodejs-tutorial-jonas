const fs = require ('fs')

const textIn= fs.readFileSync("./text/input.txt", "utf-8")
console.log(textIn)

const textOut= `This is my fisrt read and write text and this a normal text - ${textIn}`;
fs.writeFileSync('./text/output.txt', textOut)
console.log("file has  written")