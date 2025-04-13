const db = require('../dataBase/connection');

module.exports = {

  // Listar Preços de medicamentos
  async listarMedPreco(request, response) {
    try {
      const sql = 'SELECT medpreco_id, farmacia_id, med_id, preco FROM medpreco;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Preços de medicamentos',
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

  // Cadastrar Preços de medicamentos
  async cadastrarMedPreco(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Preços de medicamentos.',
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

  // Editar Preços de medicamentos
  async editarMedPreco(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Preços de medicamentos.',
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

  // Apagar Preços de medicamentos
  async apagarMedPreco(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Preços de medicamentos.',
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
