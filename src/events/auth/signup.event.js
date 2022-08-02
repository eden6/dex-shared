"use strict";
exports.__esModule = true;
exports.SignupEvent = void 0;
var SignupEvent = /** @class */ (function () {
    function SignupEvent(email, password) {
        this.email = email;
        this.password = password;
    }
    SignupEvent.eventName = 'AUTH_SIGNUP';
    return SignupEvent;
}());
exports.SignupEvent = SignupEvent;
