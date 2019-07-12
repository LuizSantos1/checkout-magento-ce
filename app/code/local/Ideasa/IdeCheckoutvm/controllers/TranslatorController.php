<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_TranslatorController extends Mage_Checkout_Controller_Action {

    public function indexAction() {
        $helper = Mage::helper('idecheckoutvm');
        
        $result['street_address_2'] = $helper->__('Street Address_2');
        $result['street_address_3'] = $helper->__('Street Address_3');
        $result['street_address_4'] = $helper->__('Street Address_4');
        
        $this->getResponse()->setBody(Mage::helper('core')->jsonEncode($result));
    }
}