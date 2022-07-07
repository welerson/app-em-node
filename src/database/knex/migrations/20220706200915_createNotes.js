
exports.up = knex => knex.schema.createTable("movie_notes", table => {
  table.increments("id");
  table.text("título_filme");
  table.text("descrição_filme");
  table.integer("nota_filme");
  table.integer("user_id").references("id").inTable("users");

  table.timestamp("data_criação").default(knex.fn.now());
  table.timestamp("data_edição").default(knex.fn.now());


})

exports.down = knex => knex.schema.dropTable("movie_notes")
