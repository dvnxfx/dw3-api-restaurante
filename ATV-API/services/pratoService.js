// Importando o Model
import Prato from "../models/Pratos.js";

class pratoService {
  // Meteodo para buscar todos os registros no banco
  async getAll() {
    try {
      const pratos = await Prato.find();
      return pratos;

    } catch (error) {
      console.log(error);
    }
  }
  // Metodo para cadastrar um Prato
  async Create(name, price, status, descriptions) {
    try {
      const newPrato = new Prato({
        name,
        price,
        status,
        descriptions,
      });
      // Gravando no banco
      await newPrato.save(); 
    } catch (error) {
      console.log(error);
    }
  }
  // MÉTODO PARA EXCLUIR UM PRATO
  async Delete(id) {
    try {
      await Prato.findByIdAndDelete(id);
      console.log(`Prato com a id: ${id} foi deletado.`);
    } catch (error) {
      console.log(error);
    }
  }
  // MÉTODO PARA ALTERAR UM PRATO
  async Update(id, name, price, status, descriptions) {
    try {
      const updatedPrato = await Prato.findByIdAndUpdate(
        id,
        {
          name,
          price,
          status,
          descriptions,
        },
        { new: true },
      );
      console.log(`O prato com a ID ${id} foi alterado.`);
      return updatedPrato;
    } catch (error) {
      console.log(error);
    }
  }

  // METODO PARA LISTAR UM PRATO UNICO
  async getOne(id) {
    try {
      const prato = await Prato.findOne({ _id: id });
      return prato;
    } catch (error) {
      console.log(error);
    }
  }
}
// Exportando a classe
export default new pratoService();
