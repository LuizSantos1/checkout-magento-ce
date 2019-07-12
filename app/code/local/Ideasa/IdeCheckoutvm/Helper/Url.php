<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Helper_Url extends Mage_Checkout_Helper_Url {

    public function getCheckoutUrl() {
        return $this->_getUrl('idecheckoutvm', array('_secure' => true));
    }

}