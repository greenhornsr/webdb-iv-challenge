
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments();  // adds primary key that auto-increments

        tbl
        .string('name', 255)
        .notNullable()

        tbl
        .integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dishes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        tbl
        .timestamp('createdAt')
        .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
