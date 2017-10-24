var logActivity = (name="Shane", activity="skiing") => console.log(`${name} loves ${activity}`)

logActivity()
logActivity("Danny")
logActivity("Danny", "Paintball")

var defaultPerson = {
    name: {
        first: "Danny",
        last: "Gilbert"
    },
    favActivity: "paintball"
}

function logPersonActivity(person=defaultPerson) {
    console.log(`${person.name.first} loves ${person.favActivity}`)
};

logPersonActivity()

// Arrow Functions
var lordify = (firstname, surname) => console.log(`${firstname} of House ${surname}`)

lordify("Danny", "Gilbert")

var _lordify = (firstName, land) => {
    if (!firstName) {
        throw new Error('A firstName is required to declare a lord!')
    }
    if (!land) {
        throw new Error('A lord must have a land')
    }

    return `${firstName} of ${land}`
}

console.log(_lordify("Danny", "New Braunfels"))
// console.log(_lordify("Danny")) // !!! Throws error

var tahoe = {
    resorts: [
        "Kirkwood",
        "Squaw",
        "Alpine",
        "Heavenly",
        "Northstar"
    ],
    print: function(delay=1000) {
        setTimeout(() => {
            console.log(this.resorts.join(", "))
        }, delay)
    }
}

tahoe.print()