<?php

##idea.licenca##

class Ideasa_IdeAddons_CepController extends Mage_Core_Controller_Front_Action {

    public function indexAction() {
        if (!$this->getRequest()->isPost()) {
            return;
        }
        $cep = $this->getRequest()->getParam('cep');

        $repVirtual = Mage::getModel('ideaddons/repvirtual');
        $endereco = $repVirtual->getAddress($cep);
        $this->getResponse()->setBody(Mage::helper('core')->jsonEncode($endereco));
    }
}