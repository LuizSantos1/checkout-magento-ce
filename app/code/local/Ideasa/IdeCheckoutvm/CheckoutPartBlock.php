<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_CheckoutPartBlock {

    public $name;
    public $html;

    public function __construct($name, $html) {
        $this->name = $name;
        $this->html = $html;
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getHtml() {
        return $this->html;
    }

    public function setHtml($html) {
        $this->html = $html;
    }

}