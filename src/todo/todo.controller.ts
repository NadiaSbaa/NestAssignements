import {Body, Controller, Delete , Get, Param, Patch, Post, Put} from '@nestjs/common';
import { Todo } from './models/todo.model';
import { CreateTodoDto} from './dto/create-todo.dto';
import { UpdateTodoDto} from './dto/update-todo.dto';
import {FindTodoDto} from './dto/find-todo.dto';
import { TodoService } from './todo.service';
import { TodoEntity } from './entities/todo.entity';

@Controller('todo')
export class TodoController{
    private todos: Todo[] = [];

    constructor(
        private todoService: TodoService
    ){}

    @Get('')
    async getTodos(): Promise<TodoEntity[]>
    {
        return await this.todoService.getTodos();
    }

    @Get('findStatusDescription')
    async findByStatusAndDescription(
        @Body() statusAndDescription: FindTodoDto
    ){
        return await this.todoService.findByStatusAndDescription(statusAndDescription);
    }


    @Get(':id')
    async getTodoById(
        @Param('id') id: number
    ): Promise<TodoEntity>
    {
        return await this.todoService.getTodoById(id);
    }
    

    @Post() 
    async addTodo(
        @Body() todo: CreateTodoDto,
    ): Promise<TodoEntity>{
        return await this.todoService.addTodo(todo);
    }


    @Put(':id')
    async updateTodo(
        @Param('id') id: string,
        @Body() newTodo: UpdateTodoDto
        ): Promise<TodoEntity> 
    {
        return await this.todoService.updateTodo(id,newTodo);
    }


    @Delete(':id')
    async deleteTodo(
        @Param('id') id: number
    )
    {
        return await this.todoService.deleteTodo(id);
    }

    @Get('restore/:id')
    async restoreTodoById(
        @Param('id') id: number
    )
    {
        return await this.todoService.restoreTodo(id);
    }

}