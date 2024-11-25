import { UserId } from "../../application/use-cases/users/interfaces/common";
import { CreateUserInput } from "../../application/use-cases/users/interfaces/input";
import { UserOutput } from "../../application/use-cases/users/interfaces/output";


interface IUserRepositoryPort {
  create(user: CreateUserInput): Promise<UserId>
  retrieve(id: UserId): Promise<UserOutput | null>
}

export default IUserRepositoryPort;