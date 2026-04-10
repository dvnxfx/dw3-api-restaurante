// Importando o Service
import pratoService from "../services/pratoService.js";
// Importando o ObjectId
import { ObjectId } from "mongodb";

// Função para tratar a requisição de LISTAR os pratos
const getAllPratos = async (req, res) => {
  try {
    const pratos = await pratoService.getAll();
    res.status(200).json({ pratos: pratos });
    // Cod. 200 (OK) : Requisição Feita com sucesso
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Erro interno do servidor. Não foi possivel listar os pratos.",
    });
  }
};

// Função para tratar a requisição de CADASTRAR um prato
const CreatePrato = async (req, res) => {
  try {
    // COLETANDO OS DADOS DO CORPO DA REQUISIÇÃO
    const { name, price, status, descriptions } = req.body;
    await pratoService.Create(name, price, status, descriptions);
    res.status(201).json({ message: "O prato foi cadastrado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Erro interno do servidor. Não foi possivel cadastrar o prato.",
    });
  }
};
// FUNÇÃO PARA DELETAR UM PRATO
const deletePrato = async (req, res) => {
  try {
    // COLETANDO A ID
    const id = req.params.id;
    // VALIDAÇÃO DO ID
    if (ObjectId.isValid(id)) {
      await pratoService.Delete(id);
      res.status(204).json({ message: "O prato foi excluido com sucesso!" });
      // Cod. 204 (NO CONTENT)
    } else {
      res.status(400).json({ error: "Ocorreu um erro de validação de ID." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};
// FUNÇÃO PARA ALTERAR UM PRATO
const updatePrato = async (req, res) => {
  try {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
      const { name, price, status,  descriptions  } = req.body;
      const prato = await pratoService.Update(
        id,
        name,
        price,
        status,
        descriptions,
      );
      res
        .status(200)
        .json({ message: "Prato atualizado com sucesso!", prato: prato });
    } else {
      res.status(400).json({ error: "Ocorreu um erro de validação de ID." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// FUNÇÃO PARA BUSCAR UM PRATO UNICO
const getOnePrato = async (req, res) => {
  try {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
      const prato = await pratoService.getOne(id);
      // Verificando se o prato foi encontrado
      if (!prato) {
        // Se o prato não existir (! = NOT)
        res.status(404).json({ error: "O prato buscando não foi encontrado." });
      } else {
        // PRATO ENCONTRADO
        res.status(200).json({ prato });
      }
      // SE A ID FOR INVALIDA
    } else {
      res.status(400).json({ error: "A ID informada é invalida." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export default { getAllPratos, CreatePrato, deletePrato, updatePrato, getOnePrato };
