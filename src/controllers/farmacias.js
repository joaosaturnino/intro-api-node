const db = require('../dataBase/connection');

module.exports = {

  // Listar farmácias
  async listarFarmacias(request, response) {
    try {
      const sql = 'SELECT farm_id, farm_nome, farm_endereco, farm_telefone, farm_email, cnpj, farm_logo, func_id FROM farmacias;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de farmacias',
        itens: rows.length,
        dados: rows
      });
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
  },

  // Cadastrar farmácias
  async cadastrarFarmacias(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar farmacias.',
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

  // Editar farmácias
  async editarFarmacias(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar farmacias.',
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
