<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_BusinessException extends Ideasa_IdeCheckoutvm_Exception {

    public function __construct($message) {
        parent::__construct($message, null, null);
    }

    /**
     * Lança exceção com o erro encontrado.
     * 
     * @param type $message
     */
    public static function throwException($message) {
        throw new Ideasa_IdeCheckoutvm_BusinessException($message);
    }

}