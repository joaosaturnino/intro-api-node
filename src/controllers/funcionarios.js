const db = require('../dataBase/connection');

module.exports = {

  // Listar funcionarios
  async listarFuncionario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Funcionarios.',
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

  // Cadastrar funcionarios
  async cadastrarFuncionario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Funcionarios.',
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

  // Editar funcionarios
  async editarFuncionario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Funcionarios.',
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

  // Apagar funcionarios
  async apagarFuncionario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Funcionarios.',
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
