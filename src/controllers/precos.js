const db = require('../dataBase/connection');

module.exports = {
  async listarPreco(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Preços.',
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
  async cadastrarPreco(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Preços.',
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
  async editarPreco(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Preços.',
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
  async apagarPreco(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Preços.',
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
