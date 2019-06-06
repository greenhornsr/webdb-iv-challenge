const db = require('../data/dbConfig')

module.exports = {  
    findDish,
    addDish,
    findDishById,
    findRecipes,
    addRecipe
}


function findDish() {
    return db('dishes')
}

function addDish(newDish) {
    return null
}

function findDishById(id) {
    return null
}

function findRecipes(id) {
    return null
}

function addRecipe(newRecipe) {
    return null
}

