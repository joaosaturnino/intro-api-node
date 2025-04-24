const db = require('../dataBase/connection');
const { json, response } = require('express');

// Controller para gerenciar avaliações
// Este módulo contém funções para listar, cadastrar, editar e apagar avaliações no banco de dados
module.exports = {

  // Listar Avaliações
  async listarAvaliacao(request, response) {
    try {
      // Instrução SQL para listar avaliações
      const sql = 'SELECT ava_id, usu_id, far_id, nota, ava_comentario FROM avaliacao;';
      // Executa a consulta no banco de dados
      const [rows] = await db.query(sql);
      // Verifica se há registros retornados
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de avaliações',
        itens: rows.length,
        dados: rows
      });
    }catch (error) {
      // Retorna erro caso ocorra
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
      // Parâmetros passados via corpo de requisição
      const { usu_id, far_id, nota, ava_comentario } = request.body;
      // Instrução SQL para inserção
      const sql = 'INSERT INTO avaliacao (usu_id, far_id, nota, ava_comentario) VALUES (?, ?, ?, ?);';
      // Definição de array com parâmetros que receberão os valores do front-end
      const values = [usu_id, far_id, nota, ava_comentario];
      // Executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);
      // Exibe o id do registro inserido
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Avaliação cadastrada com sucesso.',
        itens: rows.length,
        dados: rows
      });
      // Retorna erro caso ocorra
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
      // Parâmetros passados via corpo de requisição
      const { nota, ava_comentario } = request.body;
      // Parâmetro passado via URL
      const { ava_id } = request.params;
      // Instrução SQL para atualização
      const sql = 'UPDATE avaliacao SET nota = ?, ava_comentario = ? WHERE ava_id = ?;';
      // Definição de array com parâmetros que receberão os valores do front-end
      const values = [nota, ava_comentario, ava_id];
      // Executa a instrução de atualização no banco de dados
      const [rows] = await db.query(sql, values);
      // Verifica se há registros retornados
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Avaliação atualizada com sucesso.',
        itens: rows.length,
        dados: rows
      });
      // Retorna erro caso ocorra
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Apagar Avaliações
  async apagarAvaliacao(request, response) {
    try {
      // Parâmetro passado via URL
      const { ava_id } = request.params;
      // Instrução SQL para exclusão
      const sql = 'DELETE FROM avaliacao WHERE ava_id = ?;'; 
      // Definição de array com parâmetros que receberão os valores do front-end
      const values = [ava_id];
      // Executa a instrução de exclusão no banco de dados
      const [rows] = await db.query(sql, values);
      // Verifica se há registros retornados
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Avaliação apagada com sucesso.',
        itens: rows.length,
        dados: rows
      });
      // Retorna erro caso ocorra
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // listar avaliacao especifica
  // async listarUnicaAvaliacao(request, response) {
  //   try {
  //     // parametros passados via url
  //     const { ava_id } = request.params;
  //     // instrucao sql para listar uma avaliacao
  //     const sql = 'SELECT ava_id, usu_id, far_id, nota, ava_comentario FROM avaliacao WHERE ava_id = ?;';
  //     // verifica se o id foi passado
  //     const values = [ava_id];
  //     // executa a consulta no banco de dados
  //     const [rows] = await db.query(sql, [ava_id]);
  //     // verifica se ha registros retornados
  //     return response.status(200).json({
  //       sucesso: true,
  //       mensagem: 'Lista de avaliação',
  //       itens: rows.length,
  //       dados: rows
  //     });
  //     // retorna erro caso ocorra
  //   }catch (error) {
  //     return response.status(500).json({
  //       sucesso: false,
  //       mensagem: 'Erro na requisição.',
  //       dados: error.mensage
  //     });
  //   }
  // },

};
