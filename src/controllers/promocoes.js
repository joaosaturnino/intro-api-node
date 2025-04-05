const db = require('../dataBase/connection');

module.exports = {

  // Listar todas as promoções
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

  // Cadastrar uma nova promoção
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

  // Editar uma promoção existente
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
  
  // Apagar uma promoção
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