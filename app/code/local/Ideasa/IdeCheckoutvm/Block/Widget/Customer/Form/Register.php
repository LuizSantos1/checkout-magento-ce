<?php

##idea.licenca##

class Ideasa_IdeCheckoutvm_Block_Widget_Customer_Form_Register extends Mage_Customer_Block_Widget_Abstract {

	/**
	 *
	 */
	const REQ = 'req';

	/**
	 *
	 */
	const OPT = 'opt';

	/**
	 *
	 */
	const NO = '';

	protected $pessoaBlock;

	/**
	 *
	 * @var type
	 */
	protected $isShowTipoPessoa = false;

	/**
	 *
	 * @var type Varien_Data_Form
	 */
	protected $form = null;

	public function _construct() {
		parent::_construct();

		$this->form = new Varien_Data_Form();
		$this->form->setId('form-validate');

		$this->isShowTipoPessoa = $this->isShowTipoPessoa();
	}

	protected function setFormData($formData) {
		parent::setFormData($formData);

		$layout = Mage::getSingleton('core/layout');

		$this->pessoaBlock = $layout->createBlock('idecheckoutvm/widget_pessoa');
		$this->pessoaBlock->setForm($this->form);
		$this->pessoaBlock->setFieldIdFormat('%s')->setFieldNameFormat('%s');
		$this->pessoaBlock->setObject($this->getFormData());

		return parent::_prepareLayout();
	}

	/**
	 *
	 * @return type boolean
	 */
	protected function isShowTipoPessoa() {
		return (bool) (Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::TIPO_PESSOA));
	}

	public function printTipoPessoa() {
		if (!$this->isShowTipoPessoa) {
			$this->pessoaBlock->printHiddenTipoPessoa();
		} else {
			$this->pessoaBlock->setTipoPessoa($this->getFormData()->getTipoPessoa());
			$this->pessoaBlock->printTipoPessoa();
		}
	}

	public function printRg() {
		if (!$this->isShowRg()) {
			return false;
		}
		$this->pessoaBlock->setRg($this->getFormData()->getRg());
		$this->pessoaBlock->printRg();
	}

	public function printInscEst() {
		if (!$this->isShowInscEst()) {
			return false;
		}
		$this->pessoaBlock->setInscEst($this->getFormData()->getInscEst());
		$this->pessoaBlock->printInscEst();
	}

	public function printRazaoSocial() {
		if (!$this->isShowTipoPessoa) {
			return false;
		}
		if (!$this->isShowRazaoSocial()) {
			return false;
		}
		$this->pessoaBlock->setRazaoSocial($this->getFormData()->getRazaoSocial());
		$this->pessoaBlock->printRazaoSocial();
	}

	public function printNomeFantasia() {
		if (!$this->isShowNomeFantasia()) {
			return false;
		}
		$this->pessoaBlock->setNomeFantasia($this->getFormData()->getNomeFantasia());
		$this->pessoaBlock->printNomeFantasia();
	}

	/**
	 *
	 * @return type boolean
	 */
	protected function isShowRg() {
		return (bool) (Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::RG) != self::NO);
	}

	/**
	 *
	 * @return type boolean
	 */
	protected function isShowInscEst() {
		return (bool) (Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::INSC_EST) != self::NO);
	}

	/**
	 *
	 * @return type boolean
	 */
	protected function isShowRazaoSocial() {
		return (bool) (Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::RAZAO_SOCIAL) != self::NO);
	}

	/**
	 *
	 * @return type boolean
	 */
	protected function isShowNomeFantasia() {
		return (bool) (Mage::getStoreConfig(Ideasa_IdeCheckoutvm_ConfiguracoesSystem::NOME_FANTASIA) != self::NO);
	}
}
