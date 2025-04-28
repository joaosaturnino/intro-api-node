const db = require('../dataBase/connection');
const { json, response } = require('express');

// Controller para gerenciar avaliações
// Este módulo contém funções para listar, cadastrar, editar e apagar avaliações no banco de dados
module.exports = {

  // Listar Cidades
  async listarCidade(request, response) {
    try {
      // Instrução SQL para listar cidades
      const sql = 'SELECT cidade_id, nome_cidade, uf_sigla FROM cidade;';
      // Executa a consulta no banco de dados
      const [rows] = await db.query(sql);
      // Verifica se há registros retornados
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de cidades',
        itens: rows.length,
        dados: rows
      });
      //Retorna erro caso ocorra

    // // Parâmetros passados via corpo de requisição
    //   const { uf_sigla, nome_cidade  } = request.body;
    //   // Instrução SQL para listar cidades
    //   const cidPesq = nome_cidade ? `%${nome_cidade}%` : `%%`;
    //   const sql = `SELECT
    //               cidade_id, nome_cidade, uf_sigla
    //               FROM cidade
    //               WHERE uf_sigla = ? AND nome_cidade like ?;`;
      
      
    //   const values = [uf_sigla, cidPesq];
    //   // Executa a consulta no banco de dados
    //   const cidades = await db.query(sql, values);
    //   // Verifica se há registros retornados
    //   const nItens = cidades[0].length;

    //   return response.status(200).json({
    //     sucesso: true,
    //     mensagem: 'Lista de cidades',
    //     dados: cidades[0],
    //     nItens
    //   });
    }catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  async listarUfs(request, response) {
    try {
      // instrução sql para listar estados
      const sql = `SELECT DISTINCT uf_sigla 
      FROM cidade 
      ORDER BY uf_sigla ASC;`;
      // executa a instrução de listagem no banco de dados
      const estados = await db.query(sql);
      
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de estados',
        dados: estados[0]
      });
    }catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    };
  },

  // Cadastrar Cidades ok
  async cadastrarCidade(request, response) {
    try {
      // Parâmetros passados via corpo de requisição
     const { nome_cidade, uf_sigla } = request.body;
      // Instrução SQL para inserção
     const sql = 'INSERT INTO cidade (nome_cidade, uf_sigla) VALUES (?, ?);';
      // Definição de array com parâmetros que receberão os valores do front-end
     const values = [nome_cidade, uf_sigla];
      // Executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);
      // Verifica se há registros retornados
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cidade cadastrada com sucesso.',
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

  // Editar Cidades ok
  async editarCidade(request, response) {
    try {
      // Parâmetros passados via corpo de requisição
      const { nome_cidade, us_sigla} =request.body;
      // parametros passados via URL
      const { cidade_id} = request.params;
      // Instrução SQL para atualização
      const sql = 'UPDATE cidade SET nome_cidade = ?, uf_sigla = ? WHERE cidade_id = ?;';
      const values = [nome_cidade, us_sigla, cidade_id];
      // Executa a instrução de atualização no banco de dados
      const [rows] = await db.query(sql, values);
      // Verifica se há registros retornados
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cidade editada com sucesso.',
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

  // Apagar Cidades ok
  async apagarCidade(request, response) {
    try {
      // Parâmetro passado via URL
      const { cidade_id } = request.params;
      // Instrução SQL para exclusão
      const sql = 'DELETE FROM cidade WHERE cidade_id = ?;';
      // Definição de array com parâmetros que receberão os valores do front-end
      const values = [cidade_id];
      // Executa a instrução de exclusão no banco de dados
      const [rows] = await db.query(sql, values);
      // Verifica se há registros retornados
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cidade apagada com sucesso.',
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

  // // Listar uma cidade específica
  // async listarUnicaCidade(request, response) {
  //   try {
  //     // parmetro passado via url
  //     const { cidade_id } = request.params;
  //     // instrução sql para listar uma cidade especifica
  //     const sql = 'SELECT cidade_id, nome_cidade, uf_sigla FROM cidade WHERE cidade_id = ?;';
  //     // definição de array com parametros que receberao os valores do front-end
  //     const values = [cidade_id];
  //     // executa a consulta no banco de dados
  //     const [rows] = await db.query(sql, values);
  //     // verifica se ha registros retornados
  //     return response.status(200).json({
  //       sucesso: true,
  //       mensagem: 'Cidade encontrada.',
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
