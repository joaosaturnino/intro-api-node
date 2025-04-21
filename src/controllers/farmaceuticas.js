const db = require('../dataBase/connection');

module.exports = {

  // Listar todas as formas farmaceuticas
  async listarFarmaceutica(request, response) {
    try {
      // instrução sql para listar formas farmaceuticas
      const sql = 'SELECT forma_id, forma_nome FROM forma_farmaceutica;';
      // executa a instrução de listagem no banco de dados
      const [rows] = await db.query(sql);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de formas farmaceuticas',
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

  // Cadastrar uma nova forma farmaceutica ok
  async cadastrarFarmaceutica(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { forma_nome } = request.body;
      // instrução sql para inserção
      const sql = 'INSERT INTO forma_farmaceutica (forma_nome) VALUES (?);';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [forma_nome];
      // executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o id do registro inserido
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Forma farmaceutica cadastrada com sucesso.',
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

  // Editar uma forma farmaceutica ok
  async editarFarmaceutica(request, response) {
    try {
      // parametros passados via corpo de requisição
      const { forma_nome } = request.body;
      // parametros passados via url
      const { forma_id } = request.params;
      // instrução sql para edição
      const sql = 'UPDATE forma_farmaceutica SET forma_nome = ? WHERE forma_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [forma_nome, forma_id];
      // executa a instrução de edição no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o id do registro editado
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Forma farmaceutica editada com sucesso.',
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

  // Apagar uma forma farmaceutica ok
  async apagarFarmaceutica(request, response) {
    try {
      // parametros passados via url
      const { forma_id } = request.params;
      // instrução sql para apagar
      const sql = 'DELETE FROM forma_farmaceutica WHERE forma_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [forma_id];
      // executa a instrução de apagar no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o id do registro apagado
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Forma farmaceutica apagada com sucesso.',
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
