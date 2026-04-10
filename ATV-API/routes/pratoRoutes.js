import express from "express";
import pratoController from "../controllers/pratoController.js";
const pratoRoutes = express.Router();
// Importando o Middleware de autenticação
import Auth from "../middleware/Auth.js";

// Na camada de routes é armazenado os ENDPOINTS (URLs) da API

// Endpoint para listar todos os pratos
pratoRoutes.get("/pratos",Auth.Authorization, pratoController.getAllPratos);

// Endpoint para cadastrar um prato
pratoRoutes.post("/pratos",Auth.Authorization, pratoController.CreatePrato);

// Endpoint para excluir um prato
pratoRoutes.delete("/pratos/:id",Auth.Authorization, pratoController.deletePrato);

// Endpoint para alterar um prato
pratoRoutes.put("/pratos/:id",Auth.Authorization, pratoController.updatePrato);

// Endpoint para listar um prato unico
pratoRoutes.get("/pratos/:id",Auth.Authorization, pratoController.getOnePrato)

export default pratoRoutes;
