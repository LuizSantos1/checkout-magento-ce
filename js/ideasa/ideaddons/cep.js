var IdeCepAddon = Class.create({
    
    _beforeCallGetFunc:$H({}),
    
    _afterClearGetFunc:$H({}),
    
    _afterCallGetFunc:$H({}),
    
    initialize: function(prefix, url) {
        this.prefix = prefix;
        this.cep = null;
        this.url = url;
    },
    
    addBeforeCallGetMethod: function(code, func) {
        this._beforeCallGetFunc.set(code, func);
    },
    
    _beforeCallGet: function() {
        (this._beforeCallGetFunc).each(function(get) {
            (get.value)();
        });
    },
    
    addAfterClearGetMethod: function(code, func) {
        this._afterClearGetFunc.set(code, func);
    },
    
    _afterClearGet: function() {
        (this._afterClearGetFunc).each(function(get) {
            (get.value)();
        });
    },
    
    addAfterCallGetMethod: function(code, func) {
        this._afterCallGetFunc.set(code, func);
    },
    
    _afterCallGet: function() {
        (this._afterCallGetFunc).each(function(get) {
            (get.value)();
        });
    },
    
    reset: function() {
        $(this.prefix + ':postcode').setValue('');
        this._clear();
        $(this.prefix + ':postcode').focus();
    },
    
    get: function() {
        this._beforeCallGet();
        this.cep = $(this.prefix + ':postcode').getValue();
        if(!this.cep) {
            this._afterClearGet();
            return;
        }
        this._clear();

        var self = this;

        new Ajax.Request(this.url, {
            method: 'post',
            onSuccess: function(transport) {
                try {
                    if(transport.status == 200) {
                        var address = transport.responseText.evalJSON();
                        self._fill(address);
                    }
                } catch(e) {
                }
            },
            parameters: { cep: self.cep }
        });
    },
    
    validate: function() {
        $(this.prefix + ':postcode').setValue(this._mccep($(this.prefix + ':postcode').getValue()));
    },

    _clear: function() {
        try {
            $(this.prefix + ':street1').setValue('');
            $(this.prefix + ':street2').setValue('');
            if($(this.prefix + ':street3')) {
                $(this.prefix + ':street3').setValue('');
            }
            if($(this.prefix + ':street4')) {
                $(this.prefix + ':street4').setValue('');
            }
            $(this.prefix + ':city').setValue('');
            $(this.prefix + ':region_id').setValue('');
        } catch (e) { 
        }
    },

    _fill: function(address) {
        try {
            $(this.prefix + ':street1').setValue(address.endereco);
            if($(this.prefix + ':street4')) {
                $(this.prefix + ':street4').setValue(address.bairro);
            }
            if($(this.prefix + ':city')) {
                $(this.prefix + ':city').setValue(address.cidade);
            }
            if($(this.prefix + ':region_id')) {
                $(this.prefix + ':region_id').setValue(address.estado);
            }
            if($(this.prefix + ':street2')) {
                $(this.prefix + ':street2').focus();
            }
        } catch (e) {
            $(this.prefix + ':street1').focus();
        }
        this._afterCallGet();
    },
    
    _mccep: function(v) {
        v=v.replace(/\D/g,'');
        v=v.replace(/(\d{5})(\d)/,"$1-$2");
        v=v.replace(/(\d{5})(\d{3})$/,"$1-$2");
        return v;
    }
});

var IdeCepProvider = Class.create({
    initialize: function(url) {
        this.url = url;
    },
    
    get: function(cep) {
        var result = null;
        new Ajax.Request(this.url, {
            method: 'post',
            onSuccess: function(transport) {
                try {
                    if(transport.status == 200) {
                        result = transport.responseText.evalJSON();
                    }
                } catch(e) {
                }
            },
            parameters: { cep: cep }
        });
        
        return result;
    }
});