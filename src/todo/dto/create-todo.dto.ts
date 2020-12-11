import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import {MessagesErreurEnum} from '../enums/messages_erreur.enum';

export class CreateTodoDto{
    @IsNotEmpty({
        message: MessagesErreurEnum.IsNotEmpty
    })
    @MinLength(3,{
        message: MessagesErreurEnum.minLength + "3"
    })
    @MaxLength(10,{
        message: MessagesErreurEnum.maxLength + "10"
    })
    name:string;

    @IsString({
        message:MessagesErreurEnum.isString
    })
    @IsNotEmpty({
        message: MessagesErreurEnum.IsNotEmpty
    })
    @MinLength(10,{
        message:MessagesErreurEnum.minLength + "10"
    })
    description: string;
}