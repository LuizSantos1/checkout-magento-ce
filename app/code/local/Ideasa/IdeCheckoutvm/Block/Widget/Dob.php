<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Block_Widget_Dob extends Mage_Customer_Block_Widget_Dob {

    public function _construct() {
        parent::_construct();
        $this->setTemplate('ideasa/idecheckoutvm/widget/dob.phtml');
    }

    public function printDob() {
        echo $this->toHtml();
    }
}