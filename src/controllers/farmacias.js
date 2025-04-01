const db = require('../dataBase/connection');

module.exports = {
  async listarFarmacias(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Farmacias.',
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
  async cadastrarFarmacias(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar farmacias.',
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
  async editarFarmacias(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar farmacias.',
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
  async apagarFarmacias(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar farmacias.',
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
