<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Block_Widget_Company extends Mage_Customer_Block_Widget_Abstract {
    /**
     * 
     */
    const REQ = 'req';

    public function _construct() {
        parent::_construct();
    }

    /**
     *
     * @return type boolean
     */
    protected function isCompanyRequired() {
        return (bool) (Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::COMPANY) == self::REQ);
    }

    public function printCompany() {
        $map = Ideasa_Data_Config::getCustomerField('company');
        $map['id'] = $this->getFieldId('company');
        $map['name'] = $this->getFieldName('company');
        $map['required'] = $this->isCompanyRequired();

        $input = new Ideasa_Data_Form_Text($map);
        $input->setId($map['id']);
        $input->setValue($this->htmlEscape($this->getCompany()));
        $input->setForm($this->getForm());

        $line = new Ideasa_Data_Form_Div('company', $input, null);
        $line->setId($map['id']);

        echo $line->toHtml();
    }

}