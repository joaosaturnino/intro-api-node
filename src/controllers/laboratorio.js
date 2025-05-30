const db = require("../dataBase/connection");
const { json, response } = require("express");

// Controller para gerenciar avaliações
// Este módulo contém funções para listar, cadastrar, editar e apagar avaliações no banco de dados
module.exports = {
  // Listar Laboratório
  async listarLaboratorio(request, response) {
    try {
      // instrução sql para listar laboratorios
      const sql = "SELECT lab_id, nome_laboratorio, lab_cnpj FROM laboratorio;";
      // executa a instrução de listagem no banco de dados
      const [rows] = await db.query(sql);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: "Lista de laboratorios",
        itens: rows.length,
        dados: rows,
      });
      // retorna erro caso ocorra
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: "Erro na requisição.",
        dados: error.mensage,
      });
    }
  },

  // Cadastrar Laboratório
  async cadastrarLaboratorio(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { nome_laboratorio, lab_cnpj } = request.body;
      // instrução sql para inserção
      const sql =
        "INSERT INTO laboratorio (nome_laboratorio, lab_cnpj) VALUES (?, ?);";
      // definição de array com paramentros que receberão os valores do front-end
      const values = [nome_laboratorio, lab_cnpj];
      // executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o id do registro inserido
      return response.status(201).json({
        sucesso: true,
        mensagem: "Laboratório cadastrado com sucesso.",
        itens: rows.length,
        dados: rows,
      });
      // retorna erro caso ocorra
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: "Erro na requisição.",
        dados: error.mensage,
      });
    }
  },

  // Editar Laboratório
  async editarLaboratorio(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { nome_laboratorio, lab_cnpj } = request.body;
      // parametros passados via url
      const { lab_id } = request.params;
      // instrução sql para edição
      const sql =
        "UPDATE laboratorio SET nome_laboratorio = ?, lab_cnpj = ? WHERE lab_id = ?;";
      // definição de array com paramentros que receberão os valores do front-end
      const values = [nome_laboratorio, lab_cnpj, lab_id];
      // executa a instrução de edição no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: "Laboratório atualizado com sucesso.",
        itens: rows.length,
        dados: rows,
      });
      // retorna erro caso ocorra
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: "Erro na requisição.",
        dados: error.mensage,
      });
    }
  },

  // Apagar Laboratório
  async apagarLaboratorio(request, response) {
    try {
      // parametros passados via url
      const { lab_id } = request.params;
      // instrução sql para apagar
      const sql = "DELETE FROM laboratorio WHERE lab_id = ?;";
      // definição de array com paramentros que receberão os valores do front-end
      const values = [lab_id];
      // executa a instrução de apagar no banco de dados
      const [rows] = await db.query(sql, values);

      if (rows.affectedRows === 0) {
        return response.status(404).json({
          sucesso: false,
          mensagem: `Medicamento ${lab_id} não encontrado.`,
          dados: null,
        });
      }
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: "Laboratório apagado com sucesso.",
        itens: rows.length,
        dados: rows,
      });
      // retorna erro caso ocorra
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: "Erro na requisição.",
        dados: error.mensage,
      });
    }
  },

  // // listar laboratorio específico
  // async listarUnicoLaboratorio(request, response) {
  //   try {
  //     // parametros passados via url
  //     const { lab_id } = request.params;
  //     // instrução sql para listar laboratorio específico
  //     const sql = 'SELECT lab_id, nome_laboratorio, lab_cnpj FROM laboratorio WHERE lab_id = ?;';
  //     // definição de array com paramentros que receberão os valores do front-end
  //     const values = [lab_id];
  //     // executa a instrução de listagem no banco de dados
  //     const [rows] = await db.query(sql, values);
  //     // exibe o resultado da consulta
  //     return response.status(200).json({
  //       sucesso: true,
  //       mensagem: 'Laboratório encontrado.',
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
};
