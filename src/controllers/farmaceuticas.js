const db = require('../dataBase/connection');

module.exports = {

  // Listar todas as formas farmaceuticas
  async listarFarmaceutica(request, response) {
    try {
      const sql = 'SELECT forma_id, forma_nome FROM forma_farmaceutica;';

      const [rows] = await db.query(sql);

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

  // Cadastrar uma nova forma farmaceutica
  async cadastrarFarmaceutica(request, response) {
    try {
      const { forma_nome } = request.body;
      const sql = 'INSERT INTO forma_farmaceutica (forma_nome) VALUES (?);';
      const values = [forma_nome];
      const confirmacao = await db.query(sql, values);

      const idInst = confirmacao[0].insertId;

      return response.status(200).json({confirmacao: 'sucesso', message: idInst})
    
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Editar uma forma farmaceutica
  async editarFarmaceutica(request, response) {
    try {
      const { forma_nome } = request.body;
      const { forma_id } = request.params;
      const sql = 'UPDATE forma_farmaceutica SET forma_nome = ? WHERE forma_id = ?;';
      const values = [forma_nome, forma_id];

      const atualizacao = await db.query(sql, values);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Forma farmaceutica atualizada com sucesso.',
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

  // Apagar uma forma farmaceutica
  async apagarFarmaceutica(request, response) {
    try {
      const { forma_id } = request.body;
      const sql = 'DELETE FROM forma_farmaceutica WHERE forma_id = ?;';
      const values = [forma_id];

      const confirmacao = await db.query(sql, values);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Forma farmaceutica apagada com sucesso.',
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
