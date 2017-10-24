var dan = {
    type: 'person',
    data: {
        gender: 'male',
        info: {
            id: 22,
            fullname: {
                first: 'Danny',
                last: 'Gilbert'
            }
        }
    }
}

const deepPick = (fields, object={}) => {
    const [first, ...remaining] = fields.split('.')
    return (remaining.length) ? deepPick(remaining.join('.'), object[first]) : object[first]
}

console.log(deepPick('type', dan))
console.log(deepPick('data.info.fullname.first', dan))