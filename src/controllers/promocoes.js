const db = require('../dataBase/connection');
const { json, response } = require('express');

// Controller para gerenciar avaliações
// Este módulo contém funções para listar, cadastrar, editar e apagar avaliações no banco de dados
module.exports = {

  // Listar todas as promoções
  async listarPromocoes(request, response) {
    try {
      // instrução sql para listar promoções
      const sql = 'SELECT promo_id, farm_id, med_id, promo_desconto, promo_inicio, promo_fim FROM promocao;';
      // executa a instrução de listagem no banco de dados
      const [rows] = await db.query(sql);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de promoções',
        itens: rows.length,
        dados: rows
      });
      // retorna erro caso ocorra
    }catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Cadastrar uma nova promoção
  async cadastrarPromocoes(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { farm_id, med_id, promo_desconto, promo_inicio, promo_fim } = request.body;
      // instrução sql para inserção
      const sql = 'INSERT INTO promocao (farm_id, med_id, promo_desconto, promo_inicio, promo_fim) VALUES (?, ?, ?, ?, ?);';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [farm_id, med_id, promo_desconto, promo_inicio, promo_fim];
      // executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o id do registro inserido
      return response.status(201).json({
        sucesso: true,
        mensagem: 'Promoção cadastrada com sucesso.',
        itens: rows.length,
        dados: rows
      });
      // retorna erro caso ocorra
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Editar uma promoção existente
  async editarPromocoes(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { farm_id, med_id, promo_desconto, promo_inicio, promo_fim } = request.body;
      // parametros passados via url
      const { promo_id } = request.params;
      // instrução sql para atualização
      const sql = 'UPDATE promocao SET farm_id = ?, med_id = ?, promo_desconto = ?, promo_inicio = ?, promo_fim = ? WHERE promo_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [farm_id, med_id, promo_desconto, promo_inicio, promo_fim, promo_id];
      // executa a instrução de atualização no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o id do registro atualizado
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Promoção atualizada com sucesso.',
        itens: rows.length,
        dados: rows
      });
    // retorna erro caso ocorra
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Apagar uma promoção
  async apagarPromocoes(request, response) {
    try {
      // parametros passados via url
      const { promo_id } = request.params;
      // instrução sql para exclusão
      const sql = 'DELETE FROM promocao WHERE promo_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [promo_id];
      // executa a instrução de exclusão no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o id do registro excluído
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Promoção excluída com sucesso.',
        itens: rows.length,
        dados: rows
      });
    // retorna erro caso ocorra
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // // Listar uma promoção específica
  // async listarUnicaPromocao(request, response) {
  //   try {
  //     // parametros passados via url
  //     const { promo_id } = request.params;
  //     // instrução sql para listagem
  //     const sql = 'SELECT promo_id, farm_id, med_id, promo_desconto, promo_inicio, promo_fim FROM promocao WHERE promo_id = ?;';
  //     // definição de array com paramentros que receberão os valores do front-end
  //     const values = [promo_id];
  //     // executa a instrução de listagem no banco de dados
  //     const [rows] = await db.query(sql, values);
  //     // exibe o resultado da consulta
  //     return response.status(200).json({
  //       sucesso: true,
  //       mensagem: 'Promoção encontrada.',
  //       itens: rows.length,
  //       dados: rows
  //     });
  //   // retorna erro caso ocorra
  //   } catch (error) {
  //     return response.status(500).json({
  //       sucesso: false,
  //       mensagem: 'Erro na requisição.',
  //       dados: error.mensage
  //     });
  //   }
  // }
}
