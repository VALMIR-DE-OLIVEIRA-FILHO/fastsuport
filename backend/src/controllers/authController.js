const db = require('../../db/knex');
const bcrypt = require('bcryptjs');

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await db("users").where({ email }).first();

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Senha incorreta para:", email);
      return res.status(401).json({ message: "Senha incorreta" });
    }

    return res.json({ message: "Login bem-sucedido!", user: { id: user.id, name: user.name } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

async function register(req, res) {
  const { name, email, password } = req.body;

  try {
    const existingUser = await db("users").where({ email }).first();
    if (existingUser) {
      return res.status(400).json({ message: "E-mail já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db("users").insert({ name, email, password: hashedPassword });

    return res.status(201).json({ message: "Usuário registrado com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

module.exports = { login, register };
