export type SignupResponseType = {
    error: boolean,
    user?: {id: null, email: string, name: string, lastName: string}
    message: string,
}