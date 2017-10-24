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

const maxAge = ages.reduce(
    (max, value) => (value > max) ? value : max, ages[0]
)
console.log('maxAge', maxAge)

const minAge = ages.reduceRight(
    (min, value) => (value < min) ? value : min, ages[ages.length-1]
)
console.log(minAge)

const colors = [
    {
        id: '-xekare',
        title: 'rad red',
        rating: 3
    },
    {
        id: '-jbwsof',
        title: 'big blue',
        rating: 2
    },
    {
        id: '-ryhbhsl',
        title: 'banana',
        rating: 1
    }
]

const hashColors = colors.reduce(
    (hash, {id, title, rating}) => {
        hash[id] = { title, rating }
        return hash
    },
    {}
)
console.log(hashColors)