<?php

##idea.licenca##

class Ideasa_IdeAddons_Helper_LogUtils {

    public static function varDump($variable) {
        $logFile = Mage::getBaseDir('var') . DS . 'log' . DS . Mage::getStoreConfig('dev/log/file');
        ob_start();
        // write content
        var_dump($variable);
        $content = ob_get_contents();
        ob_end_clean();
        file_put_contents($logFile, $content, FILE_APPEND);
    }

}