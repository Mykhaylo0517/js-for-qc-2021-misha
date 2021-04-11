
function filterFoodPrice(foods, min, max) {
    return foods.filter(element => element.price >= min && element.price <= max);
}

module.exports = { filterFoodPrice };