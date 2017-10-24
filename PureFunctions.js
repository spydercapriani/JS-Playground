// Impure function
var frederick = {
    name: 'Frederick Douglas',
    canRead: false,
    canWrite: false
}
console.log(frederick)

function selfEducate() {
    frederick.canRead = true
    frederick.canWrite = true
    return frederick
}

/*
    Here selfEducate is not a pure function. It does not take any arguments, and it doesn not
    return a value or function. It also changes a variable outside of its scope: Frederick.
    Therefore, selfEducate has created a change in the 'world'. It causes side effects...
*/
selfEducate()
console.log(frederick)

const danny = {
    name: 'Danny Gilbert',
    canCodeIOS: true,
    canCodeAndroid: false
}

const learnReactNative = (person) => {
    return Object.assign({}, person, {canCodeIOS: true, canCodeAndroid: true})
}
console.log(learnReactNative(danny))
console.log(danny)

/*
    When writing functions, try to follow these 3 rules:
        1. The function should take in at least one argument.
        2. The function should return a value or another function.
        3. The function should not change or mutate any of its arguments.
*/