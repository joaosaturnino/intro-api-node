const db = require('../dataBase/connection');

module.exports = {

  // Listar todos os medicamentos
  async listarMedicamentos(request, response) {

    try {
      const sql = 'SELECT med_id, med_nome, med_dosagem, med_quantidade, forma_id descricao, lab_id, med_img, tipo_id FROM medicamento;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de medicamentos',
        itens: rows.length,
        dados: rows
      });

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Medicamentos.',
        dados: null
      });
    }catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Cadastrar medicamentos
  async cadastrarMedicamentos(request, response) {
    try {
      const { med_nome, med_dosagem, med_quantidade, forma_id, lab_id, med_img, tipo_id } = request.body;
      const sql = 'INSERT INTO medicamento (med_nome, med_dosagem, med_quantidade, forma_id, lab_id, med_img, tipo_id) VALUES (?, ?, ?, ?, ?, ?, ?);';  
      const values = [med_nome, med_dosagem, med_quantidade, forma_id, lab_id, med_img, tipo_id];
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

  // Editar medicamentos
  async editarMedicamentos(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar medicamentos.',
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

  // Apagar medicamentos
  async apagarMedicamentos(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar medicamentos.',
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
