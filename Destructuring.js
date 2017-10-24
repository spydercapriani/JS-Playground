var sandwich = {
    bread: "Dutch Crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: [
        "lettuce",
        "tomato",
        "mustard"
    ]
}

var { bread, meat } = sandwich

console.log(bread, meat)

bread = 'garlic'
meat = 'turkey'

console.log(bread, meat)
console.log(sandwich.bread, sandwich.meat)

var lordify = regularPerson => {
    console.log(`${regularPerson.firstName} of Canterbury`)
}

var regularPerson = {
    firstName: "Danny",
    lastName: "Gilbert"
}

lordify(regularPerson)

var _lordify = ({firstName, lastName}) => {
    console.log(`${firstName} of House ${lastName}`)
}

_lordify(regularPerson)


var [firstResort,,thirdResort] = [
    "Kirkwood",
    "Squaw",
    "Alpine"
]
console.log(firstResort)
console.log(thirdResort)

