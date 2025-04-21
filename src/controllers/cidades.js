const db = require('../dataBase/connection');

module.exports = {

  // Listar Cidades
  async listarCidade(request, response) {
    try {
      // Instrução SQL para listar cidades
      const sql = 'SELECT cidade_id, nome_cidade, uf_sigla FROM cidade;';

      // Executa a consulta no banco de dados
      const [rows] = await db.query(sql);

      // Verifica se há registros retornados
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de cidades',
        itens: rows.length,
        dados: rows
      });
    }catch (error) {
      // Retorna erro caso ocorra
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
      // Parâmetros passados via corpo de requisição
     const { nome_cidade, uf_sigla } = request.body;
      // Instrução SQL para inserção
     const sql = 'INSERT INTO cidade (nome_cidade, uf_sigla) VALUES (?, ?);';
      // Definição de array com parâmetros que receberão os valores do front-end
     const values = [nome_cidade, uf_sigla];
      // Executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);

      // Verifica se há registros retornados
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cidade cadastrada com sucesso.',
        itens: rows.length,
        dados: rows
      });
    } catch (error) {
      // Retorna erro caso ocorra
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Editar Cidades ok
  async editarCidade(request, response) {
    try {
      // Parâmetros passados via corpo de requisição
      const { nome_cidade, us_sigla} =request.body;
      // parametros passados via URL
      const { cidade_id} = request.params;
      // Instrução SQL para atualização
      const sql = 'UPDATE cidade SET nome_cidade = ?, uf_sigla = ? WHERE cidade_id = ?;';
      const values = [nome_cidade, us_sigla, cidade_id];
      // Executa a instrução de atualização no banco de dados
      const [rows] = await db.query(sql, values);

      // Verifica se há registros retornados
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cidade editada com sucesso.',
        itens: rows.length,
        dados: rows
      });
    } catch (error) {
      // Retorna erro caso ocorra
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },

  // Apagar Cidades ok
  async apagarCidade(request, response) {
    try {
      // Parâmetro passado via URL
      const { cidade_id } = request.params;
      // Instrução SQL para exclusão
      const sql = 'DELETE FROM cidade WHERE cidade_id = ?;';
      // Definição de array com parâmetros que receberão os valores do front-end
      const values = [cidade_id];
      // Executa a instrução de exclusão no banco de dados
      const [rows] = await db.query(sql, values);

      // Verifica se há registros retornados
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cidade apagada com sucesso.',
        itens: rows.length,
        dados: rows
      });
    } catch (error) {
      // Retorna erro caso ocorra
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },
}
