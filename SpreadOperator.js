var peaks = [
    "Tallac",
    "Ralson",
    "Rose"
]
var canyons = [
    "Ward",
    "Blackwood"
]

var tahoe = [...peaks, ...canyons]
console.log(tahoe.join(', '))

var [last] = [...peaks].reverse()
console.log(last)
console.log(peaks.join(', '))

var lakes = [
    "Donner",
    "Marlette",
    "Fallen Leaf",
    "Cascade"
]

var [first, ...rest] = lakes

console.log(rest.join(', '))


function directions(...args) {
    var [start, ...remaining] = args
    var [finish, ...stops] = remaining.reverse()

    console.log(`Drive throught ${args.length} towns`)
    console.log(`Start in ${start}`)
    console.log(`The destination is ${finish}`)
    console.log(`Stopping ${stops.length} times in between`)
}

directions(
    "Truckee",
    "Tahoe City",
    "Sunnyside",
    "Homewood",
    "Tahoma"
)

var morning = {
    breakfast: "oatmeal",
    lunch: "PB & J"
}

var dinner = "mac & cheese"

var backpackingMeals = {
    ...morning,
    dinner
}

console.log(backpackingMeals)
