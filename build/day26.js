"use strict";
// The os module
let os = require('os');
console.log(os.tempdir()); // Logs dir name
console.log(os.totalmem()); // Logs total memory
console.log(os.freemem()); // Logs free memory
console.log(os.uptime()); // Logs how long system has been up
console.log(os.type()); // Logs type of operating system
console.log(os.homedir()); // Logs home directory
console.log(os.hostname()); // Logs system host name
