# Checkout Transparente para Magento

Este checkout foi extendido e melhorado tendo como base a versão do Checkout Venda Mais da empresa IDEA Tecnologia da Informação S/A. 

## Recursos

## Perguntas Frequentes

## Dependências

O módulo de checkout para Magento precisa do módulo [Bootstrap para Magento CE](https://github.com/eloom/bootstrap-magento-ce)


## Compatibilidade

- [x] Magento 1.9.3.x

- [x] PHP/PHP-FPM 5.6

## Documentação

A documentação do pode ser acessada neste link [Checkout Venda Mais](https://ipagare.zendesk.com/hc/pt-br/sections/202400166-7-Checkout-Venda-Mais)

## Começando

Os projetos da élOOm utilizam o [Apache Ant](https://ant.apache.org/) para publicar o projeto nos ambientes de **desenvolvimento** e de **teste** e para gerar os pacotes para o **ambiente de produção**.

- Publicando no **ambiente local**

	- no arquivo **build-desenv.properties**, informe o path do **Document Root** na propriedade "projetos.path";
	
	- na raiz deste projeto, execute, no prompt, o comando ```ant -f build-desenv.xml```.
	
	
	> a tarefa Ant irá copiar todos os arquivos do projeto no seu Magento e limpar a cache.
	

- Publicando para o **ambiente de produção**

	- na raiz deste projeto, execute, no prompt, o comando ```ant -f build-producao.xml```.
	
	
	> a tarefa Ant irá gerar um pacote no formato .zip, no caminho definido na propriedade "projetos.path", do arquivo **build-producao.properties**.

	> os arquivos .css e .js serão comprimidos automáticamente usando o [YUI Compressor](https://yui.github.io/yuicompressor/).


## Removendo o Checkout Venda Mais 

##### Removendo do banco de dados

DELETE FROM `core_resource` WHERE CODE = 'idecheckoutvm_setup';

DELETE FROM `eav_attribute` WHERE attribute_code = 'tipo_pessoa';
DELETE FROM `eav_attribute` WHERE attribute_code = 'rg';
DELETE FROM `eav_attribute` WHERE attribute_code = 'razao_social';
DELETE FROM `eav_attribute` WHERE attribute_code = 'nome_fantasia';
DELETE FROM `eav_attribute` WHERE attribute_code = 'insc_est';
DELETE FROM `eav_attribute` WHERE attribute_code = 'mobile';

ALTER TABLE `sales_flat_order` DROP COLUMN customer_tipo_pessoa;
ALTER TABLE `sales_flat_quote` DROP COLUMN customer_tipo_pessoa;

ALTER TABLE `sales_flat_order` DROP COLUMN customer_razao_social;
ALTER TABLE `sales_flat_quote` DROP COLUMN customer_razao_social;

ALTER TABLE `sales_flat_order` DROP COLUMN customer_nome_fantasia;
ALTER TABLE `sales_flat_quote` DROP COLUMN customer_nome_fantasia;

ALTER TABLE `sales_flat_order` DROP COLUMN customer_rg;
ALTER TABLE `sales_flat_quote` DROP COLUMN customer_rg;

ALTER TABLE `sales_flat_order` DROP COLUMN customer_insc_est;
ALTER TABLE `sales_flat_quote` DROP COLUMN customer_insc_est;

ALTER TABLE `sales_flat_order_address` DROP COLUMN mobile;
ALTER TABLE `sales_flat_quote_address` DROP COLUMN mobile;

ALTER TABLE `sales_flat_order` DROP COLUMN mobile;
ALTER TABLE `sales_flat_quote` DROP COLUMN mobile;

DELETE FROM `sales_flat_quote`;
DELETE FROM `sales_flat_order`;

DELETE FROM `core_config_data` WHERE path LIKE '%idecheckoutvm%';