var IdeCustomer = Class.create();
IdeCustomer.prototype = {
    initialize: function() {
        this.tipoPessoa = null;
    },
    
    insertValidations: function() {

    },

    setTipoPessoa: function (tipoPessoa) {
        this.tipoPessoa = (tipoPessoa === 'undefined'? tipoPessoa : 'F');
    }
}

var IdeCustomerPessoa = Class.create();
IdeCustomerPessoa.prototype = {
    initialize: function(form, text) {
        this.form = form;
        this.rg = 'rg';
        this.dob = 'dob';
        this.day = 'day';
        this.month = 'month';
        this.year = 'year';
        this.gender = 'gender';
        this.taxVat = 'taxvat';

        this.inscEst = 'insc_est';
        this.razaoSocial = 'razao_social';
        this.nomeFantasia = 'nome_fantasia';

        this.cpfMask = 'idecheckoutvm-cpf';
        this.cnpjMask = 'idecheckoutvm-cnpj';

        this.cpf = text.cpf;
        this.cnpj = text.cnpj;
        this.validator  = new Validation(this.form);
        this._bind();
    },

    _bind: function() {

    },

    showPf: function() {
        if($(this.inscEst)) {
            $(this.inscEst).setValue('');
            $($(this.inscEst).parentNode.parentNode).hide();
        }
        if($(this.razaoSocial)) {
            $(this.razaoSocial).setValue('');
            $($(this.razaoSocial).parentNode.parentNode).hide();
        }
        if($(this.nomeFantasia)) {
            $(this.nomeFantasia).setValue('');
            $($(this.nomeFantasia).parentNode.parentNode).hide();
        }
        // PF
        if($(this.day)) {
            $($(this.day).parentNode.parentNode.parentNode).show();
        }
        if($(this.rg)) {
            $($(this.rg).parentNode.parentNode).show();
        }
        if($(this.gender)) {
            $($(this.gender).parentNode.parentNode).show();
        }
        if($(this.taxVat)) {
            $(this.taxVat).removeClassName(this.cnpjMask);
            $(this.taxVat).addClassName(this.cpfMask);
            try {
                $(this.taxVat).observe('keyup', function () {
                    ideMaskInst.inject(this, ideMaskInst.cpf);
                }).triggerEvent('keyup');
            } catch (e) {
            }
        }
        this._updateText(this.cpf);
    },

    showPj: function() {
        if($(this.day)) {
            $(this.day).setValue('');
            $(this.month).setValue('');
            $(this.year).setValue('');
            $(this.dob).setValue('');
            $($(this.day).parentNode.parentNode.parentNode).hide();
        }
        if($(this.rg)) {
            $(this.rg).setValue('');
            $($(this.rg).parentNode.parentNode).hide();
        }
        if($(this.gender)) {
            $(this.gender).setValue('');
            $($(this.gender).parentNode.parentNode).hide();
        }
        // PJ
        if($(this.inscEst)) {
            $($(this.inscEst).parentNode.parentNode).show();
        }
        if($(this.razaoSocial)) {
            $($(this.razaoSocial).parentNode.parentNode).show();
        }
        if($(this.nomeFantasia)) {
            $($(this.nomeFantasia).parentNode.parentNode).show();
        }
        if($(this.taxVat)) {
            $(this.taxVat).removeClassName(this.cpfMask);
            $(this.taxVat).addClassName(this.cnpjMask);
            try {
                $(this.taxVat).observe('keyup', function () {
                    ideMaskInst.inject(this, ideMaskInst.cnpj);
                }).triggerEvent('keyup');
            } catch (e) {
            }
        }
        this._updateText(this.cnpj);
    },

    _updateText: function(text) {
        var label = $$('.fields.taxvat label');
        if(!label.first()) {
            return true;
        }
        var newChield = '';
        label = label.first();

        try {
            if(label.childElements()) {
                var em = label.childElements();
                if(em != 'undefined') {
                    var tagName = em.first().tagName;
                    var tagText = em.first().innerHTML;
                    newChield = new Element(tagName).update(tagText);
                }
            }
        } catch(e) {
        }
        label.update(newChield);
        label.insert(text);
    }
};