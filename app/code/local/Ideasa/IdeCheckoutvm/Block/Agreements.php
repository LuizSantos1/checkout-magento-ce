<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Block_Agreements extends Mage_Checkout_Block_Agreements {

    public function getAgreements() {
        if (!$this->hasAgreements()) {
            $agre = Mage::getModel('checkout/agreement')->getCollection()
                    ->addStoreFilter(Mage::app()->getStore()->getId())
                    ->addFieldToFilter('is_active', 1);
            $this->setAgreements($agre);
        }
        return $this->getData('agreements');
    }

    public function isAgreementsEnable() {
        return (bool) Mage::helper('idecheckoutvm/checkout')->isAgreementsEnable();
    }

    public function showInScreen() {
        return (bool) (Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::AGREEMENTS_OUTPUT) === 'screen');
    }

    public function showInScreenLight() {
        return (bool) (Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::AGREEMENTS_OUTPUT) === 'lightbox');
    }

}