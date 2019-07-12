<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Block_Widget_Taxvat extends Mage_Customer_Block_Widget_Taxvat {

    public function _construct() {
        parent::_construct();
    }

    public function printTaxvat() {
        $map = Ideasa_Data_Config::getCustomerField('taxvat');
        $input = new Ideasa_Data_Form_Tel(array('name' => $this->getFieldName('taxvat'),
                    'required' => $this->isRequired(),
                    'title' => $map['title'],
                    'label' => $map['label'],
                    'value' => $this->htmlEscape($this->getTaxvat()),
                ));
        $input->setId($this->getFieldId('taxvat'));
        $input->setValue($this->htmlEscape($this->getTaxvat()));
        $input->setForm($this->getForm());

        $div = new Ideasa_Data_Form_Div('taxvat', $input, array('id' => $input->getId()));
        echo $div->toHtml();
    }

}