const db = require('../dataBase/connection');

module.exports = {

  // Listar Estados
  async listarEstado(request, response) {
    try {
      const sql = 'SELECT estado_id, nome_estado FROM estado;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Estados',
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

  // Cadastrar Estados
  async cadastrarEstado(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Estados.',
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

  // Editar Estados
  async editarEstado(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Estados.',
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

  // Apagar Estados
  async apagarEstado(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Estados.',
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
