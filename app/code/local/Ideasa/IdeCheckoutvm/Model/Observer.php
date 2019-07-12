<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Model_Observer {

    public function addHistoryComment($data) {
        $comment = Mage::getSingleton('customer/session')->getOrderCustomerComment();
        $comment = trim($comment);
        if (!empty($comment))
            $data['order']->addStatusHistoryComment($comment)->setIsVisibleOnFront(true)->setIsCustomerNotified(false);
    }

    public function removeHistoryComment() {
        Mage::getSingleton('customer/session')->setOrderCustomerComment(null);
    }

}