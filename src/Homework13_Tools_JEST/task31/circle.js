// ../circle.js
// const getCircleArea = (radius) => Math.PI * radius ** 2;
// const getCircleLength = (radius) => 2 * Math.PI * radius;

function getCircleLength(radius) {
    return 2 * Math.PI * radius;
};

function getCircleArea(radius) {
    return Math.PI * radius ** 2;
};

module.exports = { getCircleArea, getCircleLength };