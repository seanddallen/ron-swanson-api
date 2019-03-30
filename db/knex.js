var environment = process.env.NODE_ENV || 'development';
var config = require('../server/knexfile.js')[environment];
module.exports = require('knex')(config);