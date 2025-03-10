# Desenvolvimento de Sistema de Cadastro e Login de Usuários

Recentemente, desenvolvi uma aplicação que implementa um sistema de cadastro e login com foco em autenticação e controle de acesso. O objetivo principal foi garantir que os dados dos usuários fossem tratados de forma segura e eficiente, seguindo as melhores práticas.

## 📝 Principais Funcionalidades

### ✅ Cadastro de Usuários:
- Permite o registro de usuários com as informações: login, e-mail, senha e idade.
- A senha é imediatamente criptografada usando o Bcrypt, garantindo que nenhuma informação sensível seja armazenada em texto simples no banco de dados.

### ✅ Segurança com Bcrypt:
- Utilizado para gerar um hash seguro da senha.
- Implementada a funcionalidade de comparação entre a senha fornecida pelo usuário e o hash armazenado no banco de dados, aumentando a segurança no login.

### ✅ Banco de Dados com Prisma e MongoDB:
- Utilizei o Prisma para gerenciar a conexão e as operações no banco de dados MongoDB.
- O Prisma proporcionou um ambiente tipado e seguro para lidar com os dados, reduzindo erros comuns e aumentando a eficiência do desenvolvimento.

### ✅ Login Seguro com JWT:
- Desenvolvi a rota de login para autenticar usuários cadastrados.
- Após a validação das credenciais, o sistema gera um token JWT. Este token:
  - É enviado ao cliente para uso em futuras requisições.
  - Possui um tempo de expiração definido com o parâmetro `expiresIn`, garantindo sessões temporárias e maior controle de segurança.

### ✅ Rotas Privadas com Middleware de Validação:
- Implementei rotas privadas protegidas que requerem o envio do token JWT para acesso.
- Um middleware personalizado verifica:
  - A presença do token.
  - A validade do token, autorizando ou bloqueando o acesso ao recurso solicitado.

## ✨ Diferenciais

### 🔒 Segurança em primeiro lugar:
- O uso do Bcrypt e do JWT garante que as senhas e sessões dos usuários sejam tratadas com alto nível de segurança.
- As credenciais nunca são expostas ou armazenadas de maneira insegura.

### ⚙️ Arquitetura Escalável:
- A implementação de middleware e rotas privadas permite que o sistema seja expandido facilmente, com a adição de novos recursos sem comprometer a segurança.

## 🛠️ Ferramentas e Tecnologias:
- **Bcrypt**: Para hashing e validação de senhas.
- **Prisma**: Para modelagem e conexão eficiente ao banco de dados MongoDB.
- **JWT**: Para autenticação e gestão de sessões.
- **Node.js e Express.js**: Framework utilizado para gerenciar rotas e middleware.

## 💻 Impacto do Projeto
Com essa aplicação, consegui implementar um fluxo de autenticação alinhado às demandas modernas de segurança e performance.

