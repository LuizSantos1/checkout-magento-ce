<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Model_System_Config_Source_Required {

    public function toOptionArray() {
        $helper = Mage::helper('idecheckoutvm');
        return array(
            array('value' => 'req', 'label' => $helper->__('Required')),
        );
    }

}