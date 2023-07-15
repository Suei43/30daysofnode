//ERRORS IN NODE
const err: Error = new Error('This is an error message.')
console.error(err) //Full error (message + stack)
console.error(err.message) //Just the error message
console.error(err.stack)