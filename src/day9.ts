//HASHING OPERATIONS
export {}
let crypto:object | any = require('crypto')
let fs = require('fs')

const hashIt = (hashtype: string)=>{
    let hash = crypto.createHash(hashtype) //argument is the hashing algorithm you want to use 
    let data: any = hash.update('folarin','utf-8') //update the hash object with the data and its encoding type
    hash==data ? console.log('Hash and data are equal') : console.log('') //check if hash and data are equal
    console.log(typeof hash)
    console.log('Hashed string \'folarin\': ', data.digest('hex'))
    console.log('/////////////////////////////////////////')
}

const hmacIt = (hashtype: string, hashsecret: string) => {
    let hash = crypto.createHmac(hashtype,hashsecret).update('folarin','utf-8').digest('hex')
    console.log('Hmac string \'folarin\': ', hash)
}
hashIt('md5');
// hashIt('sha1');
// hashIt('sha224')
// hashIt('sha256')
// hashIt('sha384')
// hashIt('sha512')

hmacIt('md5','vyovwe8f238pv8yew')

//HASHING A FILE
let hash = crypto.createHash('sha256')
var file = fs.readStream('../main.ts')
file.on('data', function(data: any) {
    hash.update(data)
  })
file.on('end', function() {
var gen_hash = hash.digest('hex')
console.log('Hash generated using ' + 'sha256' + ' \nHashed output is :  ' + gen_hash + ' \nFile name is :  ' + file);
fs.writeFileSync(file, gen_hash);
})