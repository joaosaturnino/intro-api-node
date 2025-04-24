const db = require('../dataBase/connection');
const { json, response } = require('express');

// Controller para gerenciar avaliações
// Este módulo contém funções para listar, cadastrar, editar e apagar avaliações no banco de dados
module.exports = {

  // Listar Tipos de Produtos
  async listarTipoProduto(request, response) {
    try {
      // instrução sql para listar tipos de produtos
      const sql = 'SELECT tipo_id, nome_tipo FROM tipo_produto;';
      // executa a instrução de listagem no banco de dados
      const [rows] = await db.query(sql);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Tipos de Produtos',
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

  // Cadastrar Tipos de Produtos
  async cadastrarTipoProduto(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { nome_tipo } = request.body;
      // instrução sql para inserção
      const sql = 'INSERT INTO tipo_produto (nome_tipo) VALUES (?);';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [nome_tipo];
      // executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o id do registro inserido
      return response.status(201).json({
        sucesso: true,
        mensagem: 'Tipo de Produto cadastrado com sucesso.',
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

  // Editar Tipos de Produtos
  async editarTipoProduto(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { nome_tipo } = request.body;
      // parametros passados via url
      const { tipo_id } = request.params;
      // instrução sql para atualização
      const sql = 'UPDATE tipo_produto SET nome_tipo = ? WHERE tipo_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [nome_tipo, tipo_id];
      // executa a instrução de atualização no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o id do registro atualizado
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Tipo de Produto atualizado com sucesso.',
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

  // Apagar Tipos de Produtos
  async apagarTipoProduto(request, response) {
    try {
      // parametros passados via url
      const { tipo_id } = request.params;
      // instrução sql para apagar tipos de produtos
      const sql = 'DELETE FROM tipo_produto WHERE tipo_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [tipo_id];
      // executa a instrução de deleção no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Tipo de Produto apagado com sucesso.',
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

  // // Listar um único Tipo de Produto
  // async listarUnicoTipoProduto(request, response) {
  //   try {
  //     // parametros passados via url
  //     const { tipo_id } = request.params;
  //     // instrução sql para listar um único tipo de produto
  //     const sql = 'SELECT tipo_id, nome_tipo FROM tipo_produto WHERE tipo_id = ?;';
  //     // definição de array com paramentros que receberão os valores do front-end
  //     const values = [tipo_id];
  //     // executa a instrução de listagem no banco de dados
  //     const [rows] = await db.query(sql, values);
  //     // exibe o resultado da consulta
  //     return response.status(200).json({
  //       sucesso: true,
  //       mensagem: 'Tipo de Produto encontrado.',
  //       itens: rows.length,
  //       dados: rows
  //     });
  //     // retorna erro caso ocorra
  //   } catch (error) {
  //     return response.status(500).json({
  //       sucesso: false,
  //       mensagem: 'Erro na requisição.',
  //       dados: error.mensage
  //     });
  //   }
  // }
}
