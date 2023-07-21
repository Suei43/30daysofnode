import { error } from "console"

// CONSOLE
let consolemg = 'Im here'
console.log('Who\'s there')
console.log('He said', consolemg)

try{
    100/0
}catch(error){
    console.error(error)
}
console.clear()
console.warn("Cleared code had some issues.")
console.time('start')
console.log(25000^20)
console.timeEnd('start')