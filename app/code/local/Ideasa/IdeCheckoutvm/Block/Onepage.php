<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Block_Onepage extends Mage_Checkout_Block_Onepage {

    public function _construct() {
        parent::_construct();
    }

    public function getTitle() {
        return Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::GERAL_TITLE);
    }

    public function hasTitle() {
        return strlen($this->getTitle());
    }

}