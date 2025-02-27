export interface RegisterPayloadUserInterface {
    email: string;
    username: string;
    password: string;
}

export interface RegisterPayloadInterface {
    user: RegisterPayloadUserInterface;
}
