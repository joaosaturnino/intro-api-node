const db = require('../dataBase/connection');

module.exports = {

  // Listar Laboratório
  async listarLaboratorio(request, response) {
    try {
      const sql = 'SELECT lab_id, nome_laboratorio, lab_cnpj FROM laboratorio;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de laboratorios',
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

  // Cadastrar Laboratório
  async cadastrarLaboratorio(request, response) {
    try {
      const { nome_laboratorio, lab_cnpj } = request.body;
      const sql = 'INSERT INTO laboratorio (nome_laboratorio, lab_cnpj) VALUES (?, ?);';  
      const values = [nome_laboratorio, lab_cnpj];
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

  // Editar Laboratório
  async editarLaboratorio(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Laboratórios.',
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

  // Apagar Laboratório
  async apagarLaboratorio(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Laboratórios.',
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
