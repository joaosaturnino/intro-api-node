const db = require('../dataBase/connection');
const { json, response } = require('express');

// Controller para gerenciar avaliações
// Este módulo contém funções para listar, cadastrar, editar e apagar avaliações no banco de dados
module.exports = {

  // Listar Preços de medicamentos
  async listarMedPreco(request, response) {
    try {
      // instrução sql para listar preços de medicamentos
      const sql = 'SELECT medpreco_id, farmacia_id, med_id, preco FROM medpreco;';
      // executa a instrução de listagem no banco de dados
      const [rows] = await db.query(sql);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Preços de medicamentos',
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

  // Cadastrar Preços de medicamentos
  async cadastrarMedPreco(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { farmacia_id, med_id, preco } = request.body;
      // instrução sql para inserção
      const sql = 'INSERT INTO medpreco (farmacia_id, med_id, preco) VALUES (?, ?, ?);';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [farmacia_id, med_id, preco];
      // executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);
      return response.status(201).json({
        sucesso: true,
        mensagem: 'Preços de medicamentos cadastrados com sucesso.',
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

  // Editar Preços de medicamentos
  async editarMedPreco(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { farmacia_id, med_id, preco } = request.body;
      // parametros passados via url
      const { medpreco_id } = request.params;
      // instrução sql para edição
      const sql = 'UPDATE medpreco SET farmacia_id = ?, med_id = ?, preco = ? WHERE medpreco_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [farmacia_id, med_id, preco, medpreco_id];
      // executa a instrução de edição no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Preços de medicamentos editados com sucesso.',
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

  // Apagar Preços de medicamentos
  async apagarMedPreco(request, response) {
    try {
      // parametros passados via url
      const { medpreco_id } = request.params;
      // instrução sql para apagar
      const sql = 'DELETE FROM medpreco WHERE medpreco_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [medpreco_id];
      // executa a instrução de apagar no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Preços de medicamentos apagados com sucesso.',
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

  // Listar Preços de medicamentos específicos
  async listarUnicoMedPreco(request, response) {
    try {
      // parametros passados via url
      const { medpreco_id } = request.params;
      // instrução sql para listar preços de medicamentos específicos
      const sql = 'SELECT medpreco_id, farmacia_id, med_id, preco FROM medpreco WHERE medpreco_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [medpreco_id];
      // executa a instrução de listagem no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Preços de medicamentos',
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
  }
}
