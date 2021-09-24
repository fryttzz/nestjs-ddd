import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "../Services/User.service";
import { User } from "../Models/User";

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("/user")
    postUser(@Body() user: User): User {
        return this.userService.postUser(user);
    }

    @Get("/user")
    getUser(): User {
        return this.userService.getUser();
    }

    @Get("/user/:id")
    getUserById(@Param('id') id: number): User {
        return this.userService.getUserById(id);
    }

    @Put("/user/:id")
    updateUser(@Param('id') id: number, @Body() user: User): User {
        return this.userService.updateUser(id, user);
    }

    @Delete("/user/:id")
    removeUser(@Param('id') id : number) : string {
        return this.userService.removeUser(id);
    }
}