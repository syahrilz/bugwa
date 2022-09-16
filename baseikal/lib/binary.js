async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
}
return binCode.join("")
}

async function eBinary(str = ''){
let res = ''
res = str.split('').map(char => { 
return char.charCodeAt(0).toString(2);
 }).join(' ')
return res
}

module.exports = { dBinary, eBinary }






/*
› Create By Haikal
› Base Ori Haikal

🌷 KALAU MAU RENAME TARO CREDITS GUA : HW MODS WA */
