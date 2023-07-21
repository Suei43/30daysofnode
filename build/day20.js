"use strict";
function log() {
    console.log("Its quite a bright morning!");
}
console.log(1);
setImmediate(log);
log();
setInterval(log, 3000);
setTimeout(log, 3000);
console.log(1);
console.log(1);
