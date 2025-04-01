const db = require('../dataBase/connection');

module.exports = {
  async listarFarmaceutica(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Formas Farmaceuticas.',
        dados: null
      });
    }catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },
  async cadastrarFarmaceutica(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Formas farmaceuticas.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },
  async editarFarmaceutica(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar formas farmaceuticas.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },
  async apagarFarmaceutica(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar formas farmaceuticas.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },

  

  
}
