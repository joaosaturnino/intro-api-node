const db = require('../dataBase/connection');

module.exports = {
  async listarFamacias(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Farmacias.',
        dados: null
      });
    }catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  }
}
