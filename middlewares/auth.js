const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verifica se o cabeçalho de autorização existe
  if (!authHeader) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
  }

  // Extrai o token do cabeçalho (formato esperado: "Bearer <token>")
  const token = authHeader.split(' ')[1]; // Divide em espaço e pega a segunda parte

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Formato de token inválido.' });
  }

  try {
    // Verifica o token com a chave secreta
    const decoded = jwt.verify(token, JWT_SECRET);

    // Adiciona os dados decodificados ao objeto `req` para uso posterior
    req.user = decoded;

    console.log('Token decodificado:', decoded);
    next(); // Passa para o próximo middleware
  } catch (err) {
    console.error('Erro ao verificar o token:', err.message);
    return res.status(401).json({ message: 'Token inválido ou expirado.' });
  }
};

module.exports = auth;
