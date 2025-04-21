const db = require('../dataBase/connection');

module.exports = {

  // Listar todos os usuários
  async listarUsuario(request, response) {
    try {
      // instrução sql para listar usuários
      const sql = 'SELECT usu_id, usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id FROM usuarios;';
      // executa a instrução de listagem no banco de dados
      const [rows] = await db.query(sql);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de usuarios',
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

  // Cadastrar um novo usuário
  async cadastrarUsuario(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id } = request.body;
      // instrução sql para inserção
      const sql = 'INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id) VALUES (?, ?, ?, ?, ?, ?);';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id];
      // executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);
      return response.status(201).json({
        sucesso: true,
        mensagem: 'Usuário cadastrado com sucesso.',
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

  // Editar um usuário existente
  async editarUsuario(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id } = request.body;
      // parametros passados via url
      const { usu_id } = request.params;
      // instrução sql para atualização
      const sql = 'UPDATE usuarios SET usu_nome = ?, usu_email = ?, usu_senha = ?, usu_cpf = ?, usu_tipo = ?, cid_id = ? WHERE usu_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id, usu_id];
      // executa a instrução de atualização no banco de dados
      const [rows] = await db.query(sql, values);
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Usuário atualizado com sucesso.',
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
  
  // Apagar um usuário existente
  async apagarUsuario(request, response) {
    try {
      // parametros passados via url
      const { usu_id } = request.params;
      // instrução sql para deleção
      const sql = 'DELETE FROM usuarios WHERE usu_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [usu_id];
      // executa a instrução de deleção no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Usuário apagado com sucesso.',
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
