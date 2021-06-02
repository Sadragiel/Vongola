import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../../common/user';
import { UserService } from './user.service';

@Controller('/api/v1/user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
    }

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    getOne() {}

    delete() {}
}
