const express = require('express');
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

//LISTANDO OS USUARIOS
router.get('/listuser', async (req,res)=>{
  try{
    //TRAZENDO TODOS OS USUARIOS LISTADOS
    const users = await prisma.user.findMany()
    res.status(200).json({message: 'Usuários listados com sucesso!', users})

  }catch(err){
    console.log(err)
    res.status(500).json({ message: "Erro no Servidor, tente novamente" });
  }
})


module.exports = router;