let buffer: Buffer = Buffer.alloc(10); // To create a buffer
console.log(buffer);
let unsafebuffer: Buffer = Buffer.allocUnsafe(10); // To create a unsafe buffer
console.log(unsafebuffer);
console.log(typeof buffer);

let bufferstr1: Buffer = Buffer.from('suei') // To create a buffer from a string
let bufferstr2: Buffer = Buffer.from('suei')

console.log(bufferstr1.compare(bufferstr2)) // To compare two buffers - returns 0 or 1
console.log(bufferstr1.equals(bufferstr2)) // To compare 2 buffers - returns true or false
let newbuffer: Buffer = Buffer.alloc(20);
newbuffer.copy(buffer) // To copy one buffer to another
let newbuffer2: Buffer = Buffer.alloc(20);
newbuffer2 = buffer;
console.log(newbuffer2 == buffer)