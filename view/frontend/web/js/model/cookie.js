define([
    'jquery',
    'jquery/jquery.cookie'
], function ($) {
    'use strict';

    return {
        consentCookieExists: function (name) {
            return (!!$.cookie(name));
        },

        getConsentCookieObject: function(name) {
            return $.cookie(name);
        },

        saveAll: function (name, expiration, secure, systemNames) {
            var data = {};
            $.each(systemNames, function (index, value) {
                var sysName = 'cg_' + value;
                data[sysName] = 1;
            });
            data['expire'] = expiration;
            data['secure'] = secure;
            $.cookie(name, JSON.stringify(data), {expires: this.getExpiration(expiration)});
        },

        saveSelected: function (name, expiration, secure, systemNames) {
            var data = {};
            $.each(systemNames, function (index, value) {
                var sysName = 'cg_' + value;
                var checkboxSelector = '.deloitte-cookie-consent-modal .consent-tab-content.' + value + ' .cookie-toggle input[type="checkbox"]';
                data[sysName] = ($(checkboxSelector).is(':checked') ? 1 : 0);
            });
            data['expire'] = expiration;
            data['secure'] = secure;
            $.cookie(name, JSON.stringify(data), {expires: this.getExpiration(expiration)});
        },

        closeCookieNotice: function () {
            $('.deloitte-cookie-notice').css('display', 'none');
        },

        getExpiration: function (expiration) {
            var today = new Date();
            var expireDate = new Date(today);
            expireDate.setDate(today.getDate()+expiration);

            return expireDate;
        }
    };
});
