const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/cadastro", async (req, res) => {
  try {
    const user = req.body;

    const salt = await bcrypt.genSalt(10); // NIVEL DE CRYPTOGRAFIA
    const hashPssword = await bcrypt.hash(user.password, salt); //CRIANDO O HASH DA SENHA

    const userDB = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        age: user.age,
        password: hashPssword,
      },
    });
    res.status(201).json(userDB);
  } catch (err) {
    res.status(500).json({ message: "O e-mail já está registrado." });
  }
});

// ROTA DE LOGIN

router.post("/login", async (req, res) => {
  try {
    const userInfo = await req.body; //GUARDANDO INFO DO USUARIO

    //BUSCANDO UM UNICO USUARIO NO BANCO ATRAVES DO E-MAIL -- BUSCA NO DB
    const user = await prisma.user.findUnique({
      where: { email: userInfo.email },
    });
    //VERIFICA SE O USUÁRIO EXISTA DENTRO DO BANCO
    if (!user) {
      return res.status(404).json({ message: "Usuario nao encontrado" });
    }

    // COMPARA A SENHA DO BANCO COM A QUE O USER CRIOU/INFORMOU
    const isMatch = await bcrypt.compare(userInfo.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Senha inválida" });
    }

    //GERANDO O TOKEJWT
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1m" });

    res.status(200).json(token);
  } catch (err) {
    res.status(500).json({ message: "Erro no Servidor, tente novamente" });
  }
});

module.exports = router;
