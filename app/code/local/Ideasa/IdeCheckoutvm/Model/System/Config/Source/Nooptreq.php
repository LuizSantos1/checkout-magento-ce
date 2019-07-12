<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Model_System_Config_Source_Nooptreq {

    public function toOptionArray() {
        $helper = Mage::helper('idecheckoutvm');
        return array(
            array('value' => 'opt', 'label' => $helper->__('Optional')),
            array('value' => 'req', 'label' => $helper->__('Required')),
        );
    }

}