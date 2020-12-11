import {Body, Controller, Delete , Get, Param, Patch, Post, Put} from '@nestjs/common';
import { Todo } from './models/todo.model';
import { CreateTodoDto} from './dto/create-todo.dto';
import { UpdateTodoDto} from './dto/update-todo.dto';

@Controller('todo')
export class TodoController{
    private todos: Todo[] = [];
    constructor() {
        const todo = new Todo();
        todo.name = 'Sport';
        todo.description = 'Faire du sport';
        this.todos = [
        todo
        ]
    }
    private findTodoByID(id: string) : Todo{
        const todo = this.todos.find(
            (actualTodo: Todo) => actualTodo.id ===id
        );
        if (todo)
        {
        return todo;
      }
    }
  
    @Get('')
    getTodos() {
      return this.todos;
    }

    @Get(':id')
    getTodosById(@Param('id') id:string) {
      return this.findTodoByID(id);
    }


    @Delete(":id")
    deleteTodos(@Param('id') id:string){
        const todo = this.findTodoByID(id);
        this.todos.splice(this.todos.indexOf(todo),1);
    }

    @Post("")
    addTodos(@Body() newTodo: CreateTodoDto){
        const{name, description}= newTodo;
        const todo = new Todo();
        todo.name = name;
        todo.description = description;
        this.todos.push(todo);
        return todo;

    }

    @Put('id')
    updateTodo(
        @Body() newTodo : Partial<Todo>, 
        @Param('id') id: string){
            const{name, description, status}= newTodo;
            const todo = this.findTodoByID(id);
            todo.name = name? name: todo.name;
            todo.description = description? description: todo.description;
            todo.status = status? status: todo.status;
            return todo;
    }
}