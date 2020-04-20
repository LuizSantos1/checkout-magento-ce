<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Block_Onepage_Link extends Mage_Core_Block_Template {

	public function isPossibleCheckoutvm() {
		return $this->helper('idecheckoutvm')->isCheckoutEnabled();
	}

	public function checkEnable() {
		return Mage::getSingleton('checkout/session')->getQuote()->validateMinimumAmount();
	}

	public function getCheckoutvmUrl() {
		//$websiteId = Mage::app()->getWebsite()->getId();
		$storeId = Mage::app()->getStore()->getStoreId();

		return $this->getUrl('idecheckoutvm', array('_store' => $storeId, '_secure' => true));
	}

}