define([
    'jquery',
    'Deloitte_CookieConsent/js/model/cookie'
], function ($, cookie) {
    return function (options) {
        if (!cookie.consentCookieExists(options.cookie_name)) {
            $('.deloitte-cookie-notice').css('display', 'block');
        }
        $(document).on('click', '.deloitte-cookie-notice .notice__btn-accept', function (event) {
            event.preventDefault();
            cookie.saveAll(options.cookie_name, options.expiration, options.secure, options.cookie_groups_data.system_names);
            cookie.closeCookieNotice();
        });
    }
});