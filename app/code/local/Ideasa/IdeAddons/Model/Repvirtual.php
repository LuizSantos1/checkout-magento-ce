<?php

##idea.licenca##

class Ideasa_IdeAddons_Model_Repvirtual extends Mage_Core_Model_Abstract {

	public function getAddress($cep) {
		$cep = preg_replace('/[\s\W]+/', '', $cep);

		$url = "http://republicavirtual.com.br/web_cep.php?cep=${cep}&formato=json";
		$curl = curl_init($url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 5);
		curl_setopt($curl, CURLOPT_TIMEOUT, 10);
		$result = curl_exec($curl);

		$httpStatus = curl_getinfo($curl, CURLINFO_HTTP_CODE);
		curl_close($curl);

		$address = '';
		if ($httpStatus == 200) {
			$t = json_decode($result);

			$address = Ideasa_IdeAddons_Endereco::getInstance();
			$address->setEndereco($t->tipo_logradouro . ' ' . $t->logradouro);
			$address->setBairro($t->bairro);
			$address->setCep($cep);
			$address->setCidade($t->cidade);

			$region = Mage::getSingleton('directory/region')->loadByCode($t->uf, 'BR');
			$address->setEstado($region->getId());
		}

		return $address;
	}

}