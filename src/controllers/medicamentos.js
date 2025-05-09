const db = require("../dataBase/connection");
const { json, response } = require("express");

var fs = require("fs-extra");

function geraUrl(e) {
  // garantir que os valores em branco carreguem algo
  let img = e.med_img ? e.med_img : "sem.jpg";
  //verifica se imagem existe
  if (!fs.existsSync("./upload/medicamentos/" + img)) {
    img = "sem.jpg";
  }

  const medicamento = {
    med_id: e.med_id,
    med_nome: e.med_nome,
    med_dosagem: e.med_dosagem,
    med_quantidade: e.med_quantidade,
    forma_id: e.forma_id,
    descricao: e.descricao,
    lab_id: e.lab_id,
    med_img: "http://192.168.158.164:3333/upload/medicamentos/" + img, //+ img,
    tipo_id: e.tipo_id,
  };
  return medicamento;
}

// Controller para gerenciar medicamentos
// Este módulo contém funções para listar, cadastrar, editar e apagar medicamentos no banco de dados
module.exports = {
  //Listar todos os medicamentos
  async listarMedicamentos(request, response) {
    try {
      // indtrução sql para listar medicamentos
      const sql = `SELECT 
      med_id, med_nome, med_dosagem, med_quantidade, 
      forma_id, descricao, lab_id, med_img, tipo_id 
      FROM medicamento;`;
      // executa a instrução de listagem no banco de dados
      const [rows] = await db.query(sql);

      //chamada para montar url
      const resultado = medicamento[0].map(geraUrl);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: "Lista de medicamentos",
        itens: rows.length,
        dados: resultado,
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

  // async listarMedicamentosParametros(request, response) {

  //   try {
  //     const { med_nome } = request.body;
  //     const medPesq = med_nome ? `%${med_nome}%` : `%%`;
  //     // instrução sql para listar medicamentos
  //     const sql = 'SELECT med_id, med_nome, med_dosagem, med_quantidade, forma_id descricao, lab_id, med_img, tipo_id FROM medicamento WHERE med_nome like ?;';

  //     const values = [medPesq];
  //     // executa a instrução de listagem no banco de dados
  //     const [rows] = await db.query(sql, values);
  //     const medicamentos = await db.query(sql, values);
  //     const nItens = medicamentos[0].length;

  //     // chamada para montar a url da imagem
  //     //const resultado = medicamentos[0].map(geraUrl);
  //     // exibe o resultado da consulta
  //     return response.status(200).json({
  //       sucesso: true,
  //       mensagem: 'Lista de medicamentos',
  //       itens: rows.length,
  //       dados: rows, //medicamentos[0], // , medicamentos, //, resultado
  //       nItens
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

  // Cadastrar medicamentos
  async cadastrarMedicamentos(request, response) {
    try {
      // parametros passados via corpo de requisição
      const {
        med_nome,
        med_dosagem,
        med_quantidade,
        forma_id,
        lab_id,
        med_img,
        tipo_id,
      } = request.body;
      // instrução sql para inserção
      const sql =
        "INSERT INTO medicamento (med_nome, med_dosagem, med_quantidade, forma_id, lab_id, med_img, tipo_id) VALUES (?, ?, ?, ?, ?, ?, ?);";
      // definição de array com paramentros que receberão os valores do front-end
      const values = [
        med_nome,
        med_dosagem,
        med_quantidade,
        forma_id,
        lab_id,
        med_img,
        tipo_id,
      ];
      // executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o id do registro inserido
      return response.status(201).json({
        sucesso: true,
        mensagem: "Medicamento cadastrado com sucesso.",
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

  // Editar medicamentos
  async editarMedicamentos(request, response) {
    try {
      // parametros passados via corpo de requisição
      const {
        med_nome,
        med_dosagem,
        med_quantidade,
        forma_id,
        lab_id,
        med_img,
        tipo_id,
      } = request.body;
      // parametros passados via url
      const { med_id } = request.params;
      // instrução sql para edição
      const sql =
        "UPDATE medicamento SET med_nome = ?, med_dosagem = ?, med_quantidade = ?, forma_id = ?, lab_id = ?, med_img = ?, tipo_id = ? WHERE med_id = ?;";
      // definição de array com paramentros que receberão os valores do front-end
      const values = [
        med_nome,
        med_dosagem,
        med_quantidade,
        forma_id,
        lab_id,
        med_img,
        tipo_id,
        med_id,
      ];
      // executa a instrução de edição no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: "Medicamento editado com sucesso.",
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

  // Apagar medicamentos
  async apagarMedicamentos(request, response) {
    try {
      // parametros passados via url
      const { med_id } = request.params;
      // instrução sql para apagar medicamento
      const sql = "DELETE FROM medicamento WHERE med_id = ?;";
      // definição de array com paramentros que receberão os valores do front-end
      const values = [med_id];
      // executa a instrução de apagar no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: "Medicamento apagado com sucesso.",
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

  // // listar medicamento especifico
  // async listarUnicoMedicamento(request, response) {
  //   try {
  //     // parametros passados via url
  //     const { med_id } = request.params;
  //     // instrução sql para listar medicamento especifico
  //     const sql = 'SELECT med_id, med_nome, med_dosagem, med_quantidade, forma_id descricao, lab_id, med_img, tipo_id FROM medicamento WHERE med_id = ?;';
  //     // definição de array com paramentros que receberão os valores do front-end
  //     const values = [med_id];
  //     // executa a instrução de listagem no banco de dados
  //     const [rows] = await db.query(sql, values);
  //     // exibe o resultado da consulta
  //     return response.status(200).json({
  //       sucesso: true,
  //       mensagem: 'Medicamento encontrado.',
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
