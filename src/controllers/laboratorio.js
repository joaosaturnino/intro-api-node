const db = require('../dataBase/connection');

module.exports = {
  async listarLaboratorio(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Laboratórios.',
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
  async cadastrarLaboratorio(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Laboratórios.',
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
  async editarLaboratorio(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Laboratórios.',
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
  async apagarLaboratorio(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Laboratórios.',
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
