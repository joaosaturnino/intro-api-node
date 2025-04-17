const db = require('../dataBase/connection');

module.exports = {

  // Listar Cidades
  async listarCidade(request, response) {
    try {
      const sql = 'SELECT cidade_id, nome_cidade, uf_sigla FROM cidade;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de cidades',
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

  // Cadastrar Cidades ok
  async cadastrarCidade(request, response) {
    try {
     const { nome_cidade, uf_sigla } = request.body;
     const sql = 'INSERT INTO cidade (nome_cidade, uf_sigla) VALUES (?, ?);';
     const values = [nome_cidade, uf_sigla];
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

  // Editar Cidades
  async editarCidade(request, response) {
    try {
      const { nome_cidade, us_sigla} =request.body;
      const { cidade_id} = request.params;
      const sql = 'UPDATE cidade SET nome_cidade = ?, uf_sigla = ? WHERE cidade_id = ?;';
      const values = [nome_cidade, us_sigla, cidade_id];
      const confirmacao = await db.query(sql, values);

      return response.status(200).json({
        sucesso: true,
        nensagem: 'Cidade editada com sucesso',
        dados: confirmacao[0].affectedRows,
      })
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },

  // Apagar Cidades
  async apagarCidade(request, response) {
    try {
      const { cidade_id } = request.body;
      const sql = 'DELETE FROM cidade WHERE cidade_id = ?;';
      const values = [cidade_id];
      const confirmacao = await db.query(sql, values);

      const idInst = confirmacao[0].affectedRowa;
      return response.status(200).json({
        sucesso: true,
        mensagem: "Cidade apagada com sucesso",
      })
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },
}
