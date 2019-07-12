var IdeCustomer = Class.create();
IdeCustomer.prototype = {
    initialize: function() {
        var url = document.location.href;
        if(url.indexOf('/customer/address/new/') != -1) {
            this.translatorUrl = url.replace('/customer/address/new/', '/idecheckoutvm/translator/index');
        } else if(url.indexOf('/customer/address/edit/') != -1) {
            var start = url.indexOf('/customer/address/edit/');
            url = url.substr(0, start);
            this.translatorUrl = url.concat('/idecheckoutvm/translator/index');
        }

        this.titleStreet2 = null;
        this.titleStreet3 = null;
        this.titleStreet4 = null;
        
        this.idStreet2 = 'street_2';
        this.idStreet3 = 'street_3';
        this.idStreet4 = 'street_4';
    },
    
    getTranslator: function() {
        var request = new Ajax.Request(this.translatorUrl, {
                                       asynchronous: false,
                                       method: 'post',
                                       onSuccess: this._parseTranslator.bindAsEventListener(this)
        });
    },
    
    _parseTranslator: function(transport) {
        if (transport && transport.responseText){
            try{
                var response = eval('(' + transport.responseText + ')');
                this.titleStreet2 = response.street_address_2;
                this.titleStreet3 = response.street_address_3;
                this.titleStreet4 = response.street_address_4;
            }
            catch (e) {
            }
        }
        
    },
    
    insertAddressLabel: function() {
        if($(this.idStreet2)) {
            $(this.idStreet2).parentNode.insert({before: new Element('label').addClassName('required').update('<em>*</em>' + this.titleStreet2)});
        }
        if($(this.idStreet3)) {
            $(this.idStreet3).parentNode.insert({before: new Element('label').addClassName('required').update(this.titleStreet3)});
        }
        if($(this.idStreet4)) {
            $(this.idStreet4).parentNode.insert({before: new Element('label').addClassName('required').update('<em>*</em>' + this.titleStreet4)});
        }
    },
    
    insertAddressValidation: function() {
        if($(this.idStreet2)) {
            $(this.idStreet2).addClassName('required-entry');
        }
        if($(this.idStreet4)) {
            $(this.idStreet4).addClassName('required-entry');
        }
    }
}

Event.observe(window, 'load', function() {
    var ideCustomerInst = new IdeCustomer();
    ideCustomerInst.getTranslator();
    ideCustomerInst.insertAddressLabel();
    ideCustomerInst.insertAddressValidation();
})