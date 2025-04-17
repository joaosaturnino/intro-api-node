const db = require('../dataBase/connection');
const { json, response } = require('express');

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

  // Cadastrar Avaliações não funciona
  async cadastrarAvaliacao(request, response) {
    try {
      const { usu_id, far_id, nota, ava_comentario } = request.body;
      const sql = 'INSERT INTO avaliacao (usu_id, far_id, nota, ava_comentario) VALUES (?, ?, ?, ?);';
      const values = [usu_id, far_id, nota, ava_comentario];
      const confirmacao = await db.query(sql, values);

      const idInst = confirmacao[0].insertId;

      return response.status(200).json({confirma: 'sucesso', message: idInst})
      
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Editar Avaliações não funciona
  async editarAvaliacao(request, response) {
    try {
      const { usu_id, far_id, nota, ava_comentario } = request.body;
      const { ava_id } = request.params;
      const sql = 'UPDATE avaliacao SET usu_id = ?, far_id = ?, nota = ?, ava_comentario = ? WHERE ava_id = ?;';
      const values = [usu_id, far_id, nota, ava_comentario, ava_id];
      const confirmacao = await db.query(sql, values);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Avaliação editada com sucesso',
        dados: confirmacao[0]
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },

  // Apagar Avaliações ok
  async apagarAvaliacao(request, response) {
    try {
      const { ava_id } = request.params;
      const sql = 'DELETE FROM avaliacao WHERE ava_id = ?;';
      const values = [ava_id];
      const confirmacao = await db.query(sql, values);

      const idInst =  confirmacao[0].affectedRows;
      return response.status(200).json({confirmacao: 'sucesso', message: idInst})
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },
}
