A cada campo customizado que for adicionado, você deverá alterar os templates de e-mail do cliente.

Para alterar os templates de e-mail, vá até "Sistema > Clientes > Configurações > Templates de Endereço"

-------------------------------------------
----Exemplo de template do tipo "Texto"----
-------------------------------------------
{{depend prefix}}{{var prefix}} {{/depend}}{{var firstname}} {{depend middlename}}{{var middlename}} {{/depend}}{{var lastname}}{{depend suffix}} {{var suffix}}{{/depend}}
{{depend company}}{{var company}}{{/depend}}
{{if street1}}{{var street1}}
{{/if}}
{{depend street2}}{{var street2}}{{/depend}}
{{depend street3}}{{var street3}}{{/depend}}
{{depend street4}}{{var street4}}{{/depend}}
{{if city}}{{var city}},  {{/if}}{{if region}}{{var region}}, {{/if}}{{if postcode}}{{var postcode}}{{/if}}
{{var country}}
T: {{var telephone}}
{{depend mobile}}<br/>Celular: {{var mobile}}{{/depend}}
{{depend fax}}F: {{var fax}}{{/depend}}
{{depend vat_id}}VAT: {{var vat_id}}{{/depend}}
-------------------------------------------
--------------------FIM--------------------
-------------------------------------------

Faça isso para as seguintes entradas, para que as informações apareçam nas demais áreas do cliente
    - "Texto Uma Linha"
    - "HTML"
    - "PDF"
    - "JavaScript Template"

----- TODO: ainda não está pronto -----
2 - Adicionar campos PF/PJ na área do cliente
    - edite o arquivo <MAGENTO-HOME>/app/design/frontend/base/default/template/customer/form/edit.phtml;
    - insira o trecho de código logo abaixo do campo email (+/- linha 44):
        <?php $_tipopessoa = $this->getLayout()->createBlock('customer/widget_tipopessoa') ?>
        <?php if ($_tipopessoa->isEnabled()): ?>
            <li><?php echo $_tipopessoa->setTipopessoa($this->getCustomer()->getTipopessoa())->toHtml() ?></li>
        <?php endif ?>
        <?php $_rg = $this->getLayout()->createBlock('customer/widget_rg') ?>
        <?php if ($_rg->isEnabled()): ?>
            <li><?php echo $_rg->setRg($this->getCustomer()->getRg())->toHtml() ?></li>
        <?php endif ?>
		<?php $_inscricao = $this->getLayout()->createBlock('customer/widget_inscricao') ?>
        <?php if ($_inscricao->isEnabled()): ?>
            <li><?php echo $_inscricao->setInscEst($this->getCustomer()->getInscEst())->toHtml() ?></li>
        <?php endif ?>
		<?php $_razao = $this->getLayout()->createBlock('customer/widget_razaosocial') ?>
        <?php if ($_razao->isEnabled()): ?>
            <li><?php echo $_razao->setRazaoSocial($this->getCustomer()->getRazaoSocial())->toHtml() ?></li>
        <?php endif ?>
		<?php $_fantasia = $this->getLayout()->createBlock('customer/widget_nomefantasia') ?>
        <?php if ($_fantasia->isEnabled()): ?>
            <li><?php echo $_fantasia->setNomeFantasia($this->getCustomer()->getNomeFantasia())->toHtml() ?></li>
        <?php endif ?>

----------- Adicionar campo Mobile no cliente ------------
No arquivo "MAGENTO-HOME/app/design/frontend/base/default/template/customer/address/edit.phtml", por volta da linha 57, logo acima 
do campo "telephone".

<?php $mobile = $this->getLayout()->createBlock('customer/address_mobile') ?>
<?php if ($mobile->isEnabled()): ?>
    <?php echo $mobile->setAddress($this->getAddress())->toHtml() ?>
<?php endif ?>