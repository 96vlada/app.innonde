const knex = require('knex')

module.exports = knex({
  client: 'postgres',
  connection: {
    host: '172.18.0.4',
    user: 'root',
    password: 'root',
    database: 'test_db',
  },
})