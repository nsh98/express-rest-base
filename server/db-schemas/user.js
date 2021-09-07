const userModel = (knex) => {
  return knex.schema.hasTable('user').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('user', function (property) {
        property.increments('id').unsigned().primary()
        property.string('user_name', 255).notNullable()
        property.string('password', 255).notNullable()
        property.datetime('create_time').notNullable().defaultTo(knex.raw('NOW()'))
        property.datetime('update_time')
        property.boolean('is_delete').defaultTo(0)
      })
    }
  })
}
module.exports = {
  userModel
}
