SELECT ava_id, usu_id, far_id, nota, ava_comentario
FROM avaliacao;

SELECT cidade_id, nome_cidade, nome_estado FROM cidade;

SELECT estado_id, nome_estado FROM estado;

SELECT farm_id, farm_nome, farm_endereco, farm_telefone, farm_email, farm_senha, cnpj,
farm_logo, func_id, cid_id
FROM farmacia;

SELECT forma_id, forma_nome
FROM forma_farmaceutica;

SELECT func_id, cargo, usu_id
FROM funcionarios;

SELECT lab_id, nome_laboratorio, lab_cnpj
FROM laboratorio;

SELECT med_id, med_nome, med_dosagem, med_quantidade, forma_id,
descricao, lab_id, med_img, farmacia_id, tipo_id
FROM medicamento;

SELECT medpreco_id, farmacia_id, med_id FROM medpreco;

SELECT pre_id, preco, medpreco_id, ativo
FROM preco;

SELECT promo_id, farm_id, med_id, promo_desconto, promo_inicio, promo_fim
FROM promocao;

SELECT tipo_id, nome_tipo FROM tipo_produto;

SELECT usu_id, usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id
FROM usuarios;




