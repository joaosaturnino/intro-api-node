const db = require('../dataBase/connection');

module.exports = {

  // Listar Laboratório
  async listarLaboratorio(request, response) {
    try {
      // instrução sql para listar laboratorios
      const sql = 'SELECT lab_id, nome_laboratorio, lab_cnpj FROM laboratorio;';
      // executa a instrução de listagem no banco de dados
      const [rows] = await db.query(sql);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de laboratorios',
        itens: rows.length,
        dados: rows
      });
    }catch (error) {
      // retorna erro caso ocorra
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Cadastrar Laboratório
  async cadastrarLaboratorio(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { nome_laboratorio, lab_cnpj } = request.body;
      // instrução sql para inserção
      const sql = 'INSERT INTO laboratorio (nome_laboratorio, lab_cnpj) VALUES (?, ?);';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [nome_laboratorio, lab_cnpj];
      // executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o id do registro inserido
      return response.status(201).json({
        sucesso: true,
        mensagem: 'Laboratório cadastrado com sucesso.',
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

  // Editar Laboratório
  async editarLaboratorio(request, response) {
    try {
      // parametros passados via url
      const { lab_id } = request.params;
      // parametros passados via corpo de requisição
      const { nome_laboratorio, lab_cnpj } = request.body;
      // instrução sql para edição
      const sql = 'UPDATE laboratorio SET nome_laboratorio = ?, lab_cnpj = ? WHERE lab_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [nome_laboratorio, lab_cnpj, lab_id];
      // executa a instrução de edição no banco de dados
      const [rows] = await db.query(sql, values)
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Laboratório atualizado com sucesso.',
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

  // Apagar Laboratório
  async apagarLaboratorio(request, response) {
    try {
      // parametros passados via url
      const { lab_id } = request.params;
      // instrução sql para apagar
      const sql = 'DELETE FROM laboratorio WHERE lab_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [lab_id];
      // executa a instrução de apagar no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Laboratório apagado com sucesso.',
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
