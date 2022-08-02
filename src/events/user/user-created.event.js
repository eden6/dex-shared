"use strict";
exports.__esModule = true;
exports.UserCreatedEvent = void 0;
var UserCreatedEvent = /** @class */ (function () {
    function UserCreatedEvent(email) {
        this.email = email;
    }
    UserCreatedEvent.eventName = 'USER_CREATED';
    return UserCreatedEvent;
}());
exports.UserCreatedEvent = UserCreatedEvent;
