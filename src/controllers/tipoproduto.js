const db = require('../dataBase/connection');

module.exports = {

  // Listar Tipos de Produtos
  async listarTipoProduto(request, response) {
    try {
      const sql = 'SELECT tipo_id, nome_tipo FROM tipo_produto;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Tipos de Produtos',
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

  // Cadastrar Tipos de Produtos
  async cadastrarTipoProduto(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Tipos de Produtos.',
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

  // Editar Tipos de Produtos
  async editarTipoProduto(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Tipos de Produtos.',
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

  // Apagar Tipos de Produtos
  async apagarTipoProduto(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Tipos de Produtos.',
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
