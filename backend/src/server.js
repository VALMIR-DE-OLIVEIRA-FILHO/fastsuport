const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const routes = require('./routes');

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());

app.use('/', routes); // Prefixo para todas as rotas 


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});