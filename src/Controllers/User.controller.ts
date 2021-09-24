import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "../Services/User.service";
import { User } from "../Models/User";

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get("/user")
    getUser(): User {
        return this.userService.getUser();
    }

    @Get("/user/:id")
    getUserById(@Param('id') id : number): User {
        return this.userService.getUserById(id);
    }
}