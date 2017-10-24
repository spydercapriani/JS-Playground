let schools = [
    'Yorktown',
    'Stratford',
    'Washington & Lee',
    'Wakefield'
]
console.log(schools.join(', '))

const wSchools = schools.filter(school => school[0] === 'W')
console.log(wSchools)

const cutSchool = (cut, list) => {
    return list.filter(school => school !== cut)
}

console.log(cutSchool('Washington & Lee', schools).join(' * '))
console.log(schools.join(', '))

const highSchools = schools.map(school => `${school} High School`)
console.log(highSchools.join(', '))

const schoolMap = {
    'Yorktown': 10,
    'Washington & Lee': 2,
    'Wakefield': 5
}

const schoolArray = Object.keys(schoolMap).map(key =>({
    name: key,
    wins: schoolMap[key]
}))
console.log(schoolArray)

const ages = [21, 18, 42, 40, 64, 63, 34]

const maxAge = ages.reduce((max, age) => {
    console.log(`${age} > ${max} = ${age > max}`)
    if (age > max) {
        return age
    } else {
        return max
    }
}, 0)
console.log('maxAge', maxAge)