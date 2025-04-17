const db = require('../dataBase/connection');

module.exports = {

  // Listar funcionarios
  async listarFuncionario(request, response) {
    try {
      const sql = 'SELECT func_id, cargo, usu_id FROM funcionarios;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de funcionarios',
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

  // Cadastrar funcionarios
  async cadastrarFuncionario(request, response) {
    try {
      const {cargo, usu_id} = request.body;
      const sql = 'INSERT INTO funcionarios (cargo, usu_id) VALUES (?, ?);';
      const values = [cargo, usu_id];
      const confirmacao = await db.query(sql, values);

      const idInst = confirmacao[0].insertId;

      return response.status(200).json({confirma: 'sucesso', message: idInst})
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Editar funcionarios
  async editarFuncionario(request, response) {
    try {
      const {cargo, usu_id} = request.body;
      const {func_id} = request.params;
      const sql = 'UPDATE funcionarios SET cargo = ?, usu_id = ? WHERE func_id = ?;';
      const values = [cargo, usu_id, func_id];
      const confirmacao = await db.query(sql, values);

      const idInst = confirmacao[0].affectedRows;
      return response.status(200).json({confirma: 'sucesso', message: idInst})
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },

  // Apagar funcionarios
  async apagarFuncionario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Funcionarios.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },
}
