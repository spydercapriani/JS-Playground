let color_lawn = {
    title: 'lawn',
    color: '#00ff00',
    rating: 0
}

var modifyOriginal_rateColor = (color, rating) => {
    color.rating = rating
    return color
}

console.log(modifyOriginal_rateColor(color_lawn, 5).rating)
console.log(color_lawn.rating)

var modifyCopy_rateColor = (color, rating) => {
    return Object.assign({}, color, {rating: rating})
}

console.log(modifyCopy_rateColor(color_lawn, 9).rating)
console.log(color_lawn.rating)

let list = [
    { title: 'Rad Red' },
    { title: 'Lawn' },
    { title: 'Party Pink' }
]

var push_addColor = (title, colors) => {
    colors.push({ title: title })
    return colors
}
console.log(push_addColor('Glam Green', list))

const concat_addColor = (title, array) => [...list, {title}]
console.log(concat_addColor('Better Blue', list))
console.log(list)

