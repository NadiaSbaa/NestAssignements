import { IsIn, IsOptional } from "class-validator";
import { DefaultDeserializer } from "v8";
import { TodoStatusEnum } from "../enums/todo-status.enum";


export class FindTodoDto {
    @IsIn([
        TodoStatusEnum.actif,
        TodoStatusEnum.waiting,
        TodoStatusEnum.done
    ],{
        "message": "Le status choisi est invalide"
    })
    status: TodoStatusEnum;
    @IsOptional()
    description = "";
}
