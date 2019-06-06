const db = require('../data/dbConfig')

module.exports = {  
    findDish,
    findDishById,
    addDish,
    findRecipes,
    addRecipe
}


function findDish() {
    return db('dishes')
}

function findDishById(id) {
    return db('dishes')
    .where({id})
    .first()
}

async function addDish(newDish) {
    // console.log(newDish)
    const [id] = await db('dishes')
    .insert(newDish);

    return findDishById(id);
}

function findRecipes(id) {
    return db.select('dishes.*', 'recipes.*')
    .from('recipes')
    .leftJoin('dishes', 'dishes.id', 'recipes.dish_id')
    .where('recipes.dish_id', id)
}


async function addRecipe(id, newRecipe) {
    return null
    // const [recipeId] = await db('recipes')
    // .where('dish_id', id)
    // .insert(newRecipe);

    // return findRecipes(recipeId);
}

