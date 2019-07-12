<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Block_Onepage_Ssl extends Mage_Core_Block_Template {

  protected function _construct() {
    parent::_construct();
  }

  public function isShowSslImage() {
    return Mage::getStoreConfigFlag(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::SHOW_SSL);
  }

  public function isShowSsl() {
    return Mage::getStoreConfigFlag(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::SHOW_SSL);
  }
  
  public function getLinkSsl() {
    return Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::LINK_SSL);
  }

}
