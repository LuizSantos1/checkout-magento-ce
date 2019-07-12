# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)


### Como remover o Checkout Venda Mais? ###

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