// Imperative programming is a style of programming that is only concerned with
// how to achieve results with code.
var string = 'This is the midday show with Cheryl Waters'
var imperative_urlFriendly = ''

for (var i=0; i<string.length; i++) {
    if (string[i] === ' ') {
        imperative_urlFriendly += '_'
    } else {
        imperative_urlFriendly += string[i]
    }
}
console.log(imperative_urlFriendly)

// In a declarative program, the syntax itself describes what should happen
// and the details of how things happen are abstracted away.
var declarative_urlFriendly = string.replace(/ /g, '_')
console.log(declarative_urlFriendly)

