const db = require('../dataBase/connection');

module.exports = {
  async listarUsuario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Usuários.',
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
  async cadastrarUsuario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Usuários.',
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
  async editarUsuario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Usuários.',
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
  async apagarUsuario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Usuários.',
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
