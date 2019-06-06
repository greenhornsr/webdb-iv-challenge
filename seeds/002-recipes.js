
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        // Hamburgers
        {dish_id: 1, name: 'HamBurger'},
        {dish_id: 1, name: 'CheeseBurger'},
        {dish_id: 1, name: 'BaconBurger'},
        {dish_id: 1, name: 'HeartAttackBurger'},
        {dish_id: 1, name: 'MonsterBurger'},
        // Tacos
        {dish_id: 2, name: 'Beef'},
        {dish_id: 2, name: 'Chicken'},
        {dish_id: 2, name: 'Spicy'},
        // Pizzas
        {dish_id: 3, name: 'Pepperoni'},
        {dish_id: 3, name: 'Hawaiian'},
        {dish_id: 3, name: 'MeatLovers'},
        // Spaghetti
        {dish_id: 4, name: 'Traditional'},
        {dish_id: 4, name: 'Alfredo'},
      ]);
    });
};
