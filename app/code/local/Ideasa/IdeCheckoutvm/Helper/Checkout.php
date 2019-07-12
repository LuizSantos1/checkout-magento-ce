<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Helper_Checkout extends Mage_Core_Helper_Abstract {

  /**
   * 
   * 
   * @return type
   */
  public function isLoginLinkEnable() {
    return (bool) Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::LOGIN_LINK);
  }

  public function isAgreementsEnable() {
    return (bool) Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::AGREEMENTS);
  }

  /**
   * 
   * 
   * @return type
   */
  public function isShowLoginLink() {
    $helper = Mage::helper('idecheckoutvm/account');
    if ($helper->isDisableRegistration()) {
      return false;
    }
    if ($this->isLoginLinkEnable() && !Mage::getSingleton('customer/session')->isLoggedIn()) {
      return true;
    }

    return false;
  }

  public function isShowCouponLink() {
    return Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::COUPON);
  }

  

}