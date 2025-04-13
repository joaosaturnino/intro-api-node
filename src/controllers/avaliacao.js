const db = require('../dataBase/connection');

module.exports = {

  // Listar Avaliações
  async listarAvaliacao(request, response) {
    try {
      const sql = 'SELECT ava_id, usu_id, far_id, nota, ava_comentario FROM avaliacao;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de avaliações',
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

  // Cadastrar Avaliações
  async cadastrarAvaliacao(request, response) {
    try {
      const { usu_id, far_id, nota, ava_comentario } = request.body;
      const sql = 'INSERT INTO avaliacao (usu_id, far_id, nota, ava_comentario) VALUES (?, ?, ?, ?);';
      const values = [usu_id, far_id, nota, ava_comentario];
      const confirmacao = await db.query(sql, values);

      const idInst = confirmacao[0].insertId;

      return response.status(200).json({confirma: 'sucesso', message: idInst})
      // return response.status(200).json({
      //   sucesso: true,
      //   mensagem: 'Cadastrar Avaliações.',
      //   dados: null
      // });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Editar Avaliações
  async editarAvaliacao(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Avaliações.',
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

  // Apagar Avaliações
  async apagarAvaliacao(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Avaliações.',
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
