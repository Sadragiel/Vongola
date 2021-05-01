import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable() 
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async create(dto: CreateUserDto): Promise<User> {
        const user = await this.userModel.create({
            ...dto,
            role: 0,
        });
        return user;
    }

    async getAll(): Promise<User[]> {
        const userList = await this.userModel.find();
        return userList;
    }

    async getOne() {
    }

    async delete() {
    }
}