<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Block_Widget_Gender extends Mage_Customer_Block_Widget_Gender {

    public function _construct() {
        parent::_construct();
    }

    public function printGender() {
        $map = Ideasa_Data_Config::getCustomerField('gender');
        $map['id'] = $this->getFieldId('gender');
        $map['name'] = $this->getFieldName('gender');
        $map['required'] = $this->isRequired();

        $options = Mage::getResourceSingleton('customer/customer')->getAttribute('gender')->getSource()->getAllOptions();
        $input = new Ideasa_Data_Form_Select($map);
        $input->setId($map['id']);
        $input->setValue($this->getGender());
        $input->setValues($options);
        $input->setForm($this->getForm());

        $line = new Ideasa_Data_Form_Div('gender', $input, null);
        $line->setId($map['id']);

        echo $line->toHtml();
    }

}