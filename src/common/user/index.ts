export enum Role {
    regular = 'regular',
    admin = 'admin',
};

export interface CreateUserDto {
    readonly login: string;
    readonly password: string;
    readonly name: string;
    readonly bio: string;
    readonly age: number;
}

export interface UserDto extends CreateUserDto {
    readonly role: Role;
}
