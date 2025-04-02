const db = require('../dataBase/connection');

module.exports = {
  // Listar Avaliações
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
  // Cadastrar Avaliações
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
  // Editar Avaliações
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
  // Apagar Avaliações
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
