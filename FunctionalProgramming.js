var log = (message) => {
    console.log(message)
}

log("In JavaScript functions are variables!")

const obj = {
    message: "They can be added to objects like variables",
    log: log,
    funcExample(message) {
        console.log(message)
    }
}

obj.log(obj.message)
obj.funcExample("They can even be added directly inside objects!")

const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
]

messages[1](messages[0])
messages[3](messages[2])

const insideFn = logger => {
    logger("They can be sent to other functions as arguments")
}
insideFn(message => console.log(message))

// var createScream = (logger) => {
//     return (message) => {
//         logger(message.toUpperCase() + '!!!')
//     }
// }

var createScream = logger => message => logger(message.toUpperCase() + '!!!')   // Using ES6 syntax, we can describe the same createScream higher-order function with arrows

const scream = createScream(message => console.log(message))

scream('functions can be returned from other functions')
scream('createScream returns a function')
scream('scream invokes that returned function')

