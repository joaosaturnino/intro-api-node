const db = require('../dataBase/connection');

module.exports = {

  // Listar farmácias
  async listarFarmacias(request, response) {
    try {
      const sql = 'SELECT farm_id, farm_nome, farm_endereco, farm_telefone, farm_email, farm_senha, cnpj, farm_logo, func_id, cid_id FROM farmacia;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de farmacias',
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

  // Cadastrar farmácias nao funciona
  async cadastrarFarmacias(request, response) {
    try {
      const { farm_nome, farm_endereco, farm_telefone, farm_email, farm_senha, cnpj, farm_logo, func_id, cid_id} = request.body;
      const sql = 'INSERT INTO farmacia (farm_nome, farm_endereco, farm_telefone, farm_email, farm_senha, cnpj, farm_logo, func_id, cid_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
      const values = [farm_nome, farm_endereco, farm_telefone, farm_email, farm_senha, cnpj, farm_logo, func_id, cid_id];
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

  // Editar farmácias
  async editarFarmacias(request, response) {
    try {
      const { farm_nome, farm_endereco, farm_telefone, farm_email, farm_senha, cnpj, farm_logo, func_id, cid_id} = request.body;
      const { farm_id } = request.params;
      const sql = 'UPDATE farmacia SET farm'
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },

  // Apagar farmácias
  async apagarFarmacias(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar farmacias.',
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
