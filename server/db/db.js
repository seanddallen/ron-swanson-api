let config = require('../knexfile.js');
let env = 'develpment';
let knex = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]);
