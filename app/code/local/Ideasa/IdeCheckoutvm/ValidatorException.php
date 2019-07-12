<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_ValidatorException extends Ideasa_IdeCheckoutvm_Exception {

    /**
     * Lista de erros.
     * 
     * @var type array
     */
    protected $errors = array();

    public function __construct($message, $errors) {
        parent::__construct($message, null, null);
        $this->errors = $errors;
    }

    /**
     * Lança exceção com todos os erros encontrados na validação.
     * 
     * @param type $message
     * @param type $errors Lista de erros de validação
     * @return Ideasa_IdeCheckoutvm_ValidatorException 
     */
    public static function throwException($message, $errors) {
        throw new Ideasa_IdeCheckoutvm_ValidatorException($message, $errors);
    }

    public function getErrors() {
        return $this->errors;
    }

    public function setErrors($errors) {
        $this->errors = $errors;
    }

}