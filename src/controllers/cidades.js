const db = require('../dataBase/connection');

module.exports = {

  // Listar Cidades
  async listarCidade(request, response) {
    try {
      const sql = 'SELECT cidade_id, nome_cidade, nome_estado FROM cidade;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de cidades',
        itens: rows.length,
        dados: rows
      });
    }catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Cadastrar Cidades
  async cadastrarCidade(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Cidades.',
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

  // Editar Cidades
  async editarCidade(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Cidades.',
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

  // Apagar Cidades
  async apagarCidade(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Cidades.',
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
