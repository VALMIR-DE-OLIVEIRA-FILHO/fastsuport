/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const bcrypt = require("bcryptjs");

exports.seed = async function (knex) {
  // Remove todos os registros antigos
  await knex("users").del();

  // Gera os hashes das senhas
  const hashAdmin = await bcrypt.hash("123456", 10);
  const hashValmir = await bcrypt.hash("654321", 10);

  // Insere os novos usuários com senhas criptografadas
  await knex("users").insert([
    { name: "Admin", email: "admin@test.com", password: hashAdmin },
    { name: "Valmir", email: "valmir@test.com", password: hashValmir },
  ]);
};
