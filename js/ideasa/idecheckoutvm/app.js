// http://numeraljs.com/
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof module&&module.exports?module.exports=b():a.numeral=b()}(this,function(){function a(a,b){this._input=a,this._value=b}var b,c,d="2.0.4",e={},f={},g={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0"},h={currentLocale:g.currentLocale,zeroFormat:g.zeroFormat,nullFormat:g.nullFormat,defaultFormat:g.defaultFormat};return b=function(d){var f,g,i,j;if(b.isNumeral(d))f=d.value();else if(0===d||"undefined"==typeof d)f=0;else if(null===d||c.isNaN(d))f=null;else if("string"==typeof d)if(h.zeroFormat&&d===h.zeroFormat)f=0;else if(h.nullFormat&&d===h.nullFormat||!d.replace(/[^0-9]+/g,"").length)f=null;else{for(g in e)if(j="function"==typeof e[g].regexps.unformat?e[g].regexps.unformat():e[g].regexps.unformat,j&&d.match(j)){i=e[g].unformat;break}i=i||b._.stringToNumber,f=i(d)}else f=Number(d)||null;return new a(d,f)},b.version=d,b.isNumeral=function(b){return b instanceof a},b._=c={numberToFormat:function(a,c,d){var e,g,h,i,j,k,l,m=f[b.options.currentLocale],n=!1,o=!1,p="",q=1e12,r=1e9,s=1e6,t=1e3,u="",v=!1;if(a=a||0,g=Math.abs(a),b._.includes(c,"(")?(n=!0,c=c.replace(/[\(|\)]/g,"")):(b._.includes(c,"+")||b._.includes(c,"-"))&&(j=b._.includes(c,"+")?c.indexOf("+"):0>a?c.indexOf("-"):-1,c=c.replace(/[\+|\-]/g,"")),b._.includes(c,"a")&&(e=c.match(/a(k|m|b|t)?/),e=e?e[1]:!1,b._.includes(c," a")&&(p=" "),c=c.replace(new RegExp(p+"a[kmbt]?"),""),g>=q&&!e||"t"===e?(p+=m.abbreviations.trillion,a/=q):q>g&&g>=r&&!e||"b"===e?(p+=m.abbreviations.billion,a/=r):r>g&&g>=s&&!e||"m"===e?(p+=m.abbreviations.million,a/=s):(s>g&&g>=t&&!e||"k"===e)&&(p+=m.abbreviations.thousand,a/=t)),b._.includes(c,"[.]")&&(o=!0,c=c.replace("[.]",".")),h=a.toString().split(".")[0],i=c.split(".")[1],k=c.indexOf(","),i?(b._.includes(i,"[")?(i=i.replace("]",""),i=i.split("["),u=b._.toFixed(a,i[0].length+i[1].length,d,i[1].length)):u=b._.toFixed(a,i.length,d),h=u.split(".")[0],u=b._.includes(u,".")?m.delimiters.decimal+u.split(".")[1]:"",o&&0===Number(u.slice(1))&&(u="")):h=b._.toFixed(a,null,d),p&&!e&&Number(h)>=1e3&&p!==m.abbreviations.trillion)switch(h=String(Number(h)/1e3),p){case m.abbreviations.thousand:p=m.abbreviations.million;break;case m.abbreviations.million:p=m.abbreviations.billion;break;case m.abbreviations.billion:p=m.abbreviations.trillion}return b._.includes(h,"-")&&(h=h.slice(1),v=!0),k>-1&&(h=h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===c.indexOf(".")&&(h=""),l=h+u+(p?p:""),n?l=(n&&v?"(":"")+l+(n&&v?")":""):j>=0?l=0===j?(v?"-":"+")+l:l+(v?"-":"+"):v&&(l="-"+l),l},stringToNumber:function(a){var b,c,d,e=f[h.currentLocale],g=a,i={thousand:3,million:6,billion:9,trillion:12};if(h.zeroFormat&&a===h.zeroFormat)c=0;else if(h.nullFormat&&a===h.nullFormat||!a.replace(/[^0-9]+/g,"").length)c=null;else{c=1,"."!==e.delimiters.decimal&&(a=a.replace(/\./g,"").replace(e.delimiters.decimal,"."));for(b in i)if(d=new RegExp("[^a-zA-Z]"+e.abbreviations[b]+"(?:\\)|(\\"+e.currency.symbol+")?(?:\\))?)?$"),g.match(d)){c*=Math.pow(10,i[b]);break}c*=(a.split("-").length+Math.min(a.split("(").length-1,a.split(")").length-1))%2?1:-1,a=a.replace(/[^0-9\.]+/g,""),c*=Number(a)}return c},isNaN:function(a){return"number"==typeof a&&isNaN(a)},includes:function(a,b){return-1!==a.indexOf(b)},insert:function(a,b,c){return a.slice(0,c)+b+a.slice(c)},reduce:function(a,b){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof b)throw new TypeError(b+" is not a function");var c,d=Object(a),e=d.length>>>0,f=0;if(3===arguments.length)c=arguments[2];else{for(;e>f&&!(f in d);)f++;if(f>=e)throw new TypeError("Reduce of empty array with no initial value");c=d[f++]}for(;e>f;f++)f in d&&(c=b(c,d[f],f,d));return c},multiplier:function(a){var b=a.toString().split(".");return b.length<2?1:Math.pow(10,b[1].length)},correctionFactor:function(){var a=Array.prototype.slice.call(arguments);return a.reduce(function(a,b){var d=c.multiplier(b);return a>d?a:d},1)},toFixed:function(a,b,c,d){var e,f,g,h,i=a.toString().split("."),j=b-(d||0);return e=2===i.length?Math.min(Math.max(i[1].length,j),b):j,g=Math.pow(10,e),h=(c(a*g)/g).toFixed(e),d>b-e&&(f=new RegExp("\\.?0{1,"+(d-(b-e))+"}$"),h=h.replace(f,"")),h}},b.options=h,b.formats=e,b.locales=f,b.locale=function(a){return a&&(h.currentLocale=a.toLowerCase()),h.currentLocale},b.localeData=function(a){if(!a)return f[h.currentLocale];if(a=a.toLowerCase(),!f[a])throw new Error("Unknown locale : "+a);return f[a]},b.reset=function(){for(var a in g)h[a]=g[a]},b.zeroFormat=function(a){h.zeroFormat="string"==typeof a?a:null},b.nullFormat=function(a){h.nullFormat="string"==typeof a?a:null},b.defaultFormat=function(a){h.defaultFormat="string"==typeof a?a:"0.0"},b.register=function(a,b,c){if(b=b.toLowerCase(),this[a+"s"][b])throw new TypeError(b+" "+a+" already registered.");return this[a+"s"][b]=c,c},b.validate=function(a,c){var d,e,f,g,h,i,j,k;if("string"!=typeof a&&(a+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",a)),a=a.trim(),a.match(/^\d+$/))return!0;if(""===a)return!1;try{j=b.localeData(c)}catch(l){j=b.localeData(b.locale())}return f=j.currency.symbol,h=j.abbreviations,d=j.delimiters.decimal,e="."===j.delimiters.thousands?"\\.":j.delimiters.thousands,k=a.match(/^[^\d]+/),null!==k&&(a=a.substr(1),k[0]!==f)?!1:(k=a.match(/[^\d]+$/),null!==k&&(a=a.slice(0,-1),k[0]!==h.thousand&&k[0]!==h.million&&k[0]!==h.billion&&k[0]!==h.trillion)?!1:(i=new RegExp(e+"{2}"),a.match(/[^\d.,]/g)?!1:(g=a.split(d),g.length>2?!1:g.length<2?!!g[0].match(/^\d+.*\d$/)&&!g[0].match(i):1===g[0].length?!!g[0].match(/^\d+$/)&&!g[0].match(i)&&!!g[1].match(/^\d+$/):!!g[0].match(/^\d+.*\d$/)&&!g[0].match(i)&&!!g[1].match(/^\d+$/))))},b.fn=a.prototype={clone:function(){return b(this)},format:function(a,c){var d,f,g,i=this._value,j=a||h.defaultFormat;if(c=c||Math.round,0===i&&null!==h.zeroFormat)f=h.zeroFormat;else if(null===i&&null!==h.nullFormat)f=h.nullFormat;else{for(d in e)if(j.match(e[d].regexps.format)){g=e[d].format;break}g=g||b._.numberToFormat,f=g(i,j,c)}return f},value:function(){return this._value},input:function(){return this._input},set:function(a){return this._value=Number(a),this},add:function(a){function b(a,b,c,e){return a+Math.round(d*b)}var d=c.correctionFactor.call(null,this._value,a);return this._value=c.reduce([this._value,a],b,0)/d,this},subtract:function(a){function b(a,b,c,e){return a-Math.round(d*b)}var d=c.correctionFactor.call(null,this._value,a);return this._value=c.reduce([a],b,Math.round(this._value*d))/d,this},multiply:function(a){function b(a,b,d,e){var f=c.correctionFactor(a,b);return Math.round(a*f)*Math.round(b*f)/Math.round(f*f)}return this._value=c.reduce([this._value,a],b,1),this},divide:function(a){function b(a,b,d,e){var f=c.correctionFactor(a,b);return Math.round(a*f)/Math.round(b*f)}return this._value=c.reduce([this._value,a],b),this},difference:function(a){return Math.abs(b(this._value).subtract(a).value())}},b.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(a){var b=a%10;return 1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th"},currency:{symbol:"$"}}),function(){var a={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},c={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]};b.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp("("+a.suffixes.concat(c.suffixes).join("|")+")")},format:function(d,e,f){var g,h,i,j,k=b._.includes(e,"ib")?c:a,l=b._.includes(e," b")||b._.includes(e," ib")?" ":"";for(e=e.replace(/\s?i?b/,""),h=0;h<=k.suffixes.length;h++)if(i=Math.pow(k.base,h),j=Math.pow(k.base,h+1),null===d||0===d||d>=i&&j>d){l+=k.suffixes[h],i>0&&(d/=i);break}return g=b._.numberToFormat(d,e,f),g+l},unformat:function(d){var e,f,g=b._.stringToNumber(d);if(g){for(e=a.suffixes.length-1;e>=0;e--){if(b._.includes(d,a.suffixes[e])){f=Math.pow(a.base,e);break}if(b._.includes(d,c.suffixes[e])){f=Math.pow(c.base,e);break}}g*=f||1}return g}})}(),function(){b.register("format","currency",{regexps:{format:/(\$)/},format:function(a,c,d){var e,f,g,h=b.locales[b.options.currentLocale],i={before:c.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:c.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(c=c.replace(/\s?\$\s?/,""),e=b._.numberToFormat(a,c,d),a>=0?(i.before=i.before.replace(/[\-\(]/,""),i.after=i.after.replace(/[\-\)]/,"")):0>a&&!b._.includes(i.before,"-")&&!b._.includes(i.before,"(")&&(i.before="-"+i.before),g=0;g<i.before.length;g++)switch(f=i.before[g]){case"$":e=b._.insert(e,h.currency.symbol,g);break;case" ":e=b._.insert(e," ",g)}for(g=i.after.length-1;g>=0;g--)switch(f=i.after[g]){case"$":e=g===i.after.length-1?e+h.currency.symbol:b._.insert(e,h.currency.symbol,-(i.after.length-(1+g)));break;case" ":e=g===i.after.length-1?e+" ":b._.insert(e," ",-(i.after.length-(1+g)))}return e}})}(),function(){b.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(a,c,d){var e,f="number"!=typeof a||b._.isNaN(a)?"0e+0":a.toExponential(),g=f.split("e");return c=c.replace(/e[\+|\-]{1}0/,""),e=b._.numberToFormat(Number(g[0]),c,d),e+"e"+g[1]},unformat:function(a){function c(a,c,d,e){var f=b._.correctionFactor(a,c),g=a*f*(c*f)/(f*f);return g}var d=b._.includes(a,"e+")?a.split("e+"):a.split("e-"),e=Number(d[0]),f=Number(d[1]);return f=b._.includes(a,"e-")?f*=-1:f,b._.reduce([e,Math.pow(10,f)],c,1)}})}(),function(){b.register("format","ordinal",{regexps:{format:/(o)/},format:function(a,c,d){var e,f=b.locales[b.options.currentLocale],g=b._.includes(c," o")?" ":"";return c=c.replace(/\s?o/,""),g+=f.ordinal(a),e=b._.numberToFormat(a,c,d),e+g}})}(),function(){b.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(a,c,d){var e,f=b._.includes(c," %")?" ":"";return a=100*a,c=c.replace(/\s?\%/,""),e=b._.numberToFormat(a,c,d),b._.includes(e,")")?(e=e.split(""),e.splice(-1,0,f+"%"),e=e.join("")):e=e+f+"%",e},unformat:function(a){return.01*b._.stringToNumber(a)}})}(),function(){b.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(a,b,c){var d=Math.floor(a/60/60),e=Math.floor((a-60*d*60)/60),f=Math.round(a-60*d*60-60*e);return d+":"+(10>e?"0"+e:e)+":"+(10>f?"0"+f:f)},unformat:function(a){var b=a.split(":"),c=0;return 3===b.length?(c+=60*Number(b[0])*60,c+=60*Number(b[1]),c+=Number(b[2])):2===b.length&&(c+=60*Number(b[0]),c+=Number(b[1])),Number(c)}})}(),b});

Element.prototype.triggerEvent = function (eventName) {
  if (document.createEvent) {
    var evt = document.createEvent('HTMLEvents');
    evt.initEvent(eventName, true, true);

    return this.dispatchEvent(evt);
  }

  if (this.fireEvent) {
    return this.fireEvent('on' + eventName);
  }
};

Object.extend(Prototype.Browser, {
  ie6: (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) ? (Number(RegExp.$1) == 6 ? true : false) : false,
  ie7: (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) ? (Number(RegExp.$1) == 7 ? true : false) : false,
  ie8: (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) ? (Number(RegExp.$1) == 8 ? true : false) : false,
  ie9: (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) ? (Number(RegExp.$1) == 9 ? true : false) : false,
  ie10: (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) ? (Number(RegExp.$1) == 10 ? true : false) : false
});

var IdeCheckoutvm = Class.create();
IdeCheckoutvm.prototype = {
  _beforeRedirectClientFunc: $H({}),
  initialize: function (form, conf) {
    this.form = form;

    this.saveUrl = conf.saveUrl;
    this.billingUrl = conf.billingUrl;
    this.successUrl = conf.successUrl;
    this.failureUrl = conf.failureUrl;
    this.ajaxLoaderUrl = conf.ajaxLoaderUrl;

    this.submitOrderText = conf.submitOrderText;
    this.conditionTermsText = conf.conditionTermsText;

    this.billingForm = false;
    this.shippingForm = false;
    this.syncBillingShipping = false;
    this.method = '';
    this.payment = '';

    this.buttonCheckoutvm = new IdeButtonCheckoutvm({
      ajaxLoaderUrl: this.ajaxLoaderUrl,
      submitOrderText: this.submitOrderText
    });

    // FIXME: informar nome do form ou valor
    this.agreementsForm = false;
    this.onSave = this.nextStep.bindAsEventListener(this);

    this._addEvents();
  },
  addBeforeRedirectClient: function (code, func) {
    this._beforeRedirectClientFunc.set(code, func);
  },
  _beforeRedirectClient: function () {
    (this._beforeRedirectClientFunc).each(function (get) {
      (get.value)();
    });
  },
  resetBeforeRedirectClient: function () {
    this._beforeRedirectClientFunc = $H({});
  },
  getBillingUrl: function () {
    return this.billingUrl;
  },
  _addEvents: function () {
  },
  ajaxFailure: function () {
    this.buttonCheckoutvm.enable();
  },
  setLoadWaiting: function (step) {
    if (step) {
      var elem = $('checkout-' + step + '-load');
      if (elem) {
        elem.update('<div class="please-wait"></div>');
      }
    }
  },
  setStepResponse: function (response) {
    if (response.updateSection) {
      this.updateBlock(response.updateSection.shippingMethod);
      this.updateBlock(response.updateSection.paymentMethod);
      this.updateBlock(response.updateSection.review);
    }
    if (response.allow_sections) {
      response.allow_sections.each(function (e) {
        $('opc-' + e).addClassName('allow');
      });
    }
    if (response.duplicateBillingInfo) {
      shipping.setSameAsBilling(true, false);
    }

    if (response.redirectUrl) {
      location.href = response.redirectUrl;
    }
    return false;
  },
  updateBlock: function (block) {
    if (block != null) {
      if ($('checkout-' + block.name + '-load')) {
        $('checkout-' + block.name + '-load').update(block.html);
      }
    }
  },
  save: function () {
    var validator = new Validation(this.form);
    if (!validator.validate()) {
      return false;
    }
    try {
      if (shippingMethod) {
        if (!shippingMethod.validate()) {
          return false;
        }
        ;
      }
    } catch (e) {
    }

    if (!payment.validate()) {
      return false;
    }
    validator.reset();

    this.buttonCheckoutvm.disable();

    var params = Form.serialize(this.form);
    var request = new Ajax.Request(
            payment.updatePaymentUrl, {
              asynchronous: true,
              method: 'post',
              parameters: params,
              onSuccess: this.process.bindAsEventListener(this)
            });
  },
  process: function () {
    var params = Form.serialize(this.form);
    if (this.agreementsForm) {
      params += '&' + Form.serialize(this.agreementsForm);
    }
    params.save = true;
    var request = new Ajax.Request(
            this.saveUrl, {
              method: 'post',
              parameters: params,
              onComplete: this.onComplete,
              onSuccess: this.onSave,
              onFailure: checkout.ajaxFailure.bind(checkout)
            }
    );
  },
  nextStep: function (transport) {
    var response = null;
    if (transport && transport.responseText) {
      try {
        response = eval('(' + transport.responseText + ')');
      } catch (e) {
        response = {};
      }
    }
    if (response.redirectUrl) {
      // executa
      this._beforeRedirectClient();

      this.isSuccess = true;
      if (response.redirectUrl != 'payment_same_screen') {
        location.href = response.redirectUrl;
        return;
      }
    }
    if (response.error) {
      this.buttonCheckoutvm.enable();

      if (response.errorMessage.message) {
        this._showErrorMessage(response.errorMessage.message);
      } else {
        this._clearMessage();
      }
      if (response.errorMessage.errorFields) {
        var ideCheckoutValidationInst = new IdeCheckoutvmValidation(this.form);
        ideCheckoutValidationInst.fillFormErrors(response.errorMessage.errorFields);
      }
    }
  },
  _showErrorMessage: function (message) {
    var m = '<div id="messages"><ul class="messages"><li class="error-msg"><ul><li><span>' + message + '</span></li></ul></li></ul></div>';
    $('idecheckoutvm-checkout-message').update(m);
  },
  _showNoteMessage: function (message) {
    var m = '<div id="messages"><ul class="messages"><li class="note-msg"><ul><li><span>' + message + '</span></li></ul></li></ul></div>';
    $('idecheckoutvm-checkout-message').update(m);
  },
  _clearMessage: function () {
    $('idecheckoutvm-checkout-message').update('');
  },
  isSuccess: false
};

var IdeButtonCheckoutvm = Class.create();
IdeButtonCheckoutvm.prototype = {
  initialize: function (conf) {
    this.ajaxLoaderUrl = conf.ajaxLoaderUrl;
    this.submitOrderText = conf.submitOrderText;
    this.buttonId = 'idecheckoutvm-place-order-button';
    this.loadingId = 'idecheckoutvm-loading-button';

    this._addEvents();
  },
  _addEvents: function () {
  },
  disable: function () {
    var btn = $(this.buttonId);
    var loading = $(this.loadingId);
    if (!loading) {
      var image = '<img src="' + this.ajaxLoaderUrl + '" />&nbsp;&nbsp;' + this.submitOrderText;
      loading = new Element('div').writeAttribute('id', this.loadingId).addClassName('loading').update(image);
      btn.parentNode.appendChild(loading);
    } else {
      loading.show();
    }
    btn.removeClassName('enable').addClassName('disable');
    btn.disabled = true;
  },
  enable: function () {
    var btn = $(this.buttonId);
    var loading = $(this.loadingId);
    if (loading) {
      loading.hide();
    }
    btn.removeClassName('disable').addClassName('enable');
    btn.disabled = false;
  }
}

/**
 * 
 */
var IdeBilling = Class.create();
IdeBilling.prototype = {
  initialize: function (urls) {
    this.telephone = 'billing:telephone';
    this.mobile = 'billing:mobile';

    this.region = 'billing:region';
    this.regionId = 'billing:region_id';
    this.customerPassword = 'billing:customer_password';
    this.addressSelect = 'billing-address-select';
    this.registerCustomer = 'register-customer';
    this.sameAsBilling = 'shipping:same_as_billing';
    this.useForShipping = 'billing:use_for_shipping';

    this.addressUrl = urls.addressUrl;
    this.checkEmailUrl = urls.checkEmailUrl;
    this.onAddressLoad = this.fillForm.bindAsEventListener(this);
    this.onAfterUpdate = this.nextStep.bindAsEventListener(this);

    this._addEvents();
  },
  _addEvents: function () {
    if ($(this.regionId)) {
      $(this.regionId).observe('change', function (event) {
        if ($(shipping.sameAsBilling) && $(shipping.sameAsBilling).checked) {
          shipping.syncWithBilling();
        }
        this.update();
      }.bind(this));
    }
  },
  setAddress: function (addressId) {
    if (addressId) {
      request = new Ajax.Request(
              this.addressUrl + addressId, {
                method: 'get',
                onSuccess: this.onAddressLoad,
                onFailure: checkout.ajaxFailure.bind(checkout)
              }
      );
    } else {
      this.fillForm(false);
    }
  },
  newAddress: function (isNew) {
    if (isNew) {
      this.resetSelectedAddress();
      Element.show('billing-new-address-form');
    } else {
      Element.hide('billing-new-address-form');
    }
  },
  resetSelectedAddress: function () {
    var selectElement = $(this.addressSelect)
    if (selectElement) {
      selectElement.value = '';
    }
  },
  fillForm: function (transport) {
    var elementValues = {};
    if (transport && transport.responseText) {
      try {
        elementValues = eval('(' + transport.responseText + ')');
      } catch (e) {
        elementValues = {};
      }
    } else {
      this.resetSelectedAddress();
    }
    arrElements = Form.getElements(checkout.form);
    for (var elemIndex in arrElements) {
      if (arrElements[elemIndex].id) {
        var fieldName = arrElements[elemIndex].id.replace(/^billing:/, '');
        arrElements[elemIndex].value = elementValues[fieldName] ? elementValues[fieldName] : '';
        if (fieldName == 'country_id' && billingForm) {
          billingForm.elementChildLoad(arrElements[elemIndex]);
        }
      }
    }
  },
  saveInAddressBook: function (flag) {
    this.update();
  },
  update: function () {
    //if (checkout.loadWaiting!=false) return;
    try {
      if (ideDobInst && ideDobInst.isNeedToBind()) {
        ideDobInst.bind();
      }
    } catch (e) {
    }
    var params = Form.serialize(checkout.form);
    checkout.setLoadWaiting('shipping-method');
    checkout.setLoadWaiting('payment-method');
    checkout.setLoadWaiting('review');
    var request = new Ajax.Request(
            checkout.getBillingUrl(), {
      method: 'post',
      onComplete: this.onComplete,
      onSuccess: this.onAfterUpdate,
      onFailure: checkout.ajaxFailure.bind(checkout),
      parameters: params
    });
  },
  nextStep: function (transport) {
    var response = null;
    if (transport && transport.responseText) {
      try {
        response = eval('(' + transport.responseText + ')');
      } catch (e) {
        response = {};
      }
    }

    if (response.error) {
      if ((typeof response.message) == 'string') {
        alert(response.message);
      } else {
        if (window.billingRegionUpdater) {
          billingRegionUpdater.update();
        }
        alert(response.message.join("\n"));
      }

      return false;
    }
    checkout.setStepResponse(response);
  },
  setRegister: function (flag) {
    if (flag) {
      $(this.registerCustomer).show();
      $(this.customerPassword).focus();
      //this.checkEmail();
    } else {
      $(this.registerCustomer).hide();
    }
  },
  checkEmail: function () {
    var emailElem = $('billing:email');
    Validation.reset(emailElem);

    if (Validation.validate(emailElem, {
      useTitle: true
    })) {
      var params = {
        email: emailElem.getValue()
      };
      var request = new Ajax.Request(
              this.checkEmailUrl, {
                method: 'post',
                onSuccess: this._checkEmailResponse,
                parameters: params
              });
    }
  },
  _checkEmailResponse: function (transport) {
    var response = null;
    if (transport && transport.responseText) {
      try {
        response = eval('(' + transport.responseText + ')');
      } catch (e) {
        response = {};
      }
    }
    if (response.error) {
      if (response.message) {
        if (response.message == 'invalid') {
          Validation.validate(emailElem, {
            useTitle: true
          });
        } else if (response.message == 'exists') {
          ideCheckoutLoginInst.forceLogin(response.errorMessage.message);
        }
      }
    }
  }
};

// shipping
var IdeShipping = Class.create();
IdeShipping.prototype = {
  initialize: function () {
    this.region = 'shipping:region';
    this.regionId = 'shipping:region_id';
    this.sameAsBilling = 'shipping:same_as_billing';
    this.addressSelect = 'shipping-address-select';
    this.useForShipping = 'billing:use_for_shipping';

    this.onAddressLoad = this.fillForm.bindAsEventListener(this);

    this._addEvents();
  },
  _addEvents: function () {
  },
  setAddress: function (addressId) {
    if (addressId) {
      request = new Ajax.Request(
              this.addressUrl + addressId, {
                method: 'get',
                onSuccess: this.onAddressLoad,
                onFailure: checkout.ajaxFailure.bind(checkout)
              });
    } else {
      this.fillForm(false);
    }
  },
  newAddress: function (isNew) {
    if (isNew) {
      this.resetSelectedAddress();
      Element.show('shipping-new-address-form');
    } else {
      Element.hide('shipping-new-address-form');
    }
  },
  resetSelectedAddress: function () {
    var selectElement = $(this.addressSelect)
    if (selectElement) {
      selectElement.value = '';
    }
  },
  fillForm: function (transport) {
    var elementValues = {};
    if (transport && transport.responseText) {
      try {
        elementValues = eval('(' + transport.responseText + ')');
      } catch (e) {
        elementValues = {};
      }
    } else {
      this.resetSelectedAddress();
    }
    var arrElements = Form.getElements(checkout.form);
    for (var elemIndex in arrElements) {
      if (arrElements[elemIndex].id) {
        var fieldName = arrElements[elemIndex].id.replace(/^shipping:/, '');
        arrElements[elemIndex].value = elementValues[fieldName] ? elementValues[fieldName] : '';
        if (fieldName == 'country_id' && checkout.form) {
          checkout.form.elementChildLoad(arrElements[elemIndex]);
        }
      }
    }
  },
  saveInAddressBook: function (flag) {
    billing.update();
  },
  setSameAsBilling: function (flag) {
    $(this.sameAsBilling).checked = flag;
    $(this.useForShipping).setValue(flag == true ? "1" : "0");

    if (flag) {
      this.syncWithBilling();
      Element.hide('checkout-step-shipping');
    } else {
      Element.show('checkout-step-shipping');
    }
    if (arguments.length == 1) {
      billing.update();
    }
    ;
  },
  syncWithBilling: function () {
    $(this.addressSelect) && this.newAddress(!$(billing.addressSelect).value);
    if (!$(billing.addressSelect) || !$(billing.addressSelect).value) {
      var arrElements = Form.getElements(checkout.form);
      for (var elemIndex in arrElements) {
        if (arrElements[elemIndex].id) {
          var sourceField = $(arrElements[elemIndex].id.replace(/^shipping:/, 'billing:'));
          if (sourceField) {
            arrElements[elemIndex].value = sourceField.value;
          }
        }
      }
      shippingRegionUpdater.update();
      $(this.regionId).value = $(billing.regionId).value;
      $(this.region).value = $(billing.region).value;
    } else {
      $(this.addressSelect).value = $(billing.addressSelect).value;
    }
  },
  setRegionValue: function () {
    $(this.region).value = $(billing.region).value;
  }
}

var IdeShippingMethod = Class.create();
IdeShippingMethod.prototype = {
  beforeValidateFunc: $H({}),
  afterValidateFunc: $H({}),
  isSelectedUniqueShippingMethod: false,
  initialize: function (form, urls) {
    this.form = form;
    this.updateShippingMethodUrl = urls.updateShippingMethodUrl;

    this.validator = new Validation(this.form);
    this.onAfterUpdate = billing.nextStep.bindAsEventListener(this);
    this.onFailure = checkout.ajaxFailure.bind(checkout);

    this._addEvents();
  },
  _addEvents: function () {
  },
  addBeforeValidateFunction: function (code, func) {
    this.beforeValidateFunc.set(code, func);
  },
  beforeValidate: function () {
    var validateResult = true;
    var hasValidation = false;
    (this.beforeValidateFunc).each(function (validate) {
      hasValidation = true;
      if ((validate.value)() == false) {
        validateResult = false;
      }
    }.bind(this));
    if (!hasValidation) {
      validateResult = false;
    }
    return validateResult;
  },
  validate: function () {
    var result = this.beforeValidate();
    if (result) {
      return true;
    }

    var methods = document.getElementsByName('shipping_method');
    if (methods.length == 0) {
      alert(Translator.translate('Your order cannot be completed at this time as there is no shipping methods available for it. Please make necessary changes in your shipping address.').stripTags());
      return false;
    }

    if (!this.validator.validate()) {
      return false;
    }
    for (var i = 0; i < methods.length; i++) {
      if (methods[i].checked) {
        return true;
      }
    }
    result = this.afterValidate();
    if (result) {
      return true;
    }

    alert(Translator.translate('Please specify shipping method.').stripTags());
    return false;
  },
  addAfterValidateFunction: function (code, func) {
    this.afterValidateFunc.set(code, func);
  },
  afterValidate: function () {
    var validateResult = true;
    var hasValidation = false;
    (this.afterValidateFunc).each(function (validate) {
      hasValidation = true;
      if ((validate.value)() == false) {
        validateResult = false;
      }
    }.bind(this));
    if (!hasValidation) {
      validateResult = false;
    }
    return validateResult;
  },
  update: function () {
    var params = Form.serialize(this.form);

    checkout.setLoadWaiting('payment-method');
    checkout.setLoadWaiting('review');
    var request = new Ajax.Request(
            this.updateShippingMethodUrl, {
              method: 'post',
              onSuccess: this.onAfterUpdate,
              onFailure: this.onFailure,
              parameters: params
            });
  }
};

var IdePayment = Class.create();
IdePayment.prototype = {
  beforeInitFunc: $H({}),
  afterInitFunc: $H({}),
  beforeValidateFunc: $H({}),
  afterValidateFunc: $H({}),
  initialize: function (form, urls) {
    this.form = form;
    this.updatePaymentUrl = urls.updatePaymentUrl;
    this.updatePaymentAjaxUrl = urls.updatePaymentAjaxUrl;
    this.updatePaymentMethodUrl = urls.updatePaymentMethodUrl;

    this.onAfterUpdate = billing.nextStep.bindAsEventListener(this);
    this.onFailure = checkout.ajaxFailure.bind(checkout);

    this._addEvents();
  },
  _addEvents: function () {
  },
  addBeforeInitFunction: function (code, func) {
    this.beforeInitFunc.set(code, func);
  },
  beforeInit: function () {
    (this.beforeInitFunc).each(function (init) {
      (init.value)();
      ;
    });
  },
  init: function () {
    this.beforeInit();
    var elements = Form.getElements(checkout.form);
    var method = null;
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].name == 'payment[method]') {
        if (elements[i].checked) {
          method = elements[i].value;
        }
      }
      elements[i].setAttribute('autocomplete', 'off');
    }
    if (method)
      this.switchMethod(method);
    this.afterInit();
  },
  addAfterInitFunction: function (code, func) {
    this.afterInitFunc.set(code, func);
  },
  afterInit: function () {
    (this.afterInitFunc).each(function (init) {
      (init.value)();
    });
  },
  switchMethod: function (method) {
    if (this.currentMethod && $('payment_form_' + this.currentMethod)) {
      this.changeVisible(this.currentMethod, true);
      $('payment_form_' + this.currentMethod).fire('payment-method:switched-off', {
        method_code: this.currentMethod
      });
    }
    if ($('payment_form_' + method)) {
      this.changeVisible(method, false);
      $('payment_form_' + method).fire('payment-method:switched', {
        method_code: method
      });
    } else {
      document.body.fire('payment-method:switched', {
        method_code: method
      });
    }
    if (method) {
      this.lastUsedMethod = method;
    }
    this.currentMethod = method;
  },
  changeVisible: function (method, mode) {
    var block = 'payment_form_' + method;
    [block + '_before', block, block + '_after'].each(function (el) {
      var element = $(el);
      if (element) {
        element.style.display = (mode) ? 'none' : '';
        element.select('input', 'select', 'textarea', 'button').each(function (field) {
          field.disabled = mode;
        });
      }
    });
  },
  addBeforeValidateFunction: function (code, func) {
    this.beforeValidateFunc.set(code, func);
  },
  beforeValidate: function () {
    var validateResult = true;
    (this.beforeValidateFunc).each(function (validate) {
      if ((validate.value)() == false) {
        validateResult = false;
      }
    }.bind(this));

    return validateResult;
  },
  validate: function () {
    var result = this.beforeValidate();
    if (!result) {
      return false;
    }

    // valida metodos de pagamento selecionados
    if ($$('[name="payment[method]"]:checked').length == 0) {
      alert(Translator.translate('Please specify payment method.').stripTags());
      return false;
    }

    // valida se há metodos de pagamento
    var methods = document.getElementsByName('payment[method]');
    if (methods.length == 0) {
      alert(Translator.translate('Your order cannot be completed at this time as there is no payment methods available for it.').stripTags());
      return false;
    }

    result = this.afterValidate();
    if (!result) {
      return false;
    }

    return true;
  },
  addAfterValidateFunction: function (code, func) {
    this.afterValidateFunc.set(code, func);
  },
  afterValidate: function () {
    var validateResult = true;
    (this.afterValidateFunc).each(function (validate) {
      if ((validate.value)() == false) {
        validateResult = false;
      }
    }.bind(this));

    return validateResult;
  },
  update: function () {
    var params = Form.serialize(this.form);
    checkout.setLoadWaiting('review');

    var request = new Ajax.Request(
            this.updatePaymentAjaxUrl, {
              method: 'post',
              onSuccess: this.onAfterUpdate,
              onFailure: this.onFailure,
              parameters: params
            });
  },
  updatePaymentMethod: function (elem) {
    var params = {
      'payment_method': elem.getValue()
    };
    checkout.setLoadWaiting('review');

    var request = new Ajax.Request(
            this.updatePaymentMethodUrl, {
              method: 'post',
              onSuccess: this.onAfterUpdate,
              onFailure: this.onFailure,
              parameters: params
            });
  },
  initWhatIsCvvListeners: function () {
    $$('.cvv-what-is-this').each(function (element) {
      element.observe('click', payment.toggleCvv);
    });
  },
  toggleCvv: function (event) {
    if ($('payment-tool-tip')) {
      $('payment-tool-tip').setStyle({
        top: (Event.pointerY(event)) + 'px',
        left: (Event.pointerX(event) + 30) + 'px'
      });
      $('payment-tool-tip').toggle();
    }
    Event.stop(event);
  }
};

var IdeMask = Class.create();
IdeMask.prototype = {
  initialize: function () {

  },
  canApplayMask: function () {
    if (Prototype.Browser.ie9 || Prototype.Browser.ie10) {
      if (parseFloat(Prototype.Version.substring(0, 3)) < 1.7) {
        return false;
      }
    }
    return true;
  },
  inject: function (o, f) {
    v_obj = o;
    v_fun = f;
    setTimeout("ideMaskInst.callMask()", 1);
  },
  callMask: function () {
    v_obj.value = v_fun(v_obj.value);
  },
  cep: function (v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{5})(\d)/, "$1-$2");
    console.log(v);

    return v;
  },
  phone: function (v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");

    return v;
  },
  cnpj: function (v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");

    return v;
  },
  cpf: function (v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return v;
  },
  date: function (v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    v = v.replace(/(\d{2})(\d{2})$/, "$1$2");

    return v;
  }
};
var ideMaskInst = new IdeMask();
var IdeDob = Class.create();
IdeDob.prototype = {
  initialize: function (day, month, year, full, format) {
    this.day = $(day);
    this.month = $(month);
    this.year = $(year);
    this.full = $(full);
    this.format = format;
  },
  bind: function () {
    this.full.value = this.format.replace(/%[mb]/i, this.month.value).replace(/%[de]/i, this.day.value).replace(/%y/i, this.year.value);
  },
  isNeedToBind: function () {
    var needBind = false;
    $$('input[type="radio"][name="billing[tipo_pessoa]"]').each(function (el) {
      if (el.checked && el.value == 'F') {
        needBind = true;
      }
    });
    return needBind;
  }
};

var IdeCheckoutvmLogin = Class.create();
IdeCheckoutvmLogin.prototype = {
    initialize: function(form, urls, text) {
        this.form = form;
        this.usernameId = 'login:username';
        this.passwordId = 'login:password';

        this.loginUrl = urls.login;
        this.forgotpasswordUrl = urls.forgotpassword;
        this.redirectUrl = urls.redirect;

        this.validator = new Validation(this.form);

        this.loginLinkText = text.loginLinkText;
        this.forgottenLinkText = text.forgottenLinkText;
    },
    changeToLogin: function() {
        this.reset();
        ideForgotPasswordBlock.hide();
        ideLoginBlockInst.show();
        $('login:username').focus();
    },
    changeToForgotPassword: function() {
        this.reset();
        ideLoginBlockInst.hide();
        ideForgotPasswordBlock.show();
        $('forgotpassword:username').focus();
    },
    doLogin: function() {
        var v = $(this.usernameId).value.trim();
        var p = $(this.passwordId).value.trim();

        if ((v == 'undefined' || v == '') || (p == 'undefined' || p == '')) {
            if ((v == 'undefined' || v == '')) {
                $(this.usernameId).removeClassName('validation-passed');
                $(this.usernameId).addClassName('validation-failed');
            }
            if ((p == 'undefined' || p == '')) {
                $(this.passwordId).removeClassName('validation-passed');
                $(this.passwordId).addClassName('validation-failed');
            }
        } else {
            $(this.usernameId).removeClassName('validation-failed');
            $(this.usernameId).addClassName('validation-passed');
            $(this.passwordId).removeClassName('validation-failed');
            $(this.passwordId).addClassName('validation-passed');

            var request = new Ajax.Request(this.loginUrl, {
                method: 'post',
                parameters: {'login[username]': $(this.usernameId).value, 'login[password]': $(this.passwordId).value},
                onSuccess: this._onSuccessLogin.bindAsEventListener(this)
            });
        }
        return false;
    },
    resetPassword: function() {
        var v = $(this.usernameId).value.trim();

        if (v == 'undefined' || v == '') {
            $(this.usernameId).removeClassName('validation-passed');
            $(this.usernameId).addClassName('validation-failed');
        } else {
            $(this.usernameId).removeClassName('validation-failed');
            $(this.usernameId).addClassName('validation-passed');

            var request = new Ajax.Request(this.forgotpasswordUrl, {
                method: 'post',
                parameters: {'forgotpassword[username]': $(this.usernameId).value},
                onSuccess: this._onSuccessLogin.bindAsEventListener(this)
            });
        }
        return false;
    },
    _onSuccessLogin: function(transport) {
        var response = null;
        if (transport && transport.responseText) {
            try {
                response = eval('(' + transport.responseText + ')');
            } catch (e) {
                response = {};
            }
        }

        if (response.success) {
            if (response.message) {
                this._showNoteMessage(response.message);
                setTimeout(window.location.href = this.redirectUrl, 2000);
            } else {
                window.location.href = this.redirectUrl;
            }
        } else if (response.error) {
            if (response.errorMessage.message) {
                this._showErrorMessage(response.errorMessage.message);
            } else {
                this._clearMessage();
            }
            if (response.errorMessage.errorFields) {
                var ideCheckoutValidationInst = new IdeCheckoutvmValidation(this.form);
                ideCheckoutValidationInst.fillFormErrors(response.errorMessage.errorFields);
            }
        }
    },
    _showErrorMessage: function(message) {
        var m = '<div id="messages"><ul class="messages"><li class="error-msg"><ul><li><span>' + message + '</span></li></ul></li></ul></div>';
        $('idecheckoutvm-login-message').update(m);
    },
    _showNoteMessage: function(message) {
        var m = '<div id="messages"><ul class="messages"><li class="note-msg"><ul><li><span>' + message + '</span></li></ul></li></ul></div>';
        $('idecheckoutvm-login-message').update(m);
    },
    _clearMessage: function() {
        $('idecheckoutvm-login-message').update('');
    },
    reset: function() {
        this._clearMessage();
        this.validator.reset();
    },
    forceLogin: function(message) {
        this._showNoteMessage(message);
        $(ideLoginBlockInst.usernameId).setValue($('billing:email').getValue());
        $(ideLoginBlockInst.passwordId).focus();
        Effect.toggle('billing-new-address-form', 'appear');
        Effect.toggle('idecheckoutvm-login-box', 'blind', { duration: 2.0 });
    }
};

var IdeLoginBlock = Class.create();
IdeLoginBlock.prototype = {
    initialize: function() {
        this.usernameId = 'login:username';
        this.passwordId = 'login:password';
        this.boxLocation = '#idecheckoutvm-login-box div.front';
    },
    show: function() {
        $('billing-new-address-form').hide();
        $$(this.boxLocation).invoke('show');

        var username = $(this.usernameId);
        username.addClassName('required-entry');
        username.addClassName('validate-email');

        var password = $(this.passwordId);
        password.addClassName('required-entry');
        password.addClassName('validate-password');
    },
    hide: function() {
        $$(this.boxLocation).invoke('hide');

        var username = $(this.usernameId);
        username.removeClassName('required-entry');
        username.removeClassName('validate-email');

        var password = $(this.passwordId);
        password.removeClassName('required-entry');
        password.removeClassName('validate-password');

        $('billing-new-address-form').show();
    },
    reset: function() {

    }
};
var ideLoginBlockInst = new IdeLoginBlock();

var IdeForgotPasswordBlock = Class.create();
IdeForgotPasswordBlock.prototype = {
    initialize: function() {
        this.usernameId = 'forgotpassword:username';
        this.boxLocation = '#idecheckoutvm-login-box div.back';
    },
    show: function() {
        $('billing-new-address-form').hide();
        $$(this.boxLocation).invoke('show');

        var username = $(this.usernameId);
        username.addClassName('required-entry');
        username.addClassName('validate-email');
    },
    hide: function() {
        $('billing-new-address-form').hide();
        $$(this.boxLocation).invoke('hide');

        var username = $(this.usernameId);
        username.removeClassName('required-entry');
        username.removeClassName('validate-email');
    }
};
var ideForgotPasswordBlock = new IdeForgotPasswordBlock();

var CheckoutVmPessoa = Class.create();
CheckoutVmPessoa.prototype = {
    initialize: function(form, text) {
        this.form = form;
        this.rg = 'billing:rg';
        this.dob = 'billing:dob';
        this.day = 'billing:day';
        this.month = 'billing:month';
        this.year = 'billing:year';
        this.gender = 'billing:gender';
        this.taxVat = 'billing:taxvat';
        
        this.inscEst = 'billing:insc_est';
        this.razaoSocial = 'billing:razao_social';
        this.nomeFantasia = 'billing:nome_fantasia';
        
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
        // PJ
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
            //$(this.taxVat).setValue('');
            $(this.taxVat).observe('keyup', function () {
                ideMaskInst.inject(this, ideMaskInst.cpf);
            }).triggerEvent('keyup');
        }
        this._updateText(this.cpf);
    },
    
    showPj: function() {
        // PF
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
            $(this.taxVat).setValue('');
            $(this.taxVat).observe('keyup', function () {
                ideMaskInst.inject(this, ideMaskInst.cnpj);
            }).triggerEvent('keyup');
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

var CheckoutVmCoupon = Class.create();
CheckoutVmCoupon.prototype = {
    initialize: function(form, urls) {
        this.form = form;

        this.couponUrl = urls.coupon;
        this.redirectUrl = urls.redirect;

        this.couponCodeId = 'coupon:code';
        this.removeCouponeId = 'remove:coupone';
        this.couponMessageId = 'idecheckoutvm-coupon-message';

        this.buttonCouponId = 'idecheckoutvm-button-coupon';
        this.buttonCancelCouponId = 'idecheckoutvm-button-cancel-coupon';
        this.removeOption = false;

        this._bind();
    },
    _bind: function() {

    },
    _post: function() {
        var v = $(this.couponCodeId).value.trim();
        if (v == 'undefined' || v == '') {
            //$(this.couponCodeId).setStyle({backgroundColor: '#fdfaa4'});
            $(this.couponCodeId).removeClassName('validation-passed');
            $(this.couponCodeId).addClassName('validation-failed');
        } else {
            $(this.couponCodeId).removeClassName('validation-failed');
            $(this.couponCodeId).addClassName('validation-passed');
            var request = new Ajax.Request(this.couponUrl, {
                method: 'post',
                parameters: {"coupon_code": $(this.couponCodeId).value, "remove": $(this.removeCouponeId).value},
                onSuccess: this._onSuccess.bindAsEventListener(this)
            });
        }
        return false;
    },
    _onSuccess: function(transport) {
        var response = null;
        if (transport && transport.responseText) {
            try {
                response = eval('(' + transport.responseText + ')');
            } catch (e) {
                response = {};
            }
        }

        if (response.success) {
            if (response.message) {
                this._showNoteMessage(response.message);
            }
            if (response.updateSection.couponDiscount != null) {
                if (response.updateSection.couponDiscount.html != null && response.updateSection.couponDiscount.html != "") {
                    $(this.buttonCancelCouponId).show();
                    $(this.buttonCouponId).hide();
                } else {
                    $(this.buttonCancelCouponId).hide();
                    $(this.buttonCouponId).show();
                }
            } else {
                $(this.buttonCancelCouponId).hide();
                $(this.buttonCouponId).show();
            }
            checkout.updateBlock(response.updateSection.shippingMethod);
            checkout.updateBlock(response.updateSection.paymentMethod);
            checkout.updateBlock(response.updateSection.review);
        } else if (response.error) {
            if (response.errorMessage.message) {
                this._showErrorMessage(response.errorMessage.message);
            } else {
                this._clearMessage();
            }
            if (response.errorMessage.errorFields) {
                var ideCheckoutValidationInst = new IdeCheckoutvmValidation(this.form);
                ideCheckoutValidationInst.fillFormErrors(response.errorMessage.errorFields);
            }
        }
    },
    _showErrorMessage: function(message) {
        var m = '<div id="messages"><ul class="messages"><li class="error-msg"><ul><li><span>' + message + '</span></li></ul></li></ul></div>';
        $(this.couponMessageId).update(m);
    },
    _showNoteMessage: function(message) {
        var m = '<div id="messages"><ul class="messages"><li class="note-msg"><ul><li><span>' + message + '</span></li></ul></li></ul></div>';
        $(this.couponMessageId).update(m);
    },
    _clearMessage: function() {
        $(this.couponMessageId).update('');
    },
    reset: function() {
        $(this.couponCodeId).setValue('');
        this._clearMessage();
        this.validator.reset();
    },
    doValid: function() {
        this.removeOption = false;
        $(this.couponCodeId).addClassName('required-entry');
        $(this.removeCouponeId).setValue('0');
        this._post();
    },
    doCancel: function() {
        this.removeOption = true;
        $(this.couponCodeId).removeClassName('required-entry');
        $(this.removeCouponeId).setValue('1');
        this._post();
    }
};

var CheckoutVmAgreement = Class.create();
CheckoutVmAgreement.prototype = {
    initialize: function(id) {
        this.id = id;
        this.popup = null;

        this._bind();
    },
    
    _bind: function() {
        this.popup = new Control.Modal($(this.id), {
            width: 400,
            overlayOpacity: 0.75,
            className: 'modal-idecheckoutvm',
            fade: true
        });
    },
    
    doClose: function() {
        this.popup.close();
    }
};

if (!Translator) {
    var Translator = new Translate();
}
Validation.add('idecheckoutvm-custom-field-option', 'Informe: "req" para Obrigatório, "opt" para Opcional', function(v) {
    return "req" == v.toLowerCase() || "opt" == v.toLowerCase();
});
Validation.add('idecheckoutvm-cpf', Translator.translate('CPF Inválido.'), function(v) {
    return v.isCPF();
});
Validation.add('idecheckoutvm-cnpj', Translator.translate('CNPJ Inválido.'), function(v) {
    return v.isCNPJ();
});
Validation.add('validate-cc-owner-eloom', Translator.translate('Use apenas letras (a-z or A-Z) ou espaços.'), function(v) {
	return Validation.get('IsEmpty').test(v) || /^[a-zA-Z ]+$/.test(v);
});
Validation.add('validate-cc-number-eloom', Translator.translate('Please enter a valid credit card number.'), function(v) {
	return Validation.get('IsEmpty').test(v) || $j.payment.validateCardNumber(v);
});
Validation.add('validate-zip-eloom', Translator.translate('Informe um CEP válido. Ex.: 90602-123.'), function(v) {
	return Validation.get('IsEmpty').test(v) || /(^\d{5}-\d{3}$)/.test(v);
});

String.prototype.isCPF = function() {
    var c = this;
    if (c == "") {
        return true
    }
    if ((c = c.replace(/[^\d]/g, "").split("")).length != 11)
        return false;
    if (new RegExp("^" + c[0] + "{11}$").test(c.join("")))
        return false;
    for (var s = 10, n = 0, i = 0; s >= 2; n += c[i++] * s--)
        ;
    if (c[9] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false;
    for (var s = 11, n = 0, i = 0; s >= 2; n += c[i++] * s--)
        ;
    if (c[10] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false;

    return true;
};

String.prototype.isCNPJ = function() {
    var c = this;
    if (c == "") {
        return true
    }
    var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    if ((c = c.replace(/[^\d]/g, "").split("")).length != 14)
        return false;
    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i])
        ;
    if (c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false;
    for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++])
        ;
    if (c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false;
    return true;
};

var IdeCheckoutvmValidation = Class.create();
IdeCheckoutvmValidation.prototype = {
    initialize: function(form) {
        this.form = (form != 'undefined' ? form : null);
    },
    fillFormErrors: function(errorFields) {
        if (errorFields instanceof Array) {
            errorFields.each(function(e) {
                var elm = $(e.inputId);
                var errorMsg = null;
                if (elm) {
                    if (typeof e.message == 'string') {
                        errorMsg = e.message;
                    } else if (typeof e.message == 'object') {
                        errorMsg = e.message[0];
                    }
                    var name = e.inputId;
                    var advice = Validation.createAdvice(name, elm, false, errorMsg);
                    Validation.insertAdvice(elm, advice);
                    Validation.showAdvice(elm, advice, name);
                }
            });
        } else {
            var e = errorFields;
            var elm = $(e.inputId);
            if (elm) {
                if (typeof e.message == 'string') {
                    errorMsg = e.message;
                } else if (typeof e.message == 'object') {
                    errorMsg = e.message[0];
                }
                var name = e.inputId;
                var advice = Validation.createAdvice(name, elm, false, errorMsg);
                Validation.insertAdvice(elm, advice);
                Validation.showAdvice(elm, advice, name);
            }
        }
    },
    showErrorMessage: function(elm, errorMsg) {
        var name = elm.id;
        var advice = Validation.createAdvice(name, elm, false, errorMsg);
        Validation.insertAdvice(elm, advice);
        Validation.showAdvice(elm, advice, name);
    }
};