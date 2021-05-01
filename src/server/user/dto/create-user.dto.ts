export class CreateUserDto {
    readonly login: string;
    readonly password: string;
    readonly name: string;
    readonly bio: string;
    readonly age: number;
}