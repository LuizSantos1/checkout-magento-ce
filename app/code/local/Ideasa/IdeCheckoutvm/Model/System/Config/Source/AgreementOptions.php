<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Model_System_Config_Source_AgreementOptions {

    public function toOptionArray() {
        $helper = Mage::helper('checkout');
        $options = array(
            array('value' => 'screen', 'label' => $helper->__('Visualizar na tela')),
            array('value' => 'lightbox', 'label' => $helper->__('Visualizar em lightbox'))
        );
        return $options;
    }

}