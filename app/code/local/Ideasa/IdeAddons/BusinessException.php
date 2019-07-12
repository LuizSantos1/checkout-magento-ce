<?php

##idea.licenca##

class Ideasa_IdeAddons_BusinessException extends Ideasa_IdeAddons_Exception {

    public function __construct($message) {
        parent::__construct($message, null, null);
    }

    /**
     * Lança exceção com o erro encontrado.
     * 
     * @param type $message
     */
    public static function throwException($message) {
        throw new Ideasa_IdeAddons_BusinessException($message);
    }

}