function getCircleLength(radius, qqq) {   
    return parseFloat((2 * Math.PI * radius).toFixed(qqq)); //  bringing to a number
}

function getCircleArea(radius, qqq) {
    return parseFloat((Math.PI * radius ** 2).toFixed(qqq)); //  bringing to a number
}

module.exports = {getCircleLength, getCircleArea};