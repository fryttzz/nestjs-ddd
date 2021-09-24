import { Injectable } from "@nestjs/common";
import { User } from "src/Models/User";

@Injectable()
export class UserService {
    postUser(user: User): User {
        return { id: 1, name: user.name, email: user.email }
    }

    getUser(): User {
        return { id: 1, name: "Matheus Santos", email: "matheusps0012@gmail.com" }
    }

    getUserById(id: number): User {
        return { id: `${id}`, name: "Matheus", email: "matheuszinho@gmail.com" }
    }

    updateUser(id: number, user: User): User {
        return { id, ...user }
    }

    removeUser(id: number): string {
        return `Usuário de id: ${id} removido com sucesso!!`
    }
}