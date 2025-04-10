const db = require('../dataBase/connection');

module.exports = {

  // Listar todos os medicamentos
  async listarMedicamentos(request, response) {
    
    try {
      const sql = 'SELECT med_id, med_nome, med_dosagem, med_quantidade, tipo_produto, forma_id, descricao, lab_id, med_img FROM medicamentos';
      const medicamentos = await db.query(sql);

      return response.status(200).json({
        confirma: 'Sucesso, nResults: medicamentos[0].length', 
        message: medicamentos[0]});
      
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
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar medicamentos.',
        dados: null
      });
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