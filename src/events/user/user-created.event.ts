export class UserCreatedEvent {
    constructor(
        public readonly email: string,
    ) {}

    static eventName: string = 'USER_CREATED';
}
