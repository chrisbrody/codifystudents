'use strict'

var a = [0,1]
var b = [2, 3]
for (let i = 0; i < a.length; i++) {
    let x = a[i]
    console.log(x)
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
    console.log("this is callbacks number " + i)
}
console.log(callbacks[0]() === 0)
console.log(callbacks[1]() === 2)
console.log(callbacks[2]() === 4)

console.log(window.history);