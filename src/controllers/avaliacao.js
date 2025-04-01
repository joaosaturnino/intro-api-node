const db = require('../dataBase/connection');

module.exports = {
  async listarAvaliacao(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Avaliações.',
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
  async cadastrarAvaliacao(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Avaliações.',
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
  async editarAvaliacao(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Avaliações.',
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
  async apagarAvaliacao(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Avaliações.',
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
