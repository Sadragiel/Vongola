import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    login!: string;

    @Prop()
    password!: string;

    @Prop()
    role!: number;

    @Prop()
    name!: string;

    @Prop()
    bio!: string;

    @Prop()
    age!: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
