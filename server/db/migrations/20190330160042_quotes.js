
exports.up = function(knex, Promise) {
    return knex.schema.createTable('quotes', (table) => {
        table.increments();
        table.text('quote');
        table.integer('votes');
        table.integer('points');
        table.decimal('average', 2);
        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('quotes')
};


        //  .notNullable()
        //  .references('id')
        //  .inTable('ip')
        //  .onDelete('CASCADE')
        //  .index();