const express = require('express');
const publicRoutes = require('./routes/public');
const privateRoutes = require('./routes/private')
const auth = require('./middlewares/auth')
const app = express();
app.use(express.json())
app.use('/',publicRoutes);
app.use('/',auth,privateRoutes)


app.listen(3002, ()=> console.log('Server is running http://localhost:3002'))