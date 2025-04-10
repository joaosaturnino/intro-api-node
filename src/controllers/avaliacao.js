const db = require('../dataBase/connection');

module.exports = {

  // Listar Avaliações
  async listarAvaliacao(request, response) {
    try {
      const sql = 'SELECT avaliacoesSELECT ava_id, usu_id, far_id, nota, ava_comentario FROM avaliacoes';
      const avaliacoes = await db.query(sql);

      return response.status(200).json({
        confirma: 'Sucesso, nResults: avaliacoes[0].length', 
        message: avaliacoes[0]});
        
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Avaliações para.',
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

  // Cadastrar Avaliações
  async cadastrarAvaliacao(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Avaliações.',
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

  // Editar Avaliações
  async editarAvaliacao(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Avaliações.',
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

  // Apagar Avaliações
  async apagarAvaliacao(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Avaliações.',
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
