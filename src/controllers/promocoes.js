const db = require('../dataBase/connection');

module.exports = {
  async listarPromocoes(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Promocoes.',
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
  async cadastrarPromocoes(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Promocoes.',
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
  async editarPromocoes(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Promocoes.',
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
  async apagarPromocoes(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Promocoes.',
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