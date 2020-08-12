<?php

##idea.licenca##

class Ideasa_IdeAddons_CepController extends Mage_Core_Controller_Front_Action {

	public function indexAction() {
		if (!$this->getRequest()->isPost()) {
			return $this->getResponse()->setHttpResponseCode(504);
		}
		$cep = $this->getRequest()->getParam('cep');

		$repVirtual = Mage::getModel('ideaddons/repvirtual');
		$address = $repVirtual->getAddress($cep);

		$this->getResponse()
			->setHttpResponseCode(200)
			->setBody(Mage::helper('core')->jsonEncode($address));
	}
}