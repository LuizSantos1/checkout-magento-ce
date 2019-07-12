<?php

##idea.licenca##

class Ideasa_IdeAddons_Model_Repvirtual extends Mage_Core_Model_Abstract {

	const TIME_OUT = 60;

	public function getAddress($cep) {
		$cep = preg_replace('/[\s\W]+/', '', $cep);

		$curl = curl_init();
		curl_setopt_array($curl, array(
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_URL => 'http://republicavirtual.com.br/web_cep.php?cep=' . urlencode($cep) . '&formato=json'
		));
		$result = curl_exec($curl);
		curl_close($curl);

		if (!$result) {
			return null;
		}
		$address = json_decode($result);

		$endereco = Ideasa_IdeAddons_Endereco::getInstance();
		$endereco->setEndereco($address->tipo_logradouro . ' ' . $address->logradouro);
		$endereco->setBairro($address->bairro);
		$endereco->setCep($cep);
		$endereco->setCidade($address->cidade);

		$region = Mage::getSingleton('directory/region')->loadByCode($address->uf, 'BR');
		$endereco->setEstado($region->getId());

		return $endereco;
	}

}