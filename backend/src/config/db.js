const knex = require('knex');
const config = require('../knexfile'); // caminho conforme sua estrutura

const db = knex(config.development);

module.exports = db;