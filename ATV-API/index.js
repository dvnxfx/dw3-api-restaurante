import express from "express";
// Importando o Mongoose
import mongoose from "mongoose";
// Importando o CORS
import cors from 'cors';
// Importando o Model
import Prato from "./models/Pratos.js"
// Importando o Model de Usuários
import User from "./models/Users.js";

import dotenv from "dotenv";
dotenv.config();

// Importando as Rotas de Pratos (Routes)
import pratoRoutes from "./routes/pratoRoutes.js";

 // Importando as Rotas de Usuários
 import userRoutes from "./routes/userRoutes.js";

const app = express();

// Configurações do Express
app.use(express.json()); 

// Configurando o CORS
app.use(cors());

// ATIVANDO A UTILIZAÇÃO DAS ROTAS
app.use('/', pratoRoutes)
app.use('/', userRoutes)

// Iniciando a conexão com o banco de dados MongoDB Atlas

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado ao Atlas 🚀"))
  .catch((err) => console.log("Erro ao conectar no MongoDB:", err));

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}`);
  }
});
