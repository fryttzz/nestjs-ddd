import { Module } from "@nestjs/common";
import { UserController } from "../Controllers/User.controller";
import { UserService } from "../Services/User.service";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}