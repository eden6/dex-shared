export class SignupEvent {
  constructor(
    public readonly email: string,
    public readonly password: string,
  ) {}

  static eventName: string = 'AUTH_SIGNUP';
}
