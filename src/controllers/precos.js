const db = require('../dataBase/connection');

module.exports = {

  // Listar todos os preços
  async listarPreco(request, response) {
    try {
      const sql = 'SELECT pre_id, preco, medpreco_id, ativo FROM preco;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de preços',
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

  // Cadastrar preços
  async cadastrarPreco(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { preco, medpreco_id, ativo } = request.body;
      // instrução sql para inserção
      const sql = 'INSERT INTO preco (preco, medpreco_id, ativo) VALUES (?, ?, ?);';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [preco, medpreco_id, ativo];
      // executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o id do registro inserido
      return response.status(201).json({
        sucesso: true,
        mensagem: 'Preços cadastrados com sucesso.',
        itens: rows.length,
        dados: rows
      });
    } catch (error) {
      // retorna erro caso ocorra
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Editar preços
  async editarPreco(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { preco, medpreco_id, ativo } = request.body;
      // parametros passados via url
      const { pre_id } = request.params;
      // instrução sql para atualização
      const sql = 'UPDATE preco SET preco = ?, medpreco_id = ?, ativo = ? WHERE pre_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [preco, medpreco_id, ativo, pre_id];
      // executa a instrução de atualização no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Preços atualizados com sucesso.',
        itens: rows.length,
        dados: rows
      });
    } catch (error) {
      // retorna erro caso ocorra
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },

  // Apagar preços
  async apagarPreco(request, response) {
    try {
      // parametros passados via url
      const { pre_id } = request.params;
      // instrução sql para apagar
      const sql = 'DELETE FROM preco WHERE pre_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [pre_id];
      // executa a instrução de apagar no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Preços apagados com sucesso.',
        itens: rows.length,
        dados: rows
      });
    } catch (error) {
      // retorna erro caso ocorra
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },
}
