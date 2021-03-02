  
exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).unique().notNullable()
      users.string('password', 200).notNullable()
      users.string('phoneNumber', 320).notNullable()
      // users.timestamps(false, true)
    })
    .createTable("plants",tbl => {
      tbl.increments("plant_id")
      tbl.string("nickname").notNullable()
      tbl.string("species").notNullable()
      tbl.string("h2oFrequency").notNullable()
      tbl.integer("user_id").notNullable()
      .unsigned()
      .references("user_id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("plants")
  await knex.schema.dropTableIfExists('users')
}