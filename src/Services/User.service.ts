import { Injectable } from "@nestjs/common";
import { User } from "src/Models/User";

@Injectable()
export class UserService {
    getUser(): User {
        return { id: 1, name: "Matheus Santos", email: "matheusps0012@gmail.com" }
    }

    getUserById(id: number): User {
        return { id: `${id}`, name: "Matheus", email: "matheuszinho@gmail.com" }
    }
}