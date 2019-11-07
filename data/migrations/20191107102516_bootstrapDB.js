
exports.up = function (knex) {
    return knex.schema.createTable('species', tbl => {
        tbl.increments(); // unsigned int
        tbl.string('name', 255).notNullable();
    })
        .createTable('animals', tbl => {
            tbl.increments(); // unsigned int
            tbl.string('name', 255).notNullable();

            // Foreign Key
            tbl
                .integer('species_id')
                .unsigned()
                .references('id')
                .inTable('species')
                // about deleting the record from the primary key table
                // possible vals: 'CASCADE', 'RESTRICT', 'NO ACTION', 'SET NULL' (or something like that)
                .onDelete('CASCADE')
                // about what to do when changing value of primary key
                .onUpdate();
        })
        .createTable('zoos', tbl => {
            tbl.increments();
            tbl.string('name', 255).notNullable();
            tbl.string('address', 255).notNullable();
        })
        .createTable('animal_zoos', tbl => {
            tbl.increments();
            tbl.string('arrival', 255).notNullable();
            tbl.string('departure', 255).notNullable();
            tbl
                .integer('animal_id')
                .unsigned()
                .references('id')
                .inTable('animals')
                .onDelete('CASCADE')
                .onUpdate();
            tbl
                .integer('zoo_id')
                .unsigned()
                .references('id')
                .inTable('zoos')
                .onDelete('CASCADE')
                .onUpdate();
        })

};

exports.down = function (knex) {

};
