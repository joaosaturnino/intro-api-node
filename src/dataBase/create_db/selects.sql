SELECT ava_id, usu_id, far_id, nota, ava_comentario
FROM avaliacao; -- ok

SELECT cidade_id, nome_cidade, uf_sigla FROM cidade; -- ok

SELECT farm_id, farm_nome, farm_endereco, farm_telefone, farm_email, farm_senha, cnpj,
farm_logo, func_id, cid_id
FROM farmacia; -- ok

SELECT forma_id, forma_nome
FROM forma_farmaceutica; -- ok

SELECT func_id, cargo, usu_id
FROM funcionarios; -- ok

SELECT lab_id, nome_laboratorio, lab_cnpj
FROM laboratorio; -- ok

SELECT med_id, med_nome, med_dosagem, med_quantidade, forma_id,
descricao, lab_id, med_img, tipo_id
FROM medicamento; -- ok

SELECT medpreco_id, farmacia_id, med_id, preco FROM medpreco;

SELECT pre_id, preco, medpreco_id, ativo
FROM preco; -- ok

SELECT promo_id, farm_id, med_id, promo_desconto, promo_inicio, promo_fim
FROM promocao; -- ok

SELECT tipo_id, nome_tipo FROM tipo_produto;

SELECT usu_id, usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id
FROM usuarios; -- ok





